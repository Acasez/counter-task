// App.tsx
import { useState } from "react";
import "./App.css";
import CollectorBar from "./Components/CollectorBar";
import Counter from "./Components/Counter";
import TrueCollector from "./Components/TrueCollector";

const MAXCOUNT = 3;
const TOTAL_MAX = 10;

interface CounterState {
  [id: number]: {
    value: number;
  };
}

export default function App() {
  const [counters, setCounters] = useState<CounterState>({
    1: { value: 0 },
    2: { value: 0 },
    3: { value: 0 },
    4: { value: 0 },
  });
  const [totalCount, setTotalCount] = useState<number>(0);

  const barCount = Object.values(counters).reduce((sum, c) => sum + c.value, 0);

  const handleUpdate = (counterId: number, newValue: number) => {
    const cappedValue = Math.min(newValue, MAXCOUNT);

    if (barCount >= TOTAL_MAX - 1 && newValue > counters[counterId]?.value) {
      resetCounting();
      setTotalCount((totalCount) => totalCount + 1);
      return;
    }
    if (cappedValue > (counters[counterId]?.value || 0)) {
      setCounters((prev) => ({
        ...prev,
        [counterId]: { value: cappedValue },
      }));
    }
  };

  function resetCounting() {
    setCounters((prev) => {
      const reset: CounterState = {} as CounterState;
      Object.entries(prev).forEach(([key]) => {
        reset[Number(key)] = { value: 0 };
      });
      return reset;
    });
  }

  function addCounter() {
    setCounters((prev) => {
      const nextId = Math.max(...Object.keys(prev).map(Number), 4) + 1;
      return {
        ...prev,
        [nextId]: { value: 0 },
      };
    });
  }

  function removeCounter(counterId: number) {
    setCounters((prev) => {
      const next = { ...prev };
      delete next[counterId];
      return next;
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
      <TrueCollector totalCount={totalCount} />
      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginBottom: "1rem",
        }}
      >
        <button
          onClick={addCounter}
          style={{
            border: "2px solid #32f49a",
            borderRadius: "12px",
            padding: "0.8rem",
          }}
        >
          <h2>Add Counter</h2>
        </button>
        <button
          onClick={resetCounting}
          style={{
            border: "2px solid #ddd",
            borderRadius: "12px",
            padding: "0.8rem",
          }}
        >
          <h2>Reset Buttons</h2>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Object.keys(counters).map((id) => {
          const numId = Number(id);
          return (
            <Counter
              key={numId}
              counterId={numId}
              currentNumber={counters[numId]?.value ?? 0}
              onUpdateValue={(val) => handleUpdate(numId, val)}
              onRemove={removeCounter}
            />
          );
        })}
      </div>
    </div>
  );
}
