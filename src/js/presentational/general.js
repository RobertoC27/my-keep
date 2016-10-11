import React from 'react';

const Title = ({text, onUpdate, color}) => {
  let input;
  return (
    <div class = 'title'>
        <input
          class = 't1'
          type = 'text'
          placeholder= 'Título'
          defaultValue = {text}
          ref={ node => input = node }
          onChange = {() => onUpdate(input.value)}
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
    <div class='tooltip'>
      <button
        class = 'archivar'
        onClick = {onArchive}
      ></button>
      <span class='tooltiptext'>Archive</span>

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

const ColorMe = ({def, onColorChange}) => {
  let input;
  return (
    <input type = 'color'
      defaultValue={def}
      ref={ node => input = node }
      onChange={onColorChange(input.value)}
    >
    </input>
  );
}

export { Title, FilterLink, ArchiveMe, TimeTravel, ColorMe };