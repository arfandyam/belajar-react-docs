export const initialState = {
  selectedId: 0,
  message: 'Hello',
};

export function messageReducer(state, action) {
  switch (action.type) {
    case 'changed': {
      return {
        ...state,
        selectedId: action.id,
        message: ''
      }
    }

    case 'edited_message': {
      return {
        ...state,
        message: action.message
      }
    }

    /**
    * Challenge 2:
    * Clear the input on sending the message
    */
    case 'sent_message': {
      return {
        ...state,
        message: ''
      }
    }
  }
}



