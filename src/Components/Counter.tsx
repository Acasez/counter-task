interface CounterProps {
  currentNumber: number;
  counterId: number;
  onUpdateValue: (newValue: number) => void;
}

export default function Counter({
  currentNumber,
  counterId,
  onUpdateValue,
}: CounterProps) {
  return (
    <div
      onClick={() => onUpdateValue(currentNumber + 1)}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      style={{
        border: "2px solid #ddd",
        borderRadius: "12px",
        padding: "1.5rem",
        backgroundColor: "#fafafa",
        cursor: "pointer",
        transition: "transform 0.2s",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "black", margin: "0 0 0.5rem" }}>
        Counter {counterId}
      </h2>
      <div style={{ marginTop: "1rem" }}>Current Number</div>
    </div>
  );
}
