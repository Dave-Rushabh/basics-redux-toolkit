import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/reducers/counterReducer";

function App() {
  const counter = useSelector((state) => state.counter.counterValue);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(increment())}>Up</button>
        {counter}
        <button onClick={() => dispatch(decrement())}>Down</button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
