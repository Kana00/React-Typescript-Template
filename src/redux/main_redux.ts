const ADD_MESSAGE = 'ADD_MESSAGE';
const REMOVE_MESSAGE = 'REMOVE_MESSAGE';


export function addMessage(message: string) {
  return {
    type: ADD_MESSAGE,
    message: message
  };
}

export function removeMessage() {
  return {
    type: REMOVE_MESSAGE,
    message: ''
  };
}

const initialState = {
  message: 'Hello redux world',
};

export function rootScreenReducer( state = initialState, action: any ) {
  switch (action.type) {
    case ADD_MESSAGE:
      state = Object.assign({}, {message : action.message});
      return state;
    case REMOVE_MESSAGE:
      state = Object.assign({}, {message : action.message});
      return state;
    default:
      return state;
  }
}

// note :
// Object.assign allow you to not assigne by reference but rather by value
// If you don't use it, the store will not notify that you want a refresh state in react
// Remember that state must be immutable and reducer is a pure function
