import React from "react";
import { useState } from "react";

const ListOfFriend = () => {
  const [friends, setFriends] = useState([
    "Aarav",
    "Meera",
    "Rohit",
    "Sana",
    "Ishaan",
  ]);

  const addFriend = () => {
    setFriends(() => [...friends, "Pavan"]);
  };
  const removeFriend = () => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend == "Sana" ? friends.pop("Sana") : friend
      )
    );
  };

  return (
    <div>
      <h3>Friends</h3>

      {
      friends.map((friend) => (
        <ul key={Math.random()}>
          <li>{friend}</li>
        </ul>
      ))}
      <button onClick={addFriend}>add Friend</button>
      <button onClick={removeFriend}>remove Friend</button>
    </div>
  );
};

export default ListOfFriend;
