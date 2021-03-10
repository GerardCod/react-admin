import React from 'react';
import './App.css';
import Dashboard from './secure/Dashboard';
import Users from './secure/Users';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './public/Login';
import Register from './public/Register';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Dashboard} />
      <Route path='/users' component={Users} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Register} />
    </BrowserRouter>
  );
}

export default App;
