/**
 * This process of requesting and serving UI has three steps:
 * 
 * 1. Triggering a render (delivering the guest’s order to the kitchen)
 * 2. Rendering the component (preparing the order in the kitchen)
 * 3. Committing to the DOM (placing the order on the table)
 */

/**
 * When your app starts, you need to trigger the initial render. it’s done by calling createRoot 
 * with the target DOM node, and then calling its render method with your component
 */

import { createRoot } from 'react-dom/client';
import Image from './Image'

const root = createRoot(document.getElementById('root'))
root.render(
    <Image/>
  // <React.StrictMode>
  // </React.StrictMode>
)

/**
 * Once the component has been initially rendered, you can trigger further renders by updating its 
 * state with the set function. Updating your component’s state automatically queues a render. 
 */