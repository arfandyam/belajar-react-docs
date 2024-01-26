/**
 * Fix misplaced state in the list 
 * 
 * In this list, each Contact has state that determines whether “Show email” has been pressed for it.
 * Press “Show email” for Alice, and then tick the “Show in reverse order” checkbox. You will notice
 * that it’s Taylor’s email that is expanded now, but Alice’s—which has moved to the bottom—appears 
 * collapsed.
 * 
 * Fix it so that the expanded state is associated with each contact, regardless of the chosen 
 * ordering.
 */

import { useState } from "react";
import Contact from "./Contact";

const contacts = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];

export default function ReverseContact(){
  const [reverse, setReverse] = useState(false);
  const duplicateContacts = [...contacts]
  
  if(reverse){
    duplicateContacts.reverse()
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={e => setReverse(e.target.checked)}
        />
        Show in reverse order
      </label>
      <ul>
        {
          duplicateContacts.map(contact => (
            <li key={contact.id}>
              <Contact
                person={contact}
              />
            </li>
          ))
        }
      </ul>
    </>
  )
}