// import Calculate from "./Components/Calculate"
import { useState } from "react";
import ListOfFriend from "./Components/ListOfFriend";
import ExampleOne from "./Components/ExampleOne";
import ExampleTwo from "./Components/ExampleTwo";
import InputBtn from "./Components/InputBtn";
import ToDoList from "./Tasks/ToDoList";
import Profile from "./Tasks/Profile";
import Shopping from "./Tasks/Shopping";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      {/* <Calculate/> */}
      {/* <ListOfFriend/> */}
      {/* <ExampleOne count={count} countHndler={() => setCount(count + 1)} />
      <ExampleTwo count={count} countHndler={() => setCount(count + 1)} /> */}
      {/* <InputBtn/> */}
      {/* <ToDoList /> */}
      {/* <Profile /> */}
      <Shopping />
    </div>
  );
}

export default App;
