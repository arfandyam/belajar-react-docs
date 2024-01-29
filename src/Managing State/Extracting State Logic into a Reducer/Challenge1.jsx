import { useReducer } from "react";
import ContactListReducer from "./ContactList";
import ChatReducer from "./Chat";
import { messageReducer, initialState } from "./messageReducer"

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

export default function MessengerReducer() {
  const [currState, dispatch] = useReducer(messageReducer, initialState);
  const message = currState.message;
  const contact = contacts.find((c) => c.id === currState.selectedId)

  return (
    <div>
      <ContactListReducer
        contacts={contacts}
        selectedId={contact.id}
        dispatch={dispatch}
      />
      <ChatReducer
        key={contact.id}
        contact={contact}
        message={message}
        dispatch={dispatch}
      />
    </div>
  )
}