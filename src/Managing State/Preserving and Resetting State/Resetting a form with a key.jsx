/**
 * Resetting state with a key is particularly useful when dealing with forms.
 * In many apps, preserved state may be the desired behavior, but not in a chat app! You don’t want 
 * to let the user send a message they already typed to a wrong person due to an accidental click.
 * 
 * Adding a key ensures that when you select a different recipient, the Chat component will be 
 * recreated from scratch, including any state in the tree below it. React will also re-create the 
 * DOM elements instead of reusing them.
 */

import { useState } from "react";
import Chat from "./Chat.jsx";
import ContactList from "./ContactList.jsx"

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <>
      <ContactList
        key={to.name}
        persons={contacts}
        selectedPerson={to}
        onSetTo={person => setTo(person)}
      />
      <Chat
        key={to.id}
        person={to}
      />
    </>
  )
}

/**
 * There's a bug, if u put key to both component, the top component always duplicated when it runs
 * re-render Messenger, i dont know the root cause, i'll be back after i found and explanation
 * 
 * Well, it stopped happen when i differ the key, one from to.id and the other from to.name
 */