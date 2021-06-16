import React from 'react'
import NavBar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import { Switch, Route } from 'react-router-dom'

function App() {
   return (
      <div className='app'>
         <NavBar />
         <Switch>
            <Route exact path='/' component={Dashboard} />
         </Switch>
      </div>
   )
}

export default App
