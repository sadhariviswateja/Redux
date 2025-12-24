import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
  <>
  <h2>Counter:{count}</h2>
  <button onClick={() => setCount(count + 2)}>+</button>

<button onClick={() => setCount(count - 1)}>-</button>

<button onClick={() => setCount(0)}>reset</button>
<p>console.log("Counter Rendered:{count}");</p>
</>
);
}

export default Counter;
