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
      <Route path='/' exact component={Login} />
      <Route path='/users' component={Users} />
      <Route path='/home' component={Dashboard} />
      <Route path='/signup' component={Register} />
    </BrowserRouter>
  );
}

export default App;
