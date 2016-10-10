import React from 'react';

const Title = ({text, onUpdate, color}) => {
  let input;
  return (
    <div class = 'title'>
        <input
          
          defaultValue = {text}
          ref={ node => input = node }
          onChange = {() => onUpdate(input.value)}
          style ={
            {border : 'none'},
            {backgroundColor: color }
          }
        ></input>
    </div>
  );
}

const FilterLink = ({ visibilityFilter, currentVisibilityFilter, onFilterClicked, listID, children }) => {

  if(visibilityFilter === currentVisibilityFilter){
    return <strong>{ children }</strong>;
  }

  return <a
    href="#"
    onClick={
      (e) => {
        e.preventDefault();
        onFilterClicked(visibilityFilter, listID );
      }
    }>
    { children }</a>
}

const ArchiveMe = ({ onArchive }) => {
  return (
    <div>
      <button
        onClick = {onArchive}
      >Archive</button>
    </div>
  );
}

const TimeTravel = ({undo, redo}) => (
  <div>
    <button
      onClick = {undo}
    >
    Un-do</button>
    <button
      onClick = {redo}
    >
    Re-do</button>
    
  </div>
);

export { Title, FilterLink, ArchiveMe, TimeTravel };