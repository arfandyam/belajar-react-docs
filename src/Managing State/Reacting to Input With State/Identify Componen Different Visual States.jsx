/**
 * First, you need to visualize all the different “states” of the UI the user might see:
 * 
 * 1. Empty: Form has a disabled “Submit” button.
 * 2. Typing: Form has an enabled “Submit” button.
 * 3. Submitting: Form is completely disabled. Spinner is shown.
 * 4. Success: “Thank you” message is shown instead of a form.
 * 5. Error: Same as Typing state, but with an extra error message.
 * 
 * Just like a designer, you’ll want to “mock up” or create “mocks” for the different states before
 * you add logic. For example, here is a mock for just the visual part of the form. This mock is 
 * controlled by a prop called status with a default value of 'empty':
 */

import PropTypes from 'prop-types'

export default function MockUpForm({ status = 'empty' }){
  if(status === 'success'){
    return (
      <h1>Thats Right!</h1>
    )
  }

  return(
    <>
      <h1>City Quiz</h1>
      <p>In which city is there a billboard tht turns air into drinkable water?</p>
      <form action="">
        <textarea/>
        <br />
        <button>
          Submit
        </button>
      </form>
    </>
  )
}

MockUpForm.propTypes = {
  status: PropTypes.string,
}
