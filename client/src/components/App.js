import React from "react"
// import { useUsers } from "../hooks"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Profile from "./Profile"
import Going from "./Going"
import NotGoing from "./NotGoing"
import "../styles/base.css"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Profile}/>
      <Route path="/going" component={Going}/>
      <Route path="/notgoing" component={NotGoing}/>
    </Router>
      
  )
}

export default App
