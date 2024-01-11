/* Often you’ll want the parent component to specify a child’s event handler. 
Consider buttons: depending on where you’re using a Button component, you might want to execute a 
different function 

To do this, pass a prop the component receives from its parent as the event handler 
*/
import PropTypes  from 'prop-types';

function Button(props) {
  const { onClick, children } = props;
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

function PlayButton({ movieName }) {
  function handlerPlayClick() {
    alert(`Playing ${movieName}`);
  }

  return (
    <Button onClick={handlerPlayClick}>
      Play {movieName}
    </Button>
  )
}

function UploadButton(){
  return (
    <Button onClick = {() => alert('Uploading!')}>
      Upload Image
    </Button>
  )
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
}

PlayButton.propTypes = {
  movieName: PropTypes.string
}

/**
 * Built-in components like <button> and <div> only support browser event names like onClick. 
 * However, when you’re building your own components, you can name their event handler props any way 
 * that you like.
 * 
 * By convention, event handler props should start with on, followed by a capital letter.
 */
