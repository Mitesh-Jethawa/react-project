import { EditorPanel } from "./editorPanel/EditorPanel";
import { ResultsPanel } from "./resultspanel";

export const MainContent = () => {
  return (
    <main className="main-content">
      <EditorPanel />
      <ResultsPanel />
    </main>
  );
};
