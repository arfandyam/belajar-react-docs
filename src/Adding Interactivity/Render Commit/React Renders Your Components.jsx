/**
 * After you trigger a render, React calls your components to figure out what to display on screen. “Rendering” is React calling your components.
 * 
 * 1. On initial render, React will call the root component.
 * 2. For subsequent renders, React will call the function component whose state update triggered 
 *  the render.
 * 
 * This process is recursive: if the updated component returns some other component, React will 
 * render that component next, and if that component also returns something, it will render that 
 * component next, and so on. The process will continue until there are no more nested components 
 * and React knows exactly what should be displayed on screen.
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import Gallery from './Gallery';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>
);

/**
 * 1. During the initial render, React will create the DOM nodes for <section>, <h1>, and three 
 * <img> tags.
 * During a re-render, React will calculate which of their properties, if any, have changed since 
 * the previous render. It won’t do anything with that information until the next step, the commit 
 * phase.
 */