import { React, useContext } from "react";
import { userData, userData2 } from "../App";

const ComponentC = () => {
  //   return (
  //     <div>
  //       <h3>Hello</h3>
  //       <userData.Consumer>
  //         {(dummyUsers) => (
  //           <userData2.Consumer>
  //             {(dummyUsers2) => (
  //               <div>
  //                 <h4 style={{ color: "black" }}>dummyUser</h4>
  //                 {dummyUsers.map(({ id, name, email }) => (
  //                   <div key={id}>
  //                     <p>Name : {name}</p>
  //                     <p>EMail : {email}</p>
  //                   </div>
  //                 ))}
  //                 <h4 style={{ color: "black" }}>dummyUser2</h4>
  //                 {dummyUsers2.map(({ id, name, email }) => (
  //                   <div key={id}>
  //                     <p>Name : {name}</p>
  //                     <p>EMail : {email}</p>
  //                   </div>
  //                 ))}
  //               </div>
  //             )}
  //           </userData2.Consumer>
  //         )}
  //       </userData.Consumer>
  //     </div>
  //   );
  const user1 = useContext(userData);
  const user2 = useContext(userData2);
  console.log(userData, userData2);
  return (
    <div>
      <h1>User 1 Data</h1>
      {user1.map(({ id, name, email }) => (
        <div key={`componetC-${id}`}>
          <p>Name : {name}</p>
          <p>Email : {email}</p>
        </div>
      ))}
      <h1>User 2 data</h1>
      {user2.map(({ id, name, email }) => (
        <div key={`user2-${id}`}>
          <p>Name : {name}</p>
          <p>Email : {email}</p>
        </div>
      ))}
    </div>
  );
};

export default ComponentC;
