import { useContext } from "react";
import { LayoutContext } from "../../../context";

export const ScoreCard = () => {
  const {result} = useContext(LayoutContext)
  const score = result.score || 100
  const getScoreColor = (score : number | undefined) => {
    if (score == null) return
    if (score < 40) return "#ff0000"
    if (score < 70) return "#f59e0b"
    return "#22c55e"
  }
    const safeScore = Math.max(0, Math.min(100, score || 100));
    const circumference = 2 * Math.PI * 16; 
    const offset = circumference - (safeScore / 100) * circumference;


  return (
    <div className="score-card">
      <div className="score-circle">
        <svg viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="16" className="score-bg" />
          <circle 
          cx="18" cy="18" r="16" 
          className="score-progress" 
           style={
           {
              "strokeDashoffset": offset,
              "stroke": getScoreColor(result.score)
            } as React.CSSProperties
          }
          
          />
        </svg>

        <div className="score-value">{score}</div>
      </div>

      <div className="score-label">Inclusivity Score</div>
    </div>
  );
};
