// Counter.tsx
interface CounterProps {
  currentNumber: number;
  counterId: number;
  onUpdateValue: (newValue: number) => void;
}

const MAXCOUNT = 3;

export default function Counter({
  currentNumber,
  counterId,
  onUpdateValue,
}: CounterProps) {
  const handleClick = () => {
    if (currentNumber < MAXCOUNT) {
      onUpdateValue(currentNumber + 1);
    }
  };

  const removeCounter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log("Remove this counter");
    //TODO
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      style={{
        border: "2px solid #ddd",
        borderRadius: "12px",
        padding: "1.5rem",
        backgroundColor: "#fafafa",
        cursor: currentNumber >= MAXCOUNT ? "default" : "pointer",
        opacity: currentNumber >= MAXCOUNT ? 0.6 : 1,
        transition: "transform 0.2s, opacity 0.2s",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        width: "150px",
        position: "relative",
      }}
    >
      <h2 style={{ color: "black", margin: "0 0 0.5rem", fontSize: "1rem" }}>
        Counter {counterId}
      </h2>
      <div
        style={{ marginTop: "1rem", fontWeight: "bold", fontSize: "1.5rem" }}
      >
        {currentNumber}
      </div>
      <div style={{ fontSize: "0.75rem", color: "#666" }}>
        {currentNumber >= MAXCOUNT ? "MAX" : `${currentNumber}/${MAXCOUNT}`}
      </div>
      <div
        style={{
          fontSize: "2rem",
          color: "red",
          position: "absolute",
          border: "lightGray solid 3px",
          top: "0",
          right: "0",
        }}
        onClick={removeCounter}
      >
        X
      </div>
    </div>
  );
}
