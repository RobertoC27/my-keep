import React from 'react';
import v4 from 'uuid-v4';

const AddTodo = ({color, listID, onAddTodo}) => {
  let remind;

  return (
    <div >
      <input 
        type="text"
        placeholder = 'Recordar'
        ref={ node => remind = node }
        onKeyDown={
            (e) => { 
              if(e.keyCode == 13){
                if (remind.value !== '') {
                  onAddTodo(v4(), remind.value, listID, Date() )
                  remind.value = "";
                }
              }
            }
          }
        
      />
      <button
        class ='agregar'
        onClick={
          () => { 
            if (remind.value !== '') {
              onAddTodo(v4(), remind.value, listID, Date() )
              remind.value = "";
            }
          }
        }
      ></button>
    </div>
  );
}

const AddReminder = ({onAddNote, onAddList}) => {
  let input;
  let title;
  let d;
  return (
    <div class = 'add-reminder'>
      <input type="text" placeholder = 'Título' ref={ node => title = node } 
        onKeyDown={
            (e) => { 
              if(e.keyCode == 13){
                if (title.value !== '') {
                  d= Date();
                  onAddList(d, d, v4(), '#FFD180', title.value, false);
                  title.value = "";
                }
              }
            }
          }
      />
      <input type="text" placeholder = 'Recordar' ref={ node => input = node } 
        onKeyDown={
            (e) => { 
              if(e.keyCode == 13){
                if (title.value !== '' && input.value !== '') {
                  d=Date();
                  onAddNote(d, d, v4(), '#A3E2C7', title.value, input.value, true);
                  input.value = "";
                  title.value = '';
                }
              }
            }
          }
      />
      <div class='tooltip'>
        <button
          class = 'add-list'
          onClick={
            () => { 
              onAddList(Date(), Date(), v4(), '#FFD180', title.value, false);
              title.value = "";
            }
          }
        ></button>
        <span class='tooltiptext'>New list</span>
      </div>
      
    </div>
  );
}

const SearchReminder = ({search, onSearch}) => {
  let input;
  return (
    <div class='buscar'>
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

const ex = () => (
  <div class='tooltip'>
    <div class='container'
      
    >
      <img 
        src = 'https://ssl.gstatic.com/keep/icon_128.png'
        onClick={
          () => { 
            if (title.value !== '' && input.value !== '') {
              onAddNote(Date(), Date(), v4(), '#A3E2C7', title.value, input.value, true);
              input.value = "";
              title.value = '';
            }
          }
      }
      ></img>
    </div>
    <span class='tooltiptext'>New note</span>
  </div>
);

export { AddTodo, AddReminder, SearchReminder };