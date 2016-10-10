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

const searchReminder = (search) => (
  {
    type: 'SET_SEARCH',
    payload: {
      search
    }
  }
);

const setVisibilityFilter = (visibilityFilter) => (
  {
    type : 'SET_VISIBILITY_FILTER',
    payload: {
      visibilityFilter
    }
  }
);

const getVisibleTodos = (todos, visibilityFilter) => {
  if(visibilityFilter === 'SHOW_ALL'){
    return todos;
  }

  if(visibilityFilter === 'SHOW_COMPLETED'){
    return todos.filter(t => t.completed);
  }

  if(visibilityFilter === 'SHOW_ACTIVE'){
    return todos.filter(t => !t.completed);
  }
}

const getVisbleReminders = (reminders, visibilityFilter, search) => {
  let r = [];
  
  for (var i = 0; i < reminders.length; i++) {
    if (reminders[i].title.includes(search) && (reminders[i].archived === false) ) {
      r.push(reminders[i])
    }
  }

  if (r.length > 0) {
    
    if (visibilityFilter === 'SHOW_ALL') {
      return r;
    }
    if (visibilityFilter === 'SHOW_NOTE' && (r[0].todos === undefined )) {
      
      return r;
    }
    if (visibilityFilter === 'SHOW_LIST' && (r[0].todos !== undefined )) {
      
      return r;
    }
    return [];
  }
  
  return r;
}

export {
  addTodoList,
  addNote,
  setNoteTitle,
  toggleTodo,
  setTodoListTitle,
  addTodo,
  setTodoListVisibilityFilter,
  searchReminder,
  setVisibilityFilter,
  getVisibleTodos,
  getVisbleReminders
}