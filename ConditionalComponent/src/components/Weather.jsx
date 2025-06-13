import React from "react";

const Weather = ({ temp }) => {
  if (temp < 15) {
    return <h2>it cold Outside</h2>
  }else if(temp >= 15 && temp <= 25){
    return <h2>it nice outside</h2>
  }else if (temp >= 25) {
    return <h2>it hot outside</h2>
  }else{
    return <h2>it fine not worries</h2>
  }
};

export default Weather;
