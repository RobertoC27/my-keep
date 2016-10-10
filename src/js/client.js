import { createStore, combineReducers } from 'redux';
import React from 'react';
const { Component } = React;
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import v4 from 'uuid-v4';
import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibility';
import '../styles/index.scss';

import {listsTodos} from './reducers/todos';
import { notes } from './reducers/notes';

import { Title, FilterLink } from './presentational/general';
import { Todo } from './presentational/todolist';
import { Footer, GeneralFooter} from './presentational/footers';
import { Note } from './presentational/notes';
import { AddTodo, AddReminder, SearchReminder } from './presentational/input';
import { addTodoList, addNote, setNoteTitle, toggleTodo, setTodoListTitle, addTodo, setTodoListVisibilityFilter, setVisibilityFilter, searchReminder } from './actions/actions';

import deepFreeze from 'deep-freeze';
import expect from 'expect';

const loadState = () => {
  try{
    let result = JSON.parse(localStorage.getItem('state'));
    return result ? result : undefined;
  }
  catch(err){
    return undefined;
  }
}

const saveState = (state) => {
  try{
    localStorage.setItem('state', JSON.stringify(state));
  }
  catch(err){
    // Log
  }
}

const reminderApp = combineReducers(
  {
    listsTodos,
    notes,
    visibilityFilter

  }
);

const store = createStore(reminderApp, loadState());

const getVisibleTodos = (todos, visibilityFilter) => {
  if(visibilityFilter === 'SHOW_ALL'){
    return todos;
  }

  if(visibilityFilter === 'SHOW_COMPLETED'){
    return todos.filter(t => t.completed);
  }

  if(visibilityFilter === 'SHOW_ACTIVE'){
    return todos.filter(t => !t.completed);
  }
}

const getVisbleReminders = (reminders, visibilityFilter, search) => {
  let r = [];
  
  for (var i = 0; i < reminders.length; i++) {
    if (reminders[i].title.includes(search) && (reminders[i].archived === false) ) {
      r.push(reminders[i])
    }
  }

  if (r.length > 0) {
    
    if (visibilityFilter === 'SHOW_ALL') {
      return r;
    }
    if (visibilityFilter === 'SHOW_NOTE' && (r[0].todos === undefined )) {
      
      return r;
    }
    if (visibilityFilter === 'SHOW_LIST' && (r[0].todos !== undefined )) {
      
      return r;
    }
    return [];
  }
  
  return r;
}

const TodoList = ({ todos, onTodoClicked, color, title, onUpdate, id, currentVisibilityFilter }) => (
  <div>
    <Title
      text= {title}
      onUpdate = {onUpdate}
      color = {color}
    />
    <AddTodo
      color = {color}
      listID = {id}
      onAddTodo ={
        (i, t, li, m ) => {
          store.dispatch( addTodo(i, t, li, m ) );
        }
      }
    />
    <ul>
      {
        todos.map(todo => (
          <Todo
            key={ todo.id }
            text = {todo.text}
            completed = {todo.completed}
            onTodoClicked={ () => onTodoClicked(todo) }
          />
        ))
      }
    </ul>

    <Footer
      currentVisibilityFilter = {currentVisibilityFilter}
      listID = {id}
      onFilterClicked = {
        (v,i)=>{store.dispatch(setTodoListVisibilityFilter(i, v, Date()) )}
      }
    />
  </div>
);

const Reminders = ({listsTodos, notes}) => 
  {
    return(
      <div>
        <div class = 'notas'>
          {
            notes.map( note => {
              return(
                <Note
                  key = {note.id}
                  id = {note.id}
                  note = {note}
                  onUpdate = {
                    (title) => {
                      store.dispatch(setNoteTitle(note.id, title, Date()) );
                    }
                  }
                />
              );
            })
          }
        </div>
        <div class = 'listas'>
          {
            listsTodos.map(listTodo => {
              return (
                <TodoList
                  key = {listTodo.id}
                  color = {listTodo.color}
                  todos = {getVisibleTodos(listTodo.todos, listTodo.visibilityFilter) }
                  title = {listTodo.title}
                  id = {listTodo.id}
                  currentVisibilityFilter = {listTodo.visibilityFilter}
                  onTodoClicked = {
                    (todo) =>{
                      store.dispatch(toggleTodo(todo.id, listTodo.id, Date() ));
                    }
                  }
                  onUpdate = {
                    (title) => {
                      store.dispatch( setTodoListTitle(listTodo.id, title, Date()) );
                    }
                  }
                />
              );
            })
          }
        </div>
      </div>
    );
  }

const RemindersApp = ({listsTodos, notes, visibilityFilter}) => (
  <div>
    <SearchReminder
      search = {visibilityFilter.search}
      onSearch = {
        (inp) => {
          store.dispatch( searchReminder(inp) );
        }
      }
    />
    <AddReminder
      onAddNote = {
        (creation,modification,id,color,title,content,archived) => {
          store.dispatch( addNote(creation,modification,id,color,title,content,archived) );
        }
      }
      onAddList = {  
        (creation,modification,id,color,title,archived) => {
          store.dispatch( addTodoList(creation,modification,id,color,title,archived) );
        }
      }
    />
    <Reminders 
      listsTodos = {getVisbleReminders(listsTodos, visibilityFilter.visibilityFilter, visibilityFilter.search)}
      notes = {getVisbleReminders(notes, visibilityFilter.visibilityFilter, visibilityFilter.search)}
      />
    <GeneralFooter
      currentVisibilityFilter = {visibilityFilter.visibilityFilter}
      onFilterClicked = {
        (f) => {
          store.dispatch(setVisibilityFilter(f) );
        }
      }
    />
  </div>
);

const render = () => {
  ReactDOM.render(
     <RemindersApp
      { ...store.getState() } />,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);
const deb = () => {
  console.log(store.getState());
}
deb();
store.subscribe(deb);
store.subscribe(() => {
  saveState(store.getState());
});
