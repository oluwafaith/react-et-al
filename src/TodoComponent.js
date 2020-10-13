import React from 'react'
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem'
import todoData from './todoData'
import './index.css';

function Todoo(){
    const todoItems = todoData.map(item =><TodoItem key={item.id} item={item}/>)

    return(
    <div className="todo-list">
        {todoItems}
        </div>
    )
}
export default Todoo