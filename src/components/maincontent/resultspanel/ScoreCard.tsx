export const ScoreCard = () => {
  return (
    <div className="score-card">
      <div className="score-circle">
        <svg viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="16" className="score-bg" />
          <circle cx="18" cy="18" r="16" className="score-progress" />
        </svg>

        <div className="score-value">100</div>
      </div>

      <div className="score-label">Inclusivity Score</div>
    </div>
  );
};
