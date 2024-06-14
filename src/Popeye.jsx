import { Link } from "react-router-dom";

function Popeye() {
  return (
    <>
      <p>I am popeye the master of spinach and bicep curl!</p>
      <Link to="/test">Eat spinachs!!!</Link>
    </>
  );
}

export default Popeye;
