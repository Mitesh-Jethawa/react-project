import { createContext } from "react";

interface LayoutContextProps {
  headerHeight: number;
  editorText: string;
  setEditorText: (text: string) => void;
}

export const LayoutContext = createContext<LayoutContextProps>({
  headerHeight: 0,
  editorText: "",
  setEditorText: () => {},
});


