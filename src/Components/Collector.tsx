// Collector.tsx
interface CollectorProps {
  collectorCount: number;
  maxCount: number;
}

export default function Collector({
  collectorCount,
  maxCount,
}: CollectorProps) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h3>📊 Collector Status</h3>
      <h1>
        Total Count: <strong>{collectorCount}</strong> of {maxCount}
      </h1>
    </div>
  );
}
