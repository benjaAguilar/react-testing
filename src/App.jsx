import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Our First Test</h1>
      <p>yeah and also trying react routes</p>
      <h2>Check the links to other pages!</h2>
      <nav>
        <ul>
          <li>
            <Link to="test">test</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
