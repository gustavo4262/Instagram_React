import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Corpo></Corpo>
      <FundoMobile></FundoMobile>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
