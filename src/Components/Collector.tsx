interface CollectorProps {
  collectorCount: number;
  maxCount: number;
}

export default function Collector({
  collectorCount,
  maxCount,
}: CollectorProps) {
  return (
    <>
      Here is the Collector
      <h1>
        The current count is {collectorCount} of {maxCount}
      </h1>
    </>
  );
}
