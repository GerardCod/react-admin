import React from 'react';
import Nav from './components/Nav';
import SideNav from './components/SideNav';

/**
 * 
 * @param param0 component's props
 * @returns component
 */
const Wrapper = ({children}: any) => (
    <div className="App">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>
        </div>
      </div>
    </div>
);

export default Wrapper;