import { React, useContext } from "react";
import ComponentC from "./ComponentC";
import { userData2 } from "../App";

const ComponentB = () => {
  const userData = useContext(userData2);

  {
    /* <userData2.Consumer>
      {(userData) => (
        <div>
          <h4 style={{ color: "black" }}>dummy userData from Compoent B</h4>
          {userData.map(({ id, name, email }) => (
            <div key={id}>
              <p>Name : {name}</p>
              <p>EMail : {email}</p>
            </div>
          ))}
        </div>
      )}
    </userData2.Consumer> */
  }

  {
    /* using the useContext Hook */
  }
  // {
  //   userData.map(({ id, name, email }) => {
  //     console.log(name, id, email);
  //   });
  // }
  return (
    <div>
      <h2>User 2 Data from the Component B</h2>
      {userData.map(({ id, name, email }) => (
        <div key={`user-${id}`}>
          <p>Name : {name}</p>
          <p>Email : {email}</p>
        </div>
      ))}

      <ComponentC />
    </div>
  );
};

export default ComponentB;
