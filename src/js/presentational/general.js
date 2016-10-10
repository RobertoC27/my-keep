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



export { Title, FilterLink };