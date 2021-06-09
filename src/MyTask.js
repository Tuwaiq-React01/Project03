import React from 'react';

function MyTask(props){
  const ToDoList = props.ToDoList;
  const completeTask = props.completeTask;

  return (
    <ul class="list-group">
  <li class="list-group-item list-group-item-info" >
    {ToDoList.text}
    <button  type="button" class="btn-close btn-close-denger" aria-label="Close" onClick={completeTask}  >   
    </button>
    <br/>
  </li>
  </ul>);
}

export default MyTask;