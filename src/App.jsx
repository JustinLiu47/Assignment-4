import './App.css'
import AmbiguousCaseFormula from "./Components/AmbiguousCaseFormula"
import HeronsFormula from "./Components/Heron'sFormula"
import NewtonsMethod from "./Components/Newton'sMethod"
import PolynomialFunction from "./Components/PolynomialFunction"

function App() {
  return (
    <div id="form-container">
        <AmbiguousCaseFormula />
        <NewtonsMethod />
        <HeronsFormula />
        <PolynomialFunction />
    </div>
  );
}

export default App