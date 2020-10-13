import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Joke from './Joke'
import jokesData from './jokesData'


function App() {
 const jokeComponents = jokesData.map(joke =><Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)

  
  return (

    <div className="App">
      {jokeComponents}
    </div>
  );
}

export default App;
