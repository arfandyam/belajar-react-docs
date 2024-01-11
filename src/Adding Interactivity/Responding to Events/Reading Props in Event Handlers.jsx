/**
 * Because event handlers are declared inside of a component, they have access to the component’s
 * props. Here is a button that, when clicked, shows an alert with its message prop:
 */
import PropTypes from 'prop-types';

function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  )
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  )
}

AlertButton.propTypes = {
  message: PropTypes.string,
  children: PropTypes.any
}