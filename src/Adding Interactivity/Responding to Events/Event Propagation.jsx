/**
 * Event handlers will also catch events from any children your component might have. We say that an 
 * event “bubbles” or “propagates” up the tree: it starts with where the event happened, and then 
 * goes up the tree.
 */
import PropTypes from 'prop-types';

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() =>
      alert('You clicked on the toolbar!')}>
      <button onClick={() => alert('Playing!')}>
        Play Movie
      </button>
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    </div>
  );
}

/**
 * Stopping propagation 
 * Event handlers receive an event object as their only argument. By convention, it’s usually called 
 * e, which stands for “event”. You can use this object to read information about the event.
 * 
 * That event object also lets you stop the propagation. If you want to prevent an event from 
 * reaching parent components, you need to call e.stopPropagation() like this Button component does:
 */

function ButtonStopPropagate({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button> 
  )
}

export function ToolbarStopPropagate(){
  return (
    <div className = "Toolbar" onClick = {() => {
      alert('You clicked on the toolbar!');
    }}>
      <ButtonStopPropagate onClick = {() => {
        alert('Playing!');
      }}>
        Play Movie
      </ButtonStopPropagate>

      <ButtonStopPropagate onClick = {() => {
        alert('Upload!');
      }}>
        Upload Image
      </ButtonStopPropagate>
    </div>
  )
}

ButtonStopPropagate.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any
}

/**
 * You could add more code to this handler before calling the parent onClick event handler, too. This 
 * pattern provides an alternative to propagation. It lets the child component handle the event, 
 * while also letting the parent component specify some additional behavior. Unlike propagation, it’s
 * not automatic. But the benefit of this pattern is that you can clearly follow the whole chain of 
 * code that executes as a result of some event.
 * 
 * If you rely on propagation and it’s difficult to trace which handlers execute and why, try this 
 * approach instead.
 */