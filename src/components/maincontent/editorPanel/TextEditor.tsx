import { useRef, useEffect, useContext, forwardRef } from "react";
import { LayoutContext } from "../../../context";
import debounce from "lodash.debounce";
import { getCursorCharacterOffset } from "../../../utils";

type TextEditorProps = {
  editorHeight: number;
};

export const TextEditor = forwardRef<HTMLDivElement, TextEditorProps>(
  ({ editorHeight }, forwardedRef) => {
    const { editorText, setEditorText } = useContext(LayoutContext);
    const cursorOffsetRef = useRef<number>(0);
    const localRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      localRef.current?.focus();
    }, [localRef]);

    useEffect(() => {
      if (localRef.current && localRef.current?.textContent !== editorText) {
        localRef.current.textContent = editorText;
      }
    }, [editorText]);

    const setRefs = (e: HTMLDivElement | null) => {
      localRef.current = e;

      if (typeof forwardedRef === "function") {
        forwardedRef(e);
      } else if (forwardedRef) {
        forwardedRef.current = e;
      }
    };

    const debouncedSync = useRef(
      debounce((text: string) => {
        setEditorText(text);
      }, 100)
    ).current;

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
      saveCursor();
      const value = e.currentTarget.textContent ?? "";
      debouncedSync(value);
    };

    const saveCursor = () => {
      if (!localRef.current) return;
      cursorOffsetRef.current = getCursorCharacterOffset(localRef.current);
    };

    return (
      <div
        className="editable-textarea"
        onInput={handleInput}
        onKeyUp={saveCursor}
        onMouseUp={saveCursor}
        contentEditable
        tabIndex={0}
        style={{ minHeight: editorHeight - 100 }}
        ref={setRefs}
      ></div>
    );
  }
);
