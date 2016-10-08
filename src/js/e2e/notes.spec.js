import notes from '../reducers/notes';


const stateBefore = [
  {
    id: 1,
    title: 'una prueba',
    content: 'que hay que pasar',
    archived: false,
    creation : 'enero',
    modification: 'enero',
    color: 'FFFF00' 
  },
  {
    id: 2,
    title: 'no hay repetidos',
    content: 'lorem ipsum',
    archived: false,
    creation : 'enero',
    modification: 'enero',
    color: 'FFFF00' 
  },
  {
    id: 3,
    title: 'un titulo mas',
    content: 'para mayor variedad',
    archived: false,
    creation : 'enero',
    modification: 'enero',
    color: 'FFFF00'
  }
];



const testAddNote = () =>{
  const stateBefore2 =[];

  const action = {
    type : 'ADD_NOTE',
    payload:{
      id: 1,
      color: 'FFFF00',
      content: 'que hay que pasar',
      creation : 'enero',
      modification: 'enero',
      title: 'una prueba',


    }
  };

  const stateAfter = [{
    id: 1,
    title: 'una prueba',
    content: 'que hay que pasar',
    archived: false,
    creation : 'enero',
    modification: 'enero',
    color: 'FFFF00'
    
  }];
  deepFreeze(stateBefore2);
  deepFreeze(action);
  expect(
    notes(stateBefore2, action)
  ).toEqual(stateAfter);
}

testAddNote();
console.log("nota agregada exitosamente");

const testArchiveNote = () => {
  
  const action = {
    type : 'ARCHIVE_NOTE',
    payload:{
      noteID: 2,
      modification: 'febrero'
    }
  }

  const stateAfter = [{
      id: 1,
      title: 'una prueba',
      content: 'que hay que pasar',
      archived: false,
      creation : 'enero',
      modification: 'enero',
      color: 'FFFF00' 
    },{
      id: 2,
      title: 'no hay repetidos',
      content: 'lorem ipsum',
      archived: true,
      creation : 'enero',
      modification: 'febrero',
      color: 'FFFF00' 
    },
    {
      id: 3,
      title: 'un titulo mas',
      content: 'para mayor variedad',
      archived: false,
      creation : 'enero',
      modification: 'enero',
      color: 'FFFF00'
    }
    ];
    deepFreeze(stateBefore);
  deepFreeze(action);
    expect(
    notes(stateBefore, action)
  ).toEqual(stateAfter);
}

testArchiveNote();
console.log("nota archivada exitosamente");


const testSetNoteColor = () => {
  
  const action = {
    type : 'SET_NOTE_COLOR',
    payload:{
      noteID: 3,
      modification: 'marzo',
      newcolor: '00BF00'
    }
  }

  const stateAfter = [
  {
      id: 1,
      title: 'una prueba',
      content: 'que hay que pasar',
      archived: false,
      creation : 'enero',
      modification: 'enero',
      color: 'FFFF00' 
    },
    {
      id: 2,
      title: 'no hay repetidos',
      content: 'lorem ipsum',
      archived: false,
      creation : 'enero',
      modification: 'enero',
      color: 'FFFF00' 
    },
    {
      id: 3,
      title: 'un titulo mas',
      content: 'para mayor variedad',
      archived: false,
      creation : 'enero',
      modification: 'marzo',
      color: '00BF00'
    }]
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(
    notes(stateBefore, action)
  ).toEqual(stateAfter);
}

testSetNoteColor();
console.log("nota coloreada exitosamente");


const testSetNoteTitle = () => {
  const action = {
    type: 'SET_NOTE_TITLE',
    payload:{
      id: 1,
      title: 'un nuevo comienzo',
      modification: 'abril'
    }
  }

  const stateAfter = [
  {
      id: 1,
      title: 'un nuevo comienzo',
      content: 'que hay que pasar',
      archived: false,
      creation : 'enero',
      modification: 'abril',
      color: 'FFFF00' 
    },
    {
    id: 2,
    title: 'no hay repetidos',
    content: 'lorem ipsum',
    archived: false,
    creation : 'enero',
    modification: 'enero',
    color: 'FFFF00' 
  },
  {
    id: 3,
    title: 'un titulo mas',
    content: 'para mayor variedad',
    archived: false,
    creation : 'enero',
    modification: 'enero',
    color: 'FFFF00'
  }]
  deepFreeze(stateBefore);
  deepFreeze(action);
    expect(
    notes(stateBefore, action)
  ).toEqual(stateAfter);
}

testSetNoteTitle();
console.log("nuevo titulo asignado exitosamente");



