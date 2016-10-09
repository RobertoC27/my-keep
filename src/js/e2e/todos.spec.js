import todos from '../reducers/todos';
const stateBefore = [
  {
    archived: false,
    creation : 'enero',
    modification: 'enero',
    visibilityFilter: 'SHOW_ALL',
    id: 88,
    color : 'BFBA42',
    title: 'viva las vegas',
    todos : [
      {
        id: 0,
        text: 'llegar al hotel',
        completed: false,
        listID: 88
      },
      {
        id: 1,
        text: 'Banarme',
        completed: false,
        listID: 88
      }
    ]
  },
  {
    archived: false,
    creation : 'enero',
    modification: 'enero',
    visibilityFilter: 'SHOW_ALL',
    id: 65,
    color : 'BFBA42',
    title: 'ir al super',
    todos : [
      {
        id: 0,
        text: 'cereal',
        completed: false,
        listID: 65
      },
      {
        id: 1,
        text: 'yogurt',
        completed: false,
        listID: 65
      }
    ]
  }
];

const testAddTodoList = () => {

  const stateBefore2 = [
    {
      archived: false,
      creation : 'enero',
      modification: 'enero',
      visibilityFilter: 'SHOW_ALL',
      id: 65,
      color : 'BFBA42',
      title: 'ir al super',
      todos : []
    }
  ];

  const action = {
    type: 'ADD_TODO_LIST',
    payload:{
      
      creation : 'enero',
      modification: 'enero',
      id: 88,
      color : 'BFBA42',
      title: 'viva las vegas'
    }
  }


  const stateAfter = [
    {
      archived: false,
      creation : 'enero',
      modification: 'enero',
      visibilityFilter: 'SHOW_ALL',
      id: 65,
      color : 'BFBA42',
      title: 'ir al super',
      todos : []
    },
    {
      archived: false,
      creation : 'enero',
      modification: 'enero',
      visibilityFilter: 'SHOW_ALL',
      id: 88,
      color : 'BFBA42',
      title: 'viva las vegas',
      todos : []
    }
  ]


  deepFreeze(stateBefore2);
  deepFreeze(action);

  expect(
    listsTodos(stateBefore2, action)
  ).toEqual(stateAfter);
}

testAddTodoList();
console.log('agregada nueva todolist exitosamente');


const testAddTodo = () => {

  const action = {
    type : 'ADD_TODO',
    payload:{
      id: 3,
      text: 'salir de fiesta',
      listID: 88,
      modification: 'febrero'
    }
  }

  const stateAfter = [
    {
      archived: false,
      creation : 'enero',
      modification: 'febrero',
      visibilityFilter: 'SHOW_ALL',
      id: 88,
      color : 'BFBA42',
      title: 'viva las vegas',
      todos : [
        {
          id: 0,
          text: 'llegar al hotel',
          completed: false,
          listID: 88
        },
        {
          id: 1,
          text: 'Banarme',
          completed: false,
          listID: 88
        },
        {
          id: 3,
          text: 'salir de fiesta',
          completed: false,
          listID: 88
        }
      ]
    },
    {
      archived: false,
      creation : 'enero',
      modification: 'enero',
      visibilityFilter: 'SHOW_ALL',
      id: 65,
      color : 'BFBA42',
      title: 'ir al super',
      todos : [
        {
          id: 0,
          text: 'cereal',
          completed: false,
          listID: 65
        },
        {
          id: 1,
          text: 'yogurt',
          completed: false,
          listID: 65
        }
      ]
    }
  ]
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(
      listsTodos(stateBefore,action)
    ).toEqual(stateAfter);
}

testAddTodo();
console.log('added todo to todo-list');


const testToggleTodo = () => {

  const action = {
    type : 'TOGGLE_TODO',
    payload:{
      id: 1,
      listID: 65,
      modification: 'marzo'
    }
  }

  const stateAfter = [
    {
      archived: false,
      creation : 'enero',
      modification: 'enero',
      visibilityFilter: 'SHOW_ALL',
      id: 88,
      color : 'BFBA42',
      title: 'viva las vegas',
      todos : [
        {
          id: 0,
          text: 'llegar al hotel',
          completed: false,
          listID: 88
        },
        {
          id: 1,
          text: 'Banarme',
          completed: false,
          listID: 88
        }
      ]
    },
    {
      archived: false,
      creation : 'enero',
      modification: 'marzo',
      visibilityFilter: 'SHOW_ALL',
      id: 65,
      color : 'BFBA42',
      title: 'ir al super',
      todos : [
        {
          id: 0,
          text: 'cereal',
          completed: false,
          listID: 65
        },
        {
          id: 1,
          text: 'yogurt',
          completed: true,
          listID: 65
        }
      ]
    }
  ]


  deepFreeze(stateBefore);
  deepFreeze(action);

  
  expect(listsTodos(stateBefore, action)
    ).toEqual(stateAfter)
}


testToggleTodo();
console.log("togggle exitoso");

