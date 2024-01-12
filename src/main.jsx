import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Button from './Adding Interactivity/Responding to Events/Adding Event Handlers.jsx'
// import Toolbar from './Adding Interactivity/Responding to Events/Reading Props in Event Handlers.jsx'
// import Toolbar from './Adding Interactivity/Responding to Events/Passing Event Handler as Props'
import Toolbar from './Adding Interactivity/Responding to Events/Event Propagation'
import { ToolbarStopPropagate } from './Adding Interactivity/Responding to Events/Event Propagation'
import SignUp from './Adding Interactivity/Responding to Events/Preventing Default Behavior'
// import Gallery from './Adding Interactivity/State A Components Memory/Adding a State Variable'
// import Gallery from './Adding Interactivity/State A Components Memory/Giving a Component Multiple State Variables'
import AppState from './Adding Interactivity/State A Components Memory/App'
// import Form from './Adding Interactivity/State as a Snapshot/Setting State Triggers Render'
import Form from './Adding Interactivity/State as a Snapshot/State Over a Time'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toolbar />
    <ToolbarStopPropagate />
    <SignUp />
    <AppState />
    {/* <Gallery /> */}
    <Form />
    {/* <App /> */}
  </React.StrictMode>,
)
