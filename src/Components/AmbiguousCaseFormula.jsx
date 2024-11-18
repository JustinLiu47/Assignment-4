import { useState } from 'react';

function AmbiguousCaseFormula() {
  const [sA, setsA] = useState("");
  const [aA, setaA] = useState("");
  const [sB, setsB] = useState("");
  const [triangleCase, setCase] = useState("");

  function ambiguousCaseFormula(e) {
    e.preventDefault();
    const radAA = aA * (Math.PI / 180);
    const h = sB * Math.sin(radAA);
    if (aA > 90) {
      setCase((sA <= sB) ? "No Triangle" : "One Triangle");
    } else if (aA === 90) {
      setCase("Right Triangle");
    } else if (sA < h) {
      setCase("No Triangle");
    } else if (h < sA && sA < sB) {
      setCase("Two Triangles (Ambiguous Case)");
    } else {
      setCase("One Triangle");
    }
  }

  return (
    <form onSubmit={(e) => ambiguousCaseFormula(e)}>
      <p>Ambiguous Case</p>
      <label>Angle A:</label><br />
      <input type="number" value={aA} onChange={(event) => { setaA(event.target.value) }} required step="any" min="0" max="179" /><br />
      <label>Side A:</label><br />
      <input type="number" value={sA} onChange={(event) => { setsA(event.target.value) }} required step="any" min="0" /><br />
      <label>Side B:</label><br />
      <input type="number" value={sB} onChange={(event) => { setsB(event.target.value) }} required step="any" min="0" /><br />
      <label>Triangle Type (Result)</label><br />
      <input type="text" value={triangleCase} readOnly /><br />
      <input type="submit" value="Calculate" />
    </form>
  )
}
export default AmbiguousCaseFormula;