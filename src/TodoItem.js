import React from 'react';
//import logo from './logo.svg';
import './App.css';

function TodoItem(props) {
   
  return (

    <div className="todoItem">
        <input type = "checkbox" checked={props.item.completed}/>
        <p>{props.item.text}</p>

    </div>
  );
}

export default TodoItem;
