import React, { useState, useEffect } from "react";

function App() {
  const [ws, setWs] = useState(null);
  const [count, setCount] = useState(() => {
    // Get the count from local storage or default to 0
    const savedCount = window.localStorage.getItem('count');
    return savedCount !== null ? parseInt(savedCount) : 0;
  });

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8000/ws");

    ws.onopen = () => {
      setWs(ws);
    };

    ws.onmessage = (ev) => {
      const newCount = parseInt(ev.data);
      setCount(newCount);
      // Save the count to local storage
      window.localStorage.setItem('count', newCount);
    };

    return () => {
      ws.close();
    };
  }, []);

  const incrementCount = () => {
    if (ws) {
      ws.send("increment");
    }
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementCount}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;