import React from 'react'
import NavBar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/project/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { Switch, Route } from 'react-router-dom'

function App() {
   return (
      <div className='app'>
         <NavBar />
         <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
         </Switch>
      </div>
   )
}

export default App
