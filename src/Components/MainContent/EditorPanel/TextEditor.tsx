export const TextEditor = () => {
  return (
    <div className="text-editor">
      <textarea style={{ display: "none" }} />

      <div className="editable-textarea" contentEditable="true" autoFocus/>

      <div className="editor-footer">
        <div className="char-count">
          <span>0</span> words
        </div>

        <div className="status">
          <span>● Ready</span>
        </div>
      </div>
    </div>
  );
};
