import { useState } from 'react';
function NewtonsMethod() {
  const [xValue, setX] = useState("");
  const [rootResults, setRootResults] = useState("");
  function newtonsMethod(e) {
    e.preventDefault();
    let x = xValue;
    let approximation;
    do {
      approximation = x - (6 * x ** 4 - 13 * x ** 3 - 18 * x ** 2 + 7 * x + 6) / (24 * x ** 3 - 39 * x ** 2 - 36 * x + 7);
      if (Math.abs(x - approximation) <= 0.0000001) break;
      x = approximation;
    } while (true);
    setRootResults(approximation);
  }
  return (
    <form onSubmit={(e) => newtonsMethod(e)}>
      <p>Newton's Method</p>
      <label>Root Guess:</label><br />
      <input type="number" value={xValue} onChange={(event) => { setX(event.target.value) }} required /><br />
      <label>Root Approximation (Result)</label><br />
      <input type="text" value={rootResults} readOnly /><br />
      <input type="submit" value="Calculate" />
    </form>
  )
}
export default NewtonsMethod;