export const PanelHeader = () => {
  return (
    <div className="panel-header">
      <h2>
        <i className="fas fa-edit" /> Write Your Text
      </h2>

      <div className="editor-toolbar">
        <button className="btn btn-secondary">
          <i className="fas fa-broom" /> Clear
        </button>

        <button className="btn btn-secondary">
          <i className="fas fa-magic" /> Load Demo
        </button>
      </div>
    </div>
  );
};

