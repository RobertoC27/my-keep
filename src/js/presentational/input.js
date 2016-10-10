import React from 'react';
import v4 from 'uuid-v4';

const AddTodo = ({color, listID, onAddTodo}) => {
  let remind;

  return (
    <div>
      <input 
        type="text"
        placeholder = 'Recordar'
        ref={ node => remind = node }
        style = {
          {backgroundColor: color},
          {border : 'none'}
        }
      />
      <button
        onClick={
          () => { 
            if (remind.value !== '') {
              onAddTodo(v4(), remind.value, listID, Date() )
              remind.value = "";
            }
            
          }
        }
      >Add todo</button>
    </div>
  );
}

const AddReminder = ({onAddNote, onAddList}) => {
  let input;
  let title;
  return (
    <div class = 'add-reminder'>
      <input type="text" placeholder = 'Título' ref={ node => title = node } />
      <input type="text" placeholder = 'Recordar' ref={ node => input = node } />
      <button
        onClick={
          () => { 
            if (title.value !== '') {
              onAddList(Date(), Date(), v4(), '#FFD180', title.value, false);
              title.value = "";
            }
          }
        }
      >Add Todo-list</button>
      <button
        onClick={
          () => { 
            if (title.value !== '' && input.value !== '') {
              onAddNote(Date(), Date(), v4(), '#A3E2C7', title.value, input.value, true);
              input.value = "";
              title.value = '';
            }
          }
        }
      >Add Note</button>
    </div>
  );
}

const SearchReminder = ({search, onSearch}) => {
  let input;
  return (
    <div>
      <input 
        type="text"
        placeholder = 'Búsqueda'
        ref={ node => input = node }
        defaultValue = {search}
        onChange = {
          () => {
            onSearch(input.value);
          }
        }
      />
      <div class ='clear'></div>
    </div>
  );
}

export { AddTodo, AddReminder, SearchReminder };