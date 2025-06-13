import React from 'react'

const Greeting = () => {
    const time = new Date().getHours();
    console.log(time);
    
  if(time >= 4 && time < 12){
    return <h3>Good Mornig</h3>
  }else if(time >= 12 && time < 16){
    return <h3>Good Afternoon</h3>
  }else if(time >= 16 && time < 19){
    return <h3>Good Evening</h3>
  }else if(time >= 17 && time < 4){
    return <h3>Good Night</h3>
  }
}

export default Greeting