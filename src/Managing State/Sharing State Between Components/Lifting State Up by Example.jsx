/**
 * In this example, a parent Accordion component renders two separate Panels:
 * 
 * Accordion
 *  - Panel
 *  - Panel
 * 
 * Each Panel component has a boolean isActive state that determines whether its content is visible.
 * 
 * But now let’s say you want to change it so that only one panel is expanded at any given time. 
 * With that design, expanding the second panel should collapse the first one.
 * 
 * To coordinate these two panels, you need to “lift their state up” to a parent component in three 
 * steps:
 */

import { useState } from "react";
import PropTypes from 'prop-types'

/**
 * STEP 1
 * 
 * Remove state from the child components.
 * You will give control of the Panel’s isActive to its parent component. This means that the 
 * parent component will pass isActive to Panel as a prop instead.
 */
function Panel({title, children}){
  const [isActive, setIsActive] = useState(false);
  return (
    <section>
      <h2>{title}</h2>
      {isActive ? (
        <p>
          {children}
        </p>
      ) : <button onClick = {() => setIsActive(true)}>
            Show
        </button>}
    </section>
  )
}

export default function Accordion(){
  /**
   * STEP 2
   * Pass hardcoded data from the common parent
   * 
   * To lift state up, you must locate the closest common parent component of both of the child 
   * components that you want to coordinate:
   * 
   * In this example, it’s the Accordion component. Since it’s above both panels and can control 
   * their props, it will become the “source of truth” for which panel is currently active. Make 
   * the Accordion component pass a hardcoded value of isActive (for example, true) to both panels:
   */

  /**
   * STEP 3
   * Add state to the common parent 
   */

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel 
        title="city"
        isActive={activeIndex}
        onShow = {() => setActiveIndex(1)}
      >
        With a population of about 2 million, Almaty is Kazakhstans largest city. From 1929 to 1997,
        it was its capital city.
      </Panel>
      <Panel 
        title="etymology"
        isActive={activeIndex}
        onShow = {() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for apple and is often
        translated as full of apples. In fact, the region surrounding Almaty is thought to be the 
        ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a 
        likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  )
}

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
}