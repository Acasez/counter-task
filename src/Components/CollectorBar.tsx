// Collector.tsx
interface CollectorProps {
  collectorCount: number;
  maxCount: number;
}

export default function CollectorBar({
  collectorCount,
  maxCount,
}: CollectorProps) {
  const fillPercentage = collectorCount * 10;
  const fillAmount = fillPercentage + "%";
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h3>📊 Collector Status</h3>
      <h1>
        Total Count: <strong>{collectorCount}</strong> of {maxCount}
      </h1>
      <div
        className="bar"
        style={{
          width: "50rem",
          borderRadius: "3rem",
          backgroundColor: "#ddd",
          height: "3rem",
        }}
      >
        <div
          className="barFill"
          style={{
            backgroundColor: "green",
            width: fillAmount,
            height: "100%",
            borderRadius: "3rem",
            transition: "width 0.3s",
          }}
        ></div>
      </div>
    </div>
  );
}
