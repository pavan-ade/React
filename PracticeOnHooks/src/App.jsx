// import Calculate from "./Components/Calculate"
import { createContext, useState } from "react";
import ListOfFriend from "./Components/ListOfFriend";
import ExampleOne from "./Components/ExampleOne";
import ExampleTwo from "./Components/ExampleTwo";
import InputBtn from "./Components/InputBtn";
import ToDoList from "./Tasks/ToDoList";
import Profile from "./Tasks/Profile";
import Shopping from "./Tasks/Shopping";
// import FetchAPI from "./Components/FetchAPI";
import ComponentC from "./ContextAPI/ComponentC";
import ComponentA from "./ContextAPI/ComponentA";

export const userData = createContext();
export const userData2 = createContext();

function App() {
  // const [count, setCount] = useState(0);
  const dummyUsers = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];
  const dummyUsers2 = [
    { id: 1, name: "Pavna", email: "pavan@example.com" },
    { id: 2, name: "Ramesh", email: "ramesh@example.com" },
    { id: 3, name: "Rakesh", email: "rakesh@example.com" },
  ];
  return (
    <div>
      {/* <Calculate/> */}
      {/* <ListOfFriend/> */}
      {/* <ExampleOne count={count} countHndler={() => setCount(count + 1)} />
      <ExampleTwo count={count} countHndler={() => setCount(count + 1)} /> */}
      {/* <InputBtn/> */}
      {/* <ToDoList /> */}
      {/* <Profile /> */}
      {/* <Shopping /> */}
      {/* <FetchAPI /> */}
      <userData.Provider value={dummyUsers}>
        <userData2.Provider value={dummyUsers2}>
          <ComponentA />
        </userData2.Provider>
      </userData.Provider>
    </div>
  );
}

export default App;
