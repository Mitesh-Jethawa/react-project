import { createContext } from "react";
import type { BackendResult } from "../types";
import type { Status } from "../types/Status";

interface LayoutContextProps {
  headerHeight: number;
  editorText: string;
  setEditorText: (text: string) => void;
  result: BackendResult;
  status: Status;
  setStatus: (text: Status) => void;
}

export const LayoutContext = createContext<LayoutContextProps>({
  headerHeight: 0,
  editorText: "",
  setEditorText: () => {},
  result: {
    text: "",
    highlightedHTML: "",
    biases: [],
    score: 0,
    pronounStats: {},
  },
  status: "ready",
  setStatus: () => {},
});
