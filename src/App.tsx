import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Header } from "./components/header";
import { MainContent } from "./components/maincontent";
import { Footer } from "./components/footer";
import { LayoutContext } from "./context";
import { getWordCount, analyzeText } from "./utils";
import type { BackendResult } from "./types";
import type { Status } from "./types/Status";

const App = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [editorText, setEditorText] = useState<string>("");
  const [status, setStatus] = useState<Status>("ready");
  const requestIdRef = useRef(0);
  const [result, setResult] = useState<BackendResult>({
    text: "",
    highlightedHTML: "",
    pronounStats: {},
  });

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);


const timeoutRef = useRef<number | null>(null);

useEffect(() => {
  if (!editorText.trim()) return;

  const controller = new AbortController();
  
  const requestId = ++requestIdRef.current;

  if (timeoutRef.current) clearTimeout(timeoutRef.current);

  setStatus("analyzing");

  const debounceTimer = setTimeout(() => {
    analyzeText(editorText, controller.signal)
      .then((res) => {
        if (requestId !== requestIdRef.current) return;
        setResult(res);
        setStatus("success");

        timeoutRef.current = setTimeout(() => {
          if (requestId !== requestIdRef.current) return;
          setStatus("ready");
        }, 2000);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        if (requestId !== requestIdRef.current) return;
        setStatus("error");

        timeoutRef.current = setTimeout(() => {
          if (requestId !== requestIdRef.current) return;
          setStatus("ready");
        }, 2000);
      });
  }, 100);

  return () => {
    clearTimeout(debounceTimer);
    controller.abort();
  };
}, [editorText]);

  return (
    <>
      <LayoutContext.Provider
        value={{
          headerHeight,
          editorText,
          setEditorText,
          result,
          status,
          setStatus,
        }}
      >
        <Header
          ref={headerRef}
          score={result.score || 100}
          words={getWordCount(editorText)}
          biases={result.biases?.length || 0}
        />
        <MainContent />
      </LayoutContext.Provider>
      <Footer />
    </>
  );
};

export default App;
