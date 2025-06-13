import React, { useState } from "react";

const Profile = () => {
  const [name, setname] = useState("");
  const [age, setAge] = useState();

  const handleName = (e) => {
    console.log(e.target.value);
    setname(e.target.value);
  };
  const handleAge = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };

  return (
    <div>
      <div>
        <h3>User profile</h3>
        <form>
          <label>
            Name
            <input type="text" onChange={handleName} value={name} />
          </label>
          <br />
          <label>
            Age
            <input type="number" onChange={handleAge} value={age} />
          </label>
        </form>
      </div>
      <div>
        <h3>Profile Information</h3>
        <h4>Name : {name}</h4>
        <h4>Age : {age}</h4>
      </div>
    </div>
  );
};

export default Profile;
