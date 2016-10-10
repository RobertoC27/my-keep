import React from 'react';
import { Title, ArchiveMe } from './general';


const Note = ({ note, onUpdate, id, onArchive }) => (
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
    <ArchiveMe
      onArchive = {onArchive}
    />
  </div>
);

export {Note};