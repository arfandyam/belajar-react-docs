/**
 * To add an event handler, you will first define a function and then pass it as a prop to the
 * appropriate JSX tag.
 */

/**
 * Make it to show message
 * 1. Declare a function called handleClick inside your Button component.
 * 2. Implement the logic inside that function (use alert to show the message).
 * 3. Add onClick={handleClick} to the <button> JSX.
 */

export default function Button(){
  function handleClick(){
    alert('You clicked me!');
  }

  return (
    <button onClick = {handleClick}>
      Click me
    </button>
  )

  /* Event handler functions:

  1.Are usually defined inside your components.
  2.Have names that start with handle, followed by the name of the event. 
  
  We can make it inline in the JSX or using arrow function

  Functions passed to event handlers must be passed, not called. For example:

  '''
  passing a function (correct)	  ||  calling a function (incorrect)

  <button onClick={handleClick}>	    <button onClick={handleClick()}>
  '''

  1. first example, the handleClick function is passed as an onClick event handler. This tells React 
    to remember it and only call your function when the user clicks the button.

  2. second example, the () at the end of handleClick() fires the function immediately during 
  rendering, without any clicks. This is because JavaScript inside the JSX { and } executes right 
  away. Passing inline code like this won’t fire on click—it fires every time the component renders
  */
}