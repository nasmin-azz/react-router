import "./App.css";
import useCounter from "./useCounter";

function App() {
  let {count,increase,decrease} = useCounter();

  return (
    <div>
     <h1>{count}</h1>
     <button onClick={increase}>increase</button>
     <button onClick={decrease}>decrease</button>

    </div>
  )
}

export default App;
