import { forwardRef } from "react";
import { StatsBarItem } from "./statsbaritem";

type HeaderProps = {
  score: number;
  words: number;
  biases: number;
};

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ score, words, biases }, ref) => {
    const stats = [
      { id: "score", label: "Score", value: score },
      { id: "words", label: "Words", value: words },
      { id: "biases", label: "Biases", value: biases },
    ];

    return (
      <header ref={ref} className="header">
        <div className="logo">
          <div className="logo-icon">
            <i className="fas fa-balance-scale" />
          </div>
          <div className="logo-text">
            <h1>Neutral Net</h1>
            <p>Real-time language bias detection</p>
          </div>
        </div>

        <div className="stats-bar">
          {stats.map((stat) => (
            <StatsBarItem key={stat.id} num={stat.value} text={stat.label} />
          ))}
        </div>
      </header>
    );
  }
);

Header.displayName = "Header";
