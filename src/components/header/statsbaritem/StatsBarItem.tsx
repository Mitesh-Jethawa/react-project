type StatsBarItemProps = {
  num: number;
  text: string;
};

export const StatsBarItem = ({ num, text }: StatsBarItemProps) => {
  return (
    <div className="stat-item">
      <span className="stat-value">{num}</span>
      <span className="stat-label">{text}</span>
    </div>
  );
};
