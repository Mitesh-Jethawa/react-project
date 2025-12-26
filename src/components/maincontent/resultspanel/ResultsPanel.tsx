import { ScoreCard } from "./ScoreCard.tsx";
import { BiasTypes } from "./BaisTypes.tsx";
import { SuggestionsPanel } from "./SuggestionsPanel.tsx";

export const ResultsPanel = () => {
  return (
    <section className="results-panel">
      <ScoreCard />
      <BiasTypes />
      <SuggestionsPanel />
    </section>
  );
};
