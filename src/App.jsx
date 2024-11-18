import './App.css'
import AmbiguousCaseFormula from "./Components/AmbiguousCaseFormula"
import HeronsFormula from "./Components/Heron'sFormula"
import NewtonsMethod from "./Components/Newton'sMethod"
import PolynomialFunction from "./Components/PolynomialFunction"

function App() {
  return (
    <div class="form-container">
      <HeronsFormula />
      <AmbiguousCaseFormula />
      <NewtonsMethod />
      <PolynomialFunction />
    </div>
  );
}

export default App;