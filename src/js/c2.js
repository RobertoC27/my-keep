
const loadState = () => {
  try{
    let result = JSON.parse(localStorage.getItem('state'));
    return result ? result : undefined;
  }
  catch(err){
    return undefined;
  }
}

const saveState = (state) => {
  try{
    localStorage.setItem('state', JSON.stringify(state));
  }
  catch(err){
    // Log
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
});


const reminderApp = combineReducers(
  {
    listsTodos,
      notes,
      visibilityFilter

  }
);

const store = createStore(reminderApp, loadState());

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


const getVisbleReminders = () => {

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

const Footer = ({ currentVisibilityFilter, onFilterClicked, listID }) => (
  <div class="todoFilter">
    Show:
    <FilterLink
      visibilityFilter="SHOW_ALL"
      currentVisibilityFilter={ currentVisibilityFilter }
      onFilterClicked={ onFilterClicked }
      listID={ listID }>All</FilterLink>
    {' '}
    <FilterLink
      visibilityFilter="SHOW_COMPLETED"
      currentVisibilityFilter={ currentVisibilityFilter }
      onFilterClicked={ onFilterClicked }
      listID={ listID }>Completed</FilterLink>
    {' '}
    <FilterLink
      visibilityFilter="SHOW_ACTIVE"
      currentVisibilityFilter={ currentVisibilityFilter }
      onFilterClicked={ onFilterClicked }
      listID={ listID }>Active</FilterLink>
  </div>
);

const GeneralFooter = ({ currentVisibilityFilter, onFilterClicked, listID }) => (
  <div class="todoFilter">
    Show:
    <FilterLink
      visibilityFilter="SHOW_ALL"
      currentVisibilityFilter={ currentVisibilityFilter }
      onFilterClicked={ onFilterClicked }
      listID={ listID }>All</FilterLink>
    {' '}
    <FilterLink
      visibilityFilter="SHOW_NOTE"
      currentVisibilityFilter={ currentVisibilityFilter }
      onFilterClicked={ onFilterClicked }
      listID={ listID }>Notes</FilterLink>
    {' '}
    <FilterLink
      visibilityFilter="SHOW_LIST"
      currentVisibilityFilter={ currentVisibilityFilter }
      onFilterClicked={ onFilterClicked }
      listID={ listID }>Todo-list</FilterLink>
  </div>
);

const Todo = ({ text, completed, onTodoClicked }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
    onClick={ onTodoClicked }>
    { text }
  </li>
);

const TodoList = ({ todos, onTodoClicked, color, title, onUpdate, id, currentVisibilityFilter }) => (
  <div>
    <Title
      text= {title}
      onUpdate = {onUpdate}
      color = {color}
    />
    <AddTodo
      color = {color}
      listID = {id}
    />
    <ul>
      {
        todos.map(todo => (
          <Todo
            key={ todo.id }
            text = {todo.text}
            completed = {todo.completed}
            onTodoClicked={ () => onTodoClicked(todo) }
          />
        ))
      }
    </ul>

    <Footer
      currentVisibilityFilter = {currentVisibilityFilter}
      listID = {id}
      onFilterClicked = {
        (v,i)=>{store.dispatch(setTodoListVisibilityFilter(i, v, Date()) )}
      }
    />
  </div>
);

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

const Reminders = ({listsTodos, notes}) => 
  {
    return(
      <div>
        <div class = 'notas'>
          {
            notes.map( note => {
              return(
                <Note
                  key = {note.id}
                  id = {note.id}
                  note = {note}
                  onUpdate = {
                    (title) => {
                      store.dispatch(setNoteTitle(note.id, title, Date()) );
                    }
                  }
                />
              );
            })
          }
        </div>
        <div class = 'listas'>
          {
            listsTodos.map(listTodo => {
              return (
                <TodoList
                  key = {listTodo.id}
                  color = {listTodo.color}
                  todos = {getVisibleTodos(listTodo.todos, listTodo.visibilityFilter) }
                  title = {listTodo.title}
                  id = {listTodo.id}
                  currentVisibilityFilter = {listTodo.visibilityFilter}
                  onTodoClicked = {
                    (todo) =>{
                      store.dispatch(toggleTodo(todo.id, listTodo.id, Date() ));
                    }
                  }
                  onUpdate = {
                    (title) => {
                      store.dispatch( setTodoListTitle(listTodo.id, title, Date()) );
                    }
                  }
                />
              );
            })
          }
        </div>
      </div>
    );
  }

const VisibleNotes = connect(
    (state, ownProps) => ({
    notes: state.notes,
    listsTodos: state.listsTodos
    }),
    (dispatch, ownProps) => ({
      onTodoClicked: (todo) => {
        dispatch(toggleTodo(todo.id))
      }
    })
  )(Reminders);

const VisibleTodos = connect(
  (state, ownProps) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }),
  (dispatch, ownProps) => ({
    onTodoClicked: (todo) => {
      dispatch(toggleTodo(todo.id))
    }
  })
  )(TodoList);

const AddTodo = ({color, listID}) => {
  let remind;

  return (
    <div>
      <input 
        type="text"
        placeholder = 'Recordar'
        ref={ node => remind = node }
        style = {
          {backgroundColor: color},
          {border : 'none'}
        }
      />
      <button
        onClick={
          () => { 
            if (remind.value !== '') {
              
              store.dispatch(
                addTodo(v4(), remind.value, listID, Date() )
              );
              remind.value = "";
            }
            
          }
        }
      >Add todo</button>
    </div>
  );
}



const AddReminder = () => {
  let input;
  let title;
  return (
    <div class = 'add-reminder'>
      <input type="text" placeholder = 'Título' ref={ node => title = node } />
      <input type="text" placeholder = 'Recordar' ref={ node => input = node } />
      <button
        onClick={
          () => { 
            if (title.value !== '') {
              store.dispatch(addTodoList(Date(), Date(), v4(), '#FFD180', title.value, false));
              title.value = "";
            }
          }
        }
      >Add Todo-list</button>
      <button
        onClick={
          () => { 
            if (title.value !== '' && input.value !== '') {
              store.dispatch(addNote(Date(), Date(), v4(), '#A3E2C7', title.value, input.value, true) );
              input.value = "";
              title.value = '';
            }
          }
        }
      >Add Note</button>
    </div>
  );
}

const SearchReminder = () => {
  let input;
  return (
    <div>
      <input 
        type="text"
        placeholder = 'Búsqueda'
        ref={ node => input = node }
        onChange = {
          () => {

          }
        }
      />
      <div class ='clear'></div>
    </div>
  );
}

const TodosApp = ({ todos, visibilityFilter }) => (
  <div>
    <AddTodo />
    <VisibleTodos />
    <Footer />
  </div>
);

const RemindersApp = ({listsTodos, notes, visibilityFilter}) => (
  <div>
    <SearchReminder/>
    <AddReminder/>
    <Reminders 
      listsTodos = {listsTodos}
      notes = {notes}
      />
    <GeneralFooter
      currentVisibilityFilter = {visibilityFilter.visibilityFilter}
      onFilterClicked = {
        (f) => {
          store.dispatch( );
        }
      }
    />
  </div>
);


const render = () => {
  ReactDOM.render(
     <RemindersApp
      { ...store.getState() } />,
    document.getElementById('root')
  );
};
/*
ReactDOM.render(
  <Provider store={ store }>
    <RemindersApp />
  </Provider>,
  document.getElementById('root')
);
*/
render();
store.subscribe(render);
const deb = () => {
  console.log(store.getState());
}
deb();
store.subscribe(deb);
store.subscribe(() => {
  saveState(store.getState());
});
