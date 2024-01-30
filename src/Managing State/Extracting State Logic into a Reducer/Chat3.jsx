import PropTypes from 'prop-types';

export default function ChatReducer3({contact, message, dispatch}){
  return (
    <section className="chat">
      <textarea
        placeholder={'Chat to ' + contact.name}
        value={message}
        onChange={(e) => {
          dispatch({
            type: 'edited_message3',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button onClick={() => {
        dispatch({
          type: 'sent_message',
        });
        alert(`Message: ${message} sent to ${contact.email}`);
      }}>
        Send to {contact.email}
      </button>
    </section>
  )
}

ChatReducer3.propTypes = {
  contact: PropTypes.object,
  message: PropTypes.string,
  dispatch: PropTypes.func
}