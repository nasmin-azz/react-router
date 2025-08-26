import "./App.css";
import useFetch from "./useFetch";

function App() {
  let { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");
  if (loading) {
    return <p>fetch is loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <ul>
        {data.map((item,index) => <li key={index}>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