const testSetVisibilityFilter = () =>{
  const action = {
    type: 'SET_TODOLIST_VISIBILITY_FILTER',
    payload:{
      id: 88,
      visibilityFilter: 'SHOW_ACTIVE',
      modification: 'abril'
    }
  }

  const stateAfter = [
    {
      archived: false,
      creation : 'enero',
      modification: 'abril',
      visibilityFilter: 'SHOW_ACTIVE',
      id: 88,
      color : 'BFBA42',
      title: 'viva las vegas',
      todos : [
        {
          id: 0,
          text: 'llegar al hotel',
          completed: false,
          listID: 88
        },
        {
          id: 1,
          text: 'Banarme',
          completed: false,
          listID: 88
        }
      ]
    },
    {
      archived: false,
      creation : 'enero',
      modification: 'enero',
      visibilityFilter: 'SHOW_ALL',
      id: 65,
      color : 'BFBA42',
      title: 'ir al super',
      todos : [
        {
          id: 0,
          text: 'cereal',
          completed: false,
          listID: 65
        },
        {
          id: 1,
          text: 'yogurt',
          completed: false,
          listID: 65
        }
      ]
    }
  ]


  deepFreeze(stateBefore);
  deepFreeze(action);

  
  expect(listsTodos(stateBefore, action)
    ).toEqual(stateAfter)

}

testSetVisibilityFilter();
console.log("cambiado visibilityFilter exitosamente");


const testDeleteTodo = () =>{
  const action = {
    type: 'DELETE_TODO',
    payload: {
      id: 0,
      listID: 88,
      modification: 'mayo'
    }
  }

  const stateAfter = [
    {
      archived: false,
      creation : 'enero',
      modification: 'mayo',
      visibilityFilter: 'SHOW_ALL',
      id: 88,
      color : 'BFBA42',
      title: 'viva las vegas',
      todos : [
        
        {
          id: 1,
          text: 'Banarme',
          completed: false,
          listID: 88
        }
      ]
    },
    {
      archived: false,
      creation : 'enero',
      modification: 'enero',
      visibilityFilter: 'SHOW_ALL',
      id: 65,
      color : 'BFBA42',
      title: 'ir al super',
      todos : [
        {
          id: 0,
          text: 'cereal',
          completed: false,
          listID: 65
        },
        {
          id: 1,
          text: 'yogurt',
          completed: false,
          listID: 65
        }
      ]
    }
  ]

  deepFreeze(stateBefore);
  deepFreeze(action);

  
  
  expect(listsTodos(stateBefore, action)
    ).toEqual(stateAfter)
}

testDeleteTodo();
console.log("todo borrado con exito");


const testSetTodoListColor = () => {

  const action = {
    type:  'SET_TODOLIST_COLOR',
    payload: {
      id: 65,
      color: 'A4FC33',
      modification: 'junio'
    }
  }

  const stateAfter = [
    {
      archived: false,
      creation : 'enero',
      modification: 'enero',
      visibilityFilter: 'SHOW_ALL',
      id: 88,
      color : 'BFBA42',
      title: 'viva las vegas',
      todos : [
        {
          id: 0,
          text: 'llegar al hotel',
          completed: false,
          listID: 88
        },
        {
          id: 1,
          text: 'Banarme',
          completed: false,
          listID: 88
        }
      ]
    },
    {
      archived: false,
      creation : 'enero',
      modification: 'junio',
      visibilityFilter: 'SHOW_ALL',
      id: 65,
      color : 'A4FC33',
      title: 'ir al super',
      todos : [
        {
          id: 0,
          text: 'cereal',
          completed: false,
          listID: 65
        },
        {
          id: 1,
          text: 'yogurt',
          completed: false,
          listID: 65
        }
      ]
    }
  ]

  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(listsTodos(stateBefore, action)).toEqual(stateAfter);
}

testSetTodoListColor();
console.log('color cambiado exitosamente');

const testArchiveTodoList = () => {
  const action = {
    type: 'ARCHIVE_TODOLIST',
    payload: {
      id: 88,
      modification: 'julio',
      archived: true
    }
  }

  const stateAfter = [
    {
      archived: true,
      creation : 'enero',
      modification: 'julio',
      visibilityFilter: 'SHOW_ALL',
      id: 88,
      color : 'BFBA42',
      title: 'viva las vegas',
      todos : [
        {
          id: 0,
          text: 'llegar al hotel',
          completed: false,
          listID: 88
        },
        {
          id: 1,
          text: 'Banarme',
          completed: false,
          listID: 88
        }
      ]
    },
    {
      archived: false,
      creation : 'enero',
      modification: 'enero',
      visibilityFilter: 'SHOW_ALL',
      id: 65,
      color : 'BFBA42',
      title: 'ir al super',
      todos : [
        {
          id: 0,
          text: 'cereal',
          completed: false,
          listID: 65
        },
        {
          id: 1,
          text: 'yogurt',
          completed: false,
          listID: 65
        }
      ]
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(listsTodos(stateBefore, action)).toEqual(stateAfter);
}

testArchiveTodoList();
console.log('todolist archivado exitosamente');