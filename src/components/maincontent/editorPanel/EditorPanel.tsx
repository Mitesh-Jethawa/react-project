import { useEffect, useState, useContext, useRef } from "react";
import { DEMO_TEXT } from "../../../constants";
import { LayoutContext } from "../../../context";
import { TextEditor } from "./TextEditor";
import { getWordCount } from "../../../utils";

export const EditorPanel = () => {
  const { headerHeight, editorText, setEditorText } = useContext(LayoutContext);
  const [editorHeight, setEditorHeight] = useState(0);

  const divRef = useRef<HTMLDivElement>(null);

  const moveCursorToEnd = (e: HTMLElement) => {
    e.focus();

    const selection = window.getSelection();
    if (!selection) return;

    const range = document.createRange();
    range.selectNodeContents(e);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  useEffect(() => {
    const availableHeight = window.innerHeight - headerHeight - 100;
    setEditorHeight(availableHeight);
  }, [headerHeight]);

  useEffect(() => {
    setTimeout(() => {
      loadDemo()
    }, 1000)
  }, [])

  const loadDemo = () => {
    setEditorText(DEMO_TEXT);
    setTimeout(() => {
      if (!divRef.current) return;
      moveCursorToEnd(divRef.current);
    }, 300);
  };

  const clearText = () => {
    setEditorText("");
    setTimeout(() => {
      if (!divRef.current) return;
      moveCursorToEnd(divRef.current);
    }, 300);
  };

  return (
    <section className="editor-panel">
      <div className="panel-header">
        <h2>
          <i className="fas fa-edit" /> Write Your Text
        </h2>

        <div className="editor-toolbar">
          <button className="btn btn-secondary" onClick={clearText}>
            <i className="fas fa-broom" /> Clear
          </button>
          <button className="btn btn-secondary" onClick={loadDemo}>
            <i className="fas fa-magic" /> Load Demo
          </button>
        </div>
      </div>
      <div className="text-editor" style={{ minHeight: editorHeight }}>
        <textarea name="text-input" style={{ display: "none" }} />
        <TextEditor editorHeight={editorHeight} ref={divRef} />
        <div className="editor-footer">
          <div className="char-count">
            <span>{getWordCount(editorText)}</span> words
          </div>

          <div className="status">
            <span>● Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};
