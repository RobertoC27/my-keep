const addTodoList = (creation, modification, id, color, title) => (
  {
    type: 'ADD_TODO_LIST',
    payload:{
      creation,
      modification,
      id,
      color,
      title
    }
  }
);

const addNote = (creation, modification, id, color, title, content) => (
  {
    type: 'ADD_NOTE',
    payload: {
      creation,
      modification,
      id,
      color,
      title,
      content
    }
  }
);

const setNoteTitle = (id, title, modification) =>(
  {
    type: 'SET_NOTE_TITLE',
    payload:{
      id,
      title,
      modification
    }
  }
);

const toggleTodo = (id, listID, modification) =>(
  {
    type:'TOGGLE_TODO',
    payload:{
      id,
      listID,
      modification
    }
  }
);

const setTodoListTitle = (id, title, modification) => (
  {
    type: 'SET_TODOLIST_TITLE',
    payload: {
      id,
      title,
      modification
    }
  }
);

const addTodo = (id, text, listID, modification) => (
  {
    type: 'ADD_TODO',
    payload: {
      id,
      text,
      listID,
      modification
    }
  }
);

const setTodoListVisibilityFilter = (id, visibilityFilter, modification) => (
  {
    type : 'SET_TODOLIST_VISIBILITY_FILTER',
    payload: {
      id,
      visibilityFilter,
      modification
    }
  }
);
export {
  addTodoList,
  addNote,
  setNoteTitle,
  toggleTodo,
  setTodoListTitle,
  addTodo,
  setTodoListVisibilityFilter
}