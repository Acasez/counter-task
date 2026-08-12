interface TotalCollection {
  totalCount: number;
}

export default function TrueCollector({ totalCount }: TotalCollection) {
  return (
    <div
      style={{
        marginBottom: "2rem",
        padding: "1 rem",
        border: "0.3rem solid",
        borderRadius: "2rem",
        borderColor: "lightblue",
        width: "25rem",
      }}
    >
      <h2 style={{ margin: "0.5rem" }}>📊 True Collector Status</h2>
      <h3 style={{ margin: "1rem" }}>📊 TotalCount {totalCount} </h3>
    </div>
  );
}
