import React from 'react';
import {Title} from './general';

const Note = ({ note, onUpdate, id }) => (
  <div 
    class = 'element'
    style={ {backgroundColor: note.color }}
  >
    <Title 
      text= {note.title}
      onUpdate = {onUpdate}
      id = {id}
      color = {note.color}
    />
    <div class = 'clear'></div>
    <div >{note.content}</div>
  </div>
);

export {Note};