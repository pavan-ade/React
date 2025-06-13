import React from "react";

const PersonsList = ({personslist}) => {
  console.log(personslist);

  return (
    <div>
      <h2>Working fine</h2>
      {personslist.map(
        ({ id, firstName, lastName, age, gender, email, phone }) => (
          <ul key={Math.random()}>
            <li>
              Full Name : {firstName} {lastName}
            </li>
            <li>Age : {age} </li>
            <li>Gender : {gender} </li>
            <li>Email : {email} </li>
            <li>Phone : {phone} </li>
          </ul>
        )
      )}
    </div>
  );
};

export default PersonsList;
