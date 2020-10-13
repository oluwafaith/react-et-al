import React, {Component} from 'react'

class ClassTimeOfDay extends Component{
    render(){
    return (
        <div>
            <Header />
            <Greeting />
        </div>
    )
}
} 

class Header extends Component(props) {
    render(){
    return (
        <header>
            <p>Welcome, {this. props.username}</p>
        </header>
    )
}
}
class Greeting extends Component{
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