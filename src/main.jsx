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
// import Form from './Adding Interactivity/State as a Snapshot/State Over a Time'
import MovingDot from './Adding Interactivity/Updating Objects in a State/Treat state as a read only'
// import Form from './Adding Interactivity/Updating Objects in a State/Copying Object with Spread Syntax'
// import Form from './Adding Interactivity/Updating Objects in a State/Updating a Nested Object'
import Form from './Adding Interactivity/Updating Objects in a State/Write Concise Update Logic with Immer'
import List from './Adding Interactivity/Updating Arrays in a State/Adding to an Array'
import RemoveList from './Adding Interactivity/Updating Arrays in a State/Removing an Array'
// import ShapeEditor from './Adding Interactivity/Updating Arrays in a State/Transforming an Array'
import CounterList from './Adding Interactivity/Updating Arrays in a State/Replacing Items in an Array'
import InsertList from './Adding Interactivity/Updating Arrays in a State/Inserting into an Array'
import ReverseList from './Adding Interactivity/Updating Arrays in a State/Making Other Changes to an Array'
import BucketList from './Adding Interactivity/Updating Arrays in a State/Updating Objects Inside an Array'
import BucketListImmer from './Adding Interactivity/Updating Arrays in a State/Write Concise Update Logic with Immer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toolbar />
    <ToolbarStopPropagate />
    <SignUp />
    <AppState />
    {/* <Gallery /> */}
    {/* <App /> */}
    <MovingDot />
    <Form />
    <List />
    <RemoveList />
    {/* <ShapeEditor /> */}
    <CounterList />
    <InsertList />
    <ReverseList />
    <BucketList />
    <BucketListImmer />
  </React.StrictMode>,
)
