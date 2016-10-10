import visibilityFilter from '../reducers/visibility';


const stateBefore = {
  visibilityFilter: 'SHOW_ALL',
  search : ''
}

const testSetVisibilityFilter = () => {
  const action =  {
    type: 'SET_VISIBILITY_FILTER',
    payload: {
      visibilityFilter: 'SHOW_NOTES'
    }
  }

  const stateAfter = {
    visibilityFilter: 'SHOW_NOTES',
    search: ''
  }

  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
}

testSetVisibilityFilter();
console.log('passed SET_VISIBILITY_FILTER')

const testSetSearch = () => {
  const action =  {
    type: 'SET_SEARCH',
    payload: {
      search: 'buenas'
    }
  }

  const stateAfter = {
    visibilityFilter: 'SHOW_ALL',
    search: 'buenas'
  }

  deepFreeze(stateBefore);
  deepFreeze(action);
  console.log(visibilityFilter(stateBefore, action));
  expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
}

testSetSearch();
console.log('passed SET_SEARCH')