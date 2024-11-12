import { useState } from 'react';

function AmbiguousCaseFormula() {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [roots, setRoots] = useState("Press Calulate");

  function quadraticFormula(e) {
    e.preventDefault();
    const discriminat = b * b - 4 * a * c;

    if (discriminat > 0) {
      setRoots(`x1 = ${(-b + Math.sqrt(discriminat)) / (2 * a)}, x2 = ${(-b - Math.sqrt(discriminat)) / (2 * a)}`);
    } else if (discriminat == 0) {
      setRoots(`x1 = x2 = ${(-b + Math.sqrt(discriminat)) / (2 * a)}`);
    } else {
      setRoots("No Real Roots!");
    }
  }

  return (
    <form onSubmit={(e) => ambiguousCase(e)}>
      <p>Ambiguous Case</p>
      <label for="angleA">Angle A:</label><br />
      <input type="number" id="angleA" name="angleA" step="any" min="0" max="179" /><br />
      <label for="sideA_Ambiguous">Side A:</label><br />
      <input type="number" id="sideAAmbiguous" name="sideA" step="any" min="0" /><br />
      <label for="sideB_Ambiguous">Side B:</label><br />
      <input type="number" id="sideBAmbiguous" name="sideBAmbiguous" step="any" min="0" /><br />
      <label for="triangleTypeResults">Triangle Type (Result)</label><br />
      <input type="text" id="triangleTypeResults" name="triangleTypeResults" readonly /><br />
      <input type="submit" value="Calculate" />
      <h1>Quadratic Formula</h1>
      <label>a Value:</label>
      <input type="number" value={a} onChange={(event) => { setA(event.target.value) }} required />
      <label>b Value:</label>
      <input type="number" value={b} onChange={(event) => { setB(event.target.value) }} required />
      <label>c Value:</label>
      <input type="number" value={c} onChange={(event) => { setC(event.target.value) }} required />
      <label>Roots (Result):</label>
      <input type="text" value={roots} readOnly />
      <input type="submit" value="Calculate" />
    </form>
  )
}

export default AmbiguousCase;