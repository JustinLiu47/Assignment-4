import './App.css'
import AmbiguousCaseFormula from "./components/AmbiguousCaseFormula"
import HeronsFormula from "./components/Heron'sFormula"
import NewtonsMethod from "./components/Newton'sMethod"
import PolynomialFunction from "./components/PolynomialFunction"

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