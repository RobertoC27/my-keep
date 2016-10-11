import React from 'react';
import {Title, ArchiveMe} from './general';
import { AddTodo } from './input';
import { Footer} from './footers';
const Todo = ({ text, completed, onTodoClicked, onTodoRemove }) => (
  <div >
    <div>
      <li
        class = 'fl'
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
        onClick={ onTodoClicked }
      >
        { text }
      </li>
      <div
        class = 'fl remove'
        onClick = {onTodoRemove}
      ></div>
      <div class='clear'></div>
    </div>
    

  </div>
);

const TodoList = ({ todos, onTodoClicked, color, title, onUpdate, id, currentVisibilityFilter, onArchive, onFilterClicked, onAddTodo, onTodoRemove, mod, creation }) => {
  let m = 'modification: ' + mod;
  let c = 'creation: '+ creation;
  let b =  mod > creation ;
  return(
    <div
      class = 'element'
    >
      <Title
        text= {title}
        onUpdate = {onUpdate}
        color = {color}
      />
      <AddTodo
        color = {color}
        listID = {id}
        onAddTodo ={onAddTodo}
      />
      <ul>
        {
          todos.map(todo => (          
            <Todo
              key={ todo.id }
              text = {todo.text}
              completed = {todo.completed}
              onTodoClicked={ () => onTodoClicked(todo) }
              onTodoRemove = { () => onTodoRemove(todo) }
            />
            
          ))
        }
      </ul>
      <ArchiveMe
        onArchive = {onArchive}
      />
      <Footer
        currentVisibilityFilter = {currentVisibilityFilter}
        listID = {id}
        onFilterClicked = { onFilterClicked }
        
      />
      {b ?   <div><div class='mod'>{c}</div><div class='mod'>{m}</div></div> : <div class='mod'>{c}</div> }
    </div>
  );
}
export {Todo, TodoList};