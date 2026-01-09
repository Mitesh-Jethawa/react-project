import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Header } from "./components/header";
import { MainContent } from "./components/maincontent";
import { Footer } from "./components/footer";
import { LayoutContext } from "./context";
import { getWordCount, analyzeText } from "./utils";

const App = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [editorText, setEditorText] = useState("");
  const [text, setText] = useState<string>("")
  const [highlightedHtml, setHighlightedHtml] = useState<string>("")
  const [biases, setBiases] = useState<string[]>([])
  const [score, setScore] = useState<number>(0)
  const [pronounStats, setPronounStats] = useState<Record<string, number>>({})
  
  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
  if (!editorText) return;

  analyzeText(editorText)
    .then((res) => {
      setText(res.text)
      setHighlightedHtml(res.highlighted_html)
      setBiases(res.biases)
      setScore(res.score)
      setPronounStats(res.pronoun_stats)
    })
    .catch((err) => console.error(err))
}, [editorText])

  return (
    <>
      <LayoutContext.Provider
        value={{ headerHeight, editorText, setEditorText, text ,highlightedHtml, biases, score, pronounStats  }}
      >
        <Header
          ref={headerRef}
          score={100}
          words={getWordCount(editorText)}
          biases={0}
        />
        <MainContent />
      </LayoutContext.Provider>
      <Footer />
    </>
  );
};

export default App;
