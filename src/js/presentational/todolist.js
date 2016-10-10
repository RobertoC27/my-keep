import React from 'react';
import {Title, ArchiveMe} from './general';
import { AddTodo } from './input';
import { Footer} from './footers';
const Todo = ({ text, completed, onTodoClicked, onTodoRemove }) => (
  <div>
    <div>
      <li
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
        onClick={ onTodoClicked }
      >
        { text }
      </li>
    </div>
    <div
      onClick = {onTodoRemove}
    >x</div>
  </div>
);

const TodoList = ({ todos, onTodoClicked, color, title, onUpdate, id, currentVisibilityFilter, onArchive, onFilterClicked, onAddTodo, onTodoRemove }) => (
  <div>
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
  </div>
);

export {Todo, TodoList};