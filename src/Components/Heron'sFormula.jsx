import { useState } from 'react';
function HeronsFormula() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [areaResults, setArea] = useState("");
    function heronsFormula(e) {
      e.preventDefault();
      const answer = 0.25 * Math.sqrt(4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2);
      setArea(isNaN(answer) || answer === 0 ? "No Area Possible" : answer);
    }
return (
    <form onSubmit={(e) => heronsFormula(e)}>
      <p>Heron's Formula</p>
      <label>Side A:</label><br />
      <input type="number" value={a} onChange={(event) => { setA(event.target.value) }} required step="any" min="0" /><br />
      <label>Side B:</label><br />
      <input type="number" value={b} onChange={(event) => { setB(event.target.value) }} required step="any" min="0" /><br />
      <label>Side A:</label><br />
      <input type="number" value={c} onChange={(event) => { setC(event.target.value) }} required step="any" min="0"/><br />
      <label>Area (Result)</label><br />
      <input type="text" value={areaResults} readOnly /><br />
      <input type="submit" value="Calculate" />
    </form>
  )
}
export default HeronsFormula;