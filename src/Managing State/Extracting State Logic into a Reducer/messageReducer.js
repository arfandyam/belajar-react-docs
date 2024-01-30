export const initialState = {
  selectedId: 0,
  message: 'Hello',
};

/**
    * Challenge 3
    * Melakukan perubahan agar chat tetap tersimpan meski berganti dialog chat
    */

export const initialState3 = {
  selectedId: 0,
  messages: {
  0: 'Hello',
  1: 'Hello',
  2: 'Hello',
  },
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
    * Challenge 3
    * Melakukan perubahan agar chat tetap tersimpan meski berganti dialog chat
    */

    case 'edited_message3': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message
        }
      }
    }
      
    case 'changed3': {
      return {
        ...state,
        selectedId: action.id,
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



