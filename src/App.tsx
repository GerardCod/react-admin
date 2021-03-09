import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './secure/components/Nav';
import SideNav from './secure/components/SideNav';
import Dashboard from './secure/Dashboard';
import Users from './secure/Users';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './public/Login';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Login} />
      <Route path='/users' component={Users} />
      <Route path='/dashboard' component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;
