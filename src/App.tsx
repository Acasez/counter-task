import { useState } from "react";
import "./App.css";
import Collector from "./Components/Collector";
import Counter from "./Components/Counter";

export default function App() {
  const [mainCount, setMainCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "30rem",
      }}
    >
      Counting App
      <Collector collectorCount={mainCount} maxCount={10} />
      <Counter
        counterId={1}
        currentNumber={mainCount}
        onUpdateValue={(val) => setMainCount(val)}
      />
      <Counter
        counterId={2}
        currentNumber={mainCount}
        onUpdateValue={(val) => setMainCount(val)}
      />
      <Counter
        counterId={3}
        currentNumber={mainCount}
        onUpdateValue={(val) => setMainCount(val)}
      />
      <Counter
        counterId={4}
        currentNumber={mainCount}
        onUpdateValue={(val) => setMainCount(val)}
      />
    </div>
  );
}
