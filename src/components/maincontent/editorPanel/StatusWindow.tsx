import { useContext, useEffect } from "react";
import { LayoutContext } from "../../../context";

export const StatusWindow = () => {
  const statusConfig = {
    ready: { text: "● Ready", color: "#10b981" },
    analyzing: { text: "● Analyzing...", color: "#f59e0b" },
    success: { text: "● Analysis complete", color: "#10b981" },
    error: { text: "● Error analyzing", color: "#ef4444" },
  } as const;

  const { status, setStatus } = useContext(LayoutContext);
  const current_status = statusConfig[status];

  return (
    <div className="status">
      <span style={{ color: current_status.color }}>{current_status.text}</span>
    </div>
  );
};
