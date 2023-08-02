import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
}
