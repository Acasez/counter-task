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
    <div
      style={{
        marginBottom: "1rem",
        border: "0.3rem solid",
        borderRadius: "2rem",
        borderColor: "lightGreen",
      }}
    >
      <div
        style={{
          marginTop: "0.5rem",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <h2>📊 Bar Status</h2>
        <h2>
          <strong>{collectorCount}</strong> of {maxCount}
        </h2>
      </div>

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
