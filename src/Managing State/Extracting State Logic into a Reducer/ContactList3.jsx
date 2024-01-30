import PropTypes from 'prop-types';

export default function ContactListReducer3({ contacts, selectedId, dispatch }) {
  return (
    <section className='contact-list'>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <button onClick={() => {
              //TODO: dispatch change selection
              dispatch({
                type: 'changed3',
                id: contact.id,
              })
            }}>
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

ContactListReducer3.propTypes = {
  contacts: PropTypes.object,
  selectedId: PropTypes.number,
  dispatch: PropTypes.func
}