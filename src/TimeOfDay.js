import React from 'react';
//import logo from './logo.svg';
import './App.css';

// function Time() {
//   const date = new Date()
//   let timeOfDay; 
//   const hours = date.getHours()
//   const styles = {
//     backgroundColor:"gainsboro",
//     padding:"50px"
//   }

//   if(hours < 12){
//     timeOfDay = "morning"
//     styles.color = "blue"
//   }else if(hours >12 && hours < 17){
//     timeOfDay = "afternoon"
//     styles.color = "green"
//   }else{
//     timeOfDay = "evening"
//     styles.color = "orange"
//   }

  
//   return (

//     <div className="App">
//       <h1 style={styles }>Good {timeOfDay}!</h1>
//     </div>
//   );
// }

class ClassTimeOfDay extends React.Component{
    render(){
    return (
        <div>
            <Header  username="Faith Oni"/>
            <Greeting />
        </div>
    )
}
} 

class Header extends React.Component {
    render(props){
    return (
        <header>
            <p>Welcome,{this.props.username}</p>
        </header>
    )
}
}
class Greeting extends React.Component{
    render(){
        const date = new Date()
        let timeOfDay; 
        const hours = date.getHours()
        const styles = {
          backgroundColor:"gainsboro",
          padding:"50px"
        }
      
        if(hours < 12){
          timeOfDay = "morning"
          styles.color = "blue"
        }else if(hours >12 && hours < 17){
          timeOfDay = "afternoon"
          styles.color = "green"
        }else{
          timeOfDay = "evening"
          styles.color = "orange"
        }
    return (

        <div className="App">
          <h1 style={styles }>Good {timeOfDay}!</h1>
        </div>
      );
  
}
}

export default ClassTimeOfDay;

// export default Time;
