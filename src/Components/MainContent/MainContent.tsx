import { EditorPanel } from "./EditorPanel/EditorPanel";
import { ResultsPanel } from "./ResultsPanel/ResultsPanel";

export const MainContent = () => {
  return (
    <main className="main-content">
      <EditorPanel />
      <ResultsPanel />
    </main>
  );
};
