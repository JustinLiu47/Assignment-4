import { useState } from 'react';
function PolynomialFunction() {
    const [coefficients, setCoefficients] = useState(0);
    const coe = coefficients.split(" ").map(parseFloat);
    const [exponents, setExponents] = useState(0);
    const exp = exponents.split(" ").map(parseFloat);
    const xValue = parseFloat(document.getElementById("xValue").value);
    const [polynomialFunctionResults, setPolynomialFunctionResults] = useState("Press Calulate");
    const [polynomialEvaluationResults, setPolynomialEvaluationResults] = useState("Press Calulate");
    function polynomialFunction(e) {
        e.preventDefault();
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
        return (
            <form onSubmit={(e) => polynomialFunction(e)}>
                <p>Polynomial Function</p>
                <label>Coefficients:</label><br />
                <input type="text" value={coefficients} onChange={(event) => { setCoefficients(event.target.value) }} required /><br />
                <label>Exponents:</label><br />
                <input type="text" value={exponents} onChange={(event) => { setExponents(event.target.value) }} required /><br />
                <label>X Value:</label><br />
                <input type="number" value={x} onChange={(event) => { setX(event.target.value) }} required /><br />
                <label>Polynomial Function (Result)</label><br />
                <input type="text" value={polynomialFunctionResults} readOnly /><br />
                <label>Polynomial Evaluation (Result)</label><br />
                <input type="text" value={polynomialEvaluationResults} readOnly /><br />
                <input type="submit" value="Calculate" />
            </form>
        )
    }
}
export default PolynomialFunction;