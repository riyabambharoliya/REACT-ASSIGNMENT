
// • Create react app to avoid re-renders in react application by useRef ?

import React, { useState, useRef, useEffect } from 'react';

function Task4() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1); 
  const inputRef = useRef(null); 
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const focusInput = () => {
    inputRef.current.focus(); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>useRef Example</h1>
      <p>Count: {count}</p>
      <p>This component has rendered <strong>{renderCount.current}</strong> times.</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div style={{ marginTop: '20px' }}>
        <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
        <br />
        <button onClick={focusInput} style={{ marginTop: '10px' }}>
          Focus Input
        </button>
      </div>
    </div>
  );
}

export default Task4;
