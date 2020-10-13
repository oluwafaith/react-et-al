import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClassTimeOfDay from'./TimeOfDay'
import TodoItem from './TodoItem'
import Todoo from './TodoComponent'
import ContactCard from './ContactCard'
import Vschool from './Vschool'
import Practice from './ClassPractice'
//import Joke from './Joke'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ClassTimeOfDay />
  <Practice />
    <Vschool />
    <App />
 
    {/* <Joke question="what is the name of nigeria's president" punchline="i dont know but i think Buhari"/>
    <Joke  punchline="i dont know but i think Buhari"/>
    <Joke question="what is the name of nigeria's president" punchline="i dont know but i think Buhari"/>
    <Joke question="what is the name of nigeria's president" punchline="i dont know but i think Buhari" /> */}

    <ContactCard
    contact={{name:"Mrs Faith", imageUrl:"https://res.cloudinary.com/dhtxiw89g/image/upload/v1566647586/IMG_20180606_083511.jpg", phone:"08012345678",     email:"faith@gmail.com"}}
    />
    <ContactCard
    contact={{name:"Mr tech", imageUrl:"https://res.cloudinary.com/dhtxiw89g/image/upload/v1594657428/asset-13.png", phone:"08012345678",     email:"faith@gmail.com"}}
    />
    <ContactCard
    contact={{name:"Mr tech", imageUrl:"https://res.cloudinary.com/dhtxiw89g/image/upload/v1594659289/hasan1_2x.png", phone:"08012345678",     email:"faith@gmail.com"}}
    />
    <ContactCard
    contact={{name:"Mr tech",  imageUrl:"https://res.cloudinary.com/dhtxiw89g/image/upload/v1594657152/2676.png", phone:"08012345678",     email:"faith@gmail.com"}}
    />
    
    <Todoo />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
