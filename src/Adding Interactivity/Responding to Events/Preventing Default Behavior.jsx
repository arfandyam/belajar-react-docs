/**
 * Some browser events have default behavior associated with them. For example, a <form> submit 
 * event, which happens when a button inside of it is clicked, will reload the whole page by 
 * default:
 */

export default function SignUp(){
  return (
    <form onSubmit = {e => {
      e.preventDefault();
      alert('On Submitting!');
    }}>
      <input/>
      <button>
        Send
      </button>
    </form>
  )
}