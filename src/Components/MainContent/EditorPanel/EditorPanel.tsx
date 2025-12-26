import { PanelHeader } from "./PanelHeader.tsx";
import { TextEditor } from "./TextEditor.tsx";

export const EditorPanel = () => {
  return (
    <section className="editor-panel">
      <PanelHeader />
      <TextEditor />
    </section>
  );
};
