import React from 'react';
//import logo from './logo.svg';
import './App.css';

function handleClick(){
  console.log("you clicked me")
}

function App() {
  const styles = {
    width: "250px",
    height: "250px",
    float: "left"
  }
  const button ={
    width:"150px",
    height:"40px",
    marginTop:"300px",
    float:"left"
  }
  return (
    <div className="App">
      <img onMouseOver={()=>console.log('hovered')} src="https://res.cloudinary.com/dhtxiw89g/image/upload/v1566647586/IMG_20180606_083511.jpg" style= {styles}/>
    <br/>
    <br/>
    <button onClick={handleClick} style={button}>click me </button>
    </div>
  );
}

export default App;
