/**
 * You can have as many state variables of as many types as you like in one component. This
 * component has two state variables, a number index and a boolean showMore that’s toggled when you 
 * click “Show details”:
 */

// import { useState } from 'react';
import { sculptureList } from './data';
import PropTypes from 'prop-types';

export default function Gallery({index, setIndex, showMore, setShowMore}){
  // const [index, setIndex] = useState(0);
  // const [showMore, setShowMore] = useState(false);
  // const [index, setIndex] = indexStateArray;
  // const [showMore, setShowMore] = showMoreStateArray;
  let sculpture = sculptureList[index];
  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length-1;
  function handleNextClick(){
    if(hasNext){
      setIndex(index+1);
    }
  }

  function handlePreviousClick(){
    if(hasPrev){
      setIndex(index-1);
    }
  }

  function handleShowMore(){
    setShowMore(!showMore);
  }

  return (
    <>
      <button 
        onClick={handlePreviousClick}
        disabled = {!hasPrev}
      >
        Previous
      </button>
      <button 
        onClick={handleNextClick}
        disabled = {!hasNext}
      >
        Next
      </button>

      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>

      <h3>({index+1} of {sculptureList.length})</h3>

      <button onClick={handleShowMore}>
        {showMore ? 'Hide' : 'Show'} Details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        alt = {sculpture.alt}
        src = {sculpture.url}
      />
    </>
  )
}

Gallery.propTypes = {
  index: PropTypes.number,
  setIndex: PropTypes.func,
  showMore: PropTypes.bool,
  setShowMore: PropTypes.func
}

/**
 * State is local to a component instance on the screen. In other words, if you render the same 
 * component twice, each copy will have completely isolated state! Changing one of them will not 
 * affect the other.
 */

/**
 * This is what makes state different from regular variables that you might declare at the top of 
 * your module. State is not tied to a particular function call or a place in the code, but it’s 
 * “local” to the specific place on the screen. You rendered two <Gallery /> components, so their 
 * state is stored separately.
 * 
 * Also notice how the Page component doesn’t “know” anything about the Gallery state or even 
 * whether it has any. Unlike props, state is fully private to the component declaring it. The 
 * parent component can’t change it. This lets you add state to any component or remove it without 
 * impacting the rest of the components.
 * 
 * What if you wanted both galleries to keep their states in sync? The right way to do it in React 
 * is to remove state from child components and add it to their closest shared parent. 
 */

