export const SuggestionsPanel = () => {
  return (
    <div className="suggestions-panel">
      <h3>
        <i className="fas fa-lightbulb" aria-hidden="true" /> Suggestions
      </h3>

      <div>
        <div className="empty-state">
          <i className="fas fa-comment-alt" aria-hidden="true" />
          <p>
            Click on any highlighted text to see suggestions for improvement.
          </p>
        </div>
      </div>
    </div>
  );
};
