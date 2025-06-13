import React, { useEffect, useState } from 'react'

const InputBtn = () => {
    const [name, setName] = useState(()=>{
        const savedName = localStorage.getItem("name");
        console.log(savedName)
        return savedName ? JSON.parse(savedName) : "";
    });

    const handleChnage = (e)=>{ setName( e.target.value); }
    useEffect( ()=>{
        localStorage.setItem("name",JSON.stringify(name));
    },[name])

    const clearName = () =>{
        setName("");
    }

  return (
    <div>
        <h3>Your Name : {name}</h3>
        <input type="text" onChange={handleChnage} placeholder='Enter your Name' value={name}/>
        <button onClick={clearName}>Clear</button>
    </div>
  )
}

export default InputBtn