// App.tsx
import { useState } from "react";
import "./App.css";
import CollectorBar from "./Components/CollectorBar";
import Counter from "./Components/Counter";

const MAXCOUNT = 3;
const TOTAL_MAX = 10;

export default function App() {
  const [counters, setCounters] = useState<{ [id: number]: number }>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  // Get current count for the bar
  const barCount = Object.values(counters).reduce((sum, val) => sum + val, 0);

  const handleUpdate = (counterId: number, newValue: number) => {
    // Cap individual counter at MAXCOUNT
    const cappedValue = Math.min(newValue, MAXCOUNT);

    // Only update if the counter hasn't reached its max yet
    if (cappedValue > counters[counterId]) {
      setCounters((prev) => ({
        ...prev,
        [counterId]: cappedValue,
      }));
    }
  };

  function resetCounting() {
    setCounters({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    });
  }

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "30rem",
        padding: "1rem",
      }}
    >
      <h1>Counting App</h1>
      <CollectorBar
        collectorCount={Math.min(barCount, TOTAL_MAX)}
        maxCount={TOTAL_MAX}
      />

      <button
        onClick={resetCounting}
        style={{
          border: "2px solid #ddd",
          borderRadius: "12px",
          marginBottom: "1rem",
        }}
      >
        <h1>Reset Button</h1>
      </button>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[1, 2, 3, 4].map((id) => (
          <Counter
            key={id}
            counterId={id}
            currentNumber={counters[id]}
            onUpdateValue={(val) => handleUpdate(id, val)}
          />
        ))}
      </div>
    </div>
  );
}
