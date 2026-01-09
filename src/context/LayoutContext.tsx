import { createContext } from "react";

interface LayoutContextProps {
  headerHeight: number;
  editorText: string;
  setEditorText: (text: string) => void;
  text : string;
  highlightedHtml : string;
  biases : string[];
  score: number
  pronounStats: Record<string, number>
}

export const LayoutContext = createContext<LayoutContextProps>({
  headerHeight: 0,
  editorText: "",
  setEditorText: () => {},
  text : "",
  highlightedHtml : "",
  biases : [],
  score: 0,
  pronounStats: {},

});


