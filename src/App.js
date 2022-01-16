import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import './app.css'

import Home from './pages/Home'

import AdminHome from './pages/AdminHome'
import LoginForm from './pages/admin_component/LoginForm'

class App extends React.Component{
  
  render(){
    return(
      <Router>        
        <Switch>
          <Route path="/admin" render={()=>{
            return( localStorage.getItem("accessToken") ? <AdminHome/> : <LoginForm/>)
          }}>
          </Route>
          <Route path="/">
            <Redirect to="/home"/>
            <Home/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
