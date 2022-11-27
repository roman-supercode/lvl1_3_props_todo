import './App.css';
import Todo from "./components/todo/Todo";

const todoItems = [
  { name: "Bug Grocery" },
  { name: "Send Email" },
  { name: "Finish Assigment" },
  { name: "Write Blog" },
  { name: "Bake Cake" }
];

function App() {
  return (
    <>
      <h1>My Todos</h1>
      <ul>
        {todoItems.map((item, index) => {
          return <Todo key={index} arrayItem={item.name} />;
        })}
      </ul>
    </>
  );
}

export default App;
