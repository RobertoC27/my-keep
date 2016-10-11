import React from 'react';
import { Title, ArchiveMe, ColorMe } from './general';


const Note = ({ note, onUpdate, id, onArchive }) => (
  <div 
    class = 'element'
    style = {{backgroudColor: note.color}}
  >
    <Title 
      text= {note.title}
      onUpdate = {onUpdate}
      id = {id}
      color = {note.color}
    />
    
    
    <div >{note.content}</div>
    <ArchiveMe
      onArchive = {onArchive}
    />
    <div class = 'clear'></div>
  </div>
);

export {Note};