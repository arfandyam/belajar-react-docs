/**
 * Reset a detail form 
 * 
 * This is an editable contact list. You can edit the selected contact’s details and then either 
 * press “Save” to update it, or “Reset” to undo your changes.
 * 
 * When you select a different contact (for example, Alice), the state updates but the form keeps 
 * showing the previous contact’s details. Fix it so that the form gets reset when the selected 
 * contact changes.
 */

import { useState } from "react";
import ContactList from "./ContactList";
import EditContact from "./EditContact";

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

export default function ContactManager(){

  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find(contact => contact.id === selectedId);

  function handleSave(updatedData){
    const nextContact = contacts.map(contact => {
      if(contact.id === updatedData.id){
        return updatedData;
      } else {
        return contact;
      }
    });
    setContacts(nextContact);
  }

  return (
    <>
      <ContactList
        persons={contacts}
        onSelectedId={id => setSelectedId(id)}
      />
      <EditContact
        key={selectedId}
        selectedPerson={selectedContact}
        onChangePerson={handleSave}
      />
    </>
  )
}