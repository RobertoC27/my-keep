import React from 'react';
import { Title, ArchiveMe, ColorMe } from './general';


const Note = ({ note, onUpdate, id, onArchive }) => {
  let m ='modification: ' + note.modification;
  let c = 'creation: '+ note.creation;
  let b =  note.modification > note.creation ;
  if(note.modification > note.creation ){
    console.log("no hay nada que hacer")
  }else{
    console.log("son iguales!!!!")
  }
  return(
    <div 
      class = 'element'
      style = {{backgroud: note.color}}
      onClick = {()=>{console.log(note.color)}}
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

      { b ?   <div><div class='mod'>{c}</div><div class='mod'>{m}</div></div> : <div class='mod'>{c}</div> }
      
      <div class = 'clear'></div>
    </div>
  );
}

export {Note};