import { useState } from 'react';
function PolynomialFunction() {
  const [coefficients, setCoefficients] = useState("");
  const [exponents, setExponents] = useState("");
  const [xValue, setXValue] = useState("");
  const [polynomialFunctionResults, setPolynomialFunctionResults] = useState("");
  const [polynomialEvaluationResults, setPolynomialEvaluationResults] = useState("");
  function polynomialFunction(e) {
    e.preventDefault();
    const coe = coefficients.split(" ").map(parseFloat);
    const exp = exponents.split(" ").map(parseFloat);
    let func = "";
    let value = 0;
    for (let i = 0; i < coe.length; i++) {
      const n = coe[i];
      const e = exp[i];
      if (i === 0) {
        func += (n < 0) ? "-" : "";
      } else {
        func += (n < 0) ? " - " : " + ";
      }
      func += Math.abs(n) + "x^" + e;
      value += n * xValue ** e;
    }
    setPolynomialFunctionResults("f(x) = " + func);
    setPolynomialEvaluationResults("f(" + xValue + ") = " + value);
  }
  return (
    <form onSubmit={polynomialFunction}>
      <p>Polynomial Function</p>
      <label>Coefficients:</label><br />
      <input type="text" value={coefficients} onChange={(event) => setCoefficients(event.target.value)} required /><br />
      <label>Exponents:</label><br />
      <input type="text" value={exponents} onChange={(event) => setExponents(event.target.value)} required /><br />
      <label>X Value:</label><br />
      <input type="number" value={xValue} onChange={(event) => setXValue(Number(event.target.value))} required /><br />
      <label>Polynomial Function (Result)</label><br />
      <input type="text" value={polynomialFunctionResults} readOnly /><br />
      <label>Polynomial Evaluation (Result)</label><br />
      <input type="text" value={polynomialEvaluationResults} readOnly /><br />
      <input type="submit" value="Calculate" />
    </form>
  );
}
export default PolynomialFunction;