import { useState } from 'react';
function NewtonsMethod() {
  const [xValue, setX] = useState(0);
  const [rootResults, setRootResults] = useState("Press Calulate");
  function newtonsMethod(e) {
    e.preventDefault();
    let approximation;
    do {
      approximation = xValue - (6 * xValue ** 4 - 13 * xValue ** 3 - 18 * xValue ** 2 + 7 * xValue + 6) / (24 * xValue ** 3 - 39 * xValue ** 2 - 36 * xValue + 7);
      if (Math.abs(x - approximation) <= 0.0000001) break;
      xValue = approximation;
    } while (true);
    setRootResults(approximation);
  }
  return (
    <form onSubmit={(e) => newtonsMethod(e)}>
      <p>Newton's Method</p>
      <label>Root Guess:</label><br />
      <input type="number" value={x} onChange={(event) => { setX(event.target.value) }} required /><br />
      <label>Root Approximation (Result)</label><br />
      <input type="text" value={rootResults} readOnly /><br />
      <input type="submit" value="Calculate" />
    </form>
  )
}
export default NewtonsMethod;