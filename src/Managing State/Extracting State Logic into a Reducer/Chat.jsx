import PropTypes from 'prop-types';

export default function ChatReducer({contact, message, dispatch}){

  return (
    <section className="chat">
      <textarea
        placeholder={'Chat to ' + contact.name}
        value={message}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button>
        Send to {contact.email}
      </button>
    </section>
  )
}

ChatReducer.propTypes = {
  contact: PropTypes.object,
  message: PropTypes.string,
  dispatch: PropTypes.func
}