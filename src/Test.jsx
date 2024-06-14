import { Link, useParams } from "react-router-dom";
import Spinach from "./Spinach.jsx";
import Popeye from "./Popeye.jsx";
import Default from "./Default.jsx";

function Test() {
  const { name } = useParams();

  return (
    <>
      <h1>New page here!</h1>
      <h2>the profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <>
          <Default />
          <Link to="popeye">Check popeye</Link>
          <br />
          <Link to="spinach">Check spinachs</Link>
        </>
      )}
    </>
  );
}

export default Test;
