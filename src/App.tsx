import { useLayoutEffect, useRef, useState } from "react";
import { Header } from "./components/header";
import { MainContent } from "./components/maincontent";
import { Footer } from "./components/footer";
import { LayoutContext } from "./context";
import { getWordCount } from "./utils";

const App = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [editorText, setEditorText] = useState("");

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <LayoutContext.Provider value={{ headerHeight, editorText, setEditorText }}>
        <Header ref={headerRef} score={100} words={getWordCount(editorText)} biases={0} />
        <MainContent />
      </LayoutContext.Provider>
      <Footer />
    </>
  );
};

export default App;
