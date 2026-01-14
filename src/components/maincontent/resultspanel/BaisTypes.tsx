const BIASES = [
  { id: "pronoun", label: "Pronoun Bias", color: "#ef4444", count: 0 },
  { id: "agentic", label: "Agentic/Communal", color: "#f59e0b", count: 0 },
  { id: "gendered", label: "Gendered Terms", color: "#10b981", count: 0 },
  { id: "semantic", label: "Semantic Bias", color: "#3b82f6", count: 0 },
  { id: "stereotype", label: "Stereotypes", color: "#8b5cf6", count: 0 },
];

export const BiasTypes = () => {
  return (
    <div className="bias-types">
      <h3>
        <i className="fas fa-tags" aria-hidden="true" /> Detected Biases
      </h3>

      <div className="bias-legend">
        {BIASES.map((bias) => (
          <div key={bias.id} className="legend-item">
            <div
              className="color-dot"
              style={{ background: bias.color }}
            />
            <span className="legend-text">{bias.label}</span>
            <span className="legend-count">{bias.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


