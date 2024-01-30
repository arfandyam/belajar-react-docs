/**
 * Restore input values when switching between tabs 
 * 
 * Saat ini, mengubah penerima pesan akan menghapus text yang telah kita ketikkan
 * Ada baiknya jika setiap pesan yang telah kita ketikkan tetap tersimpan sesuai dengan penerima 
 * meskipun sedang berganti dialog box oleh penerima pesan
 */

import { useReducer } from "react";
import ContactListReducer3 from "./ContactList3";
import ChatReducer3 from "./Chat3";
import { messageReducer, initialState3 } from "./messageReducer"

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com', message: ''},
  { id: 1, name: 'Alice', email: 'alice@mail.com', message: ''},
  { id: 2, name: 'Bob', email: 'bob@mail.com', message: ''},
];


export default function MessengerReducer3() {
  const [currState, dispatch] = useReducer(messageReducer, initialState3);
  const message = currState.messages[currState.selectedId];
  const contact = contacts.find((c) => c.id === currState.selectedId);

  return (
    <div>
      <ContactListReducer3
        contacts={contacts}
        selectedId={contact.id}
        dispatch={dispatch}
      />
      <ChatReducer3
        // key={contact.id}
        contact={contact}
        message={message}
        dispatch={dispatch}
      />
    </div>
  )
}