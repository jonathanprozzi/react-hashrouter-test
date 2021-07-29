import React, { useEffect } from "react";
import { HashRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import "./App.css";

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      console.log("has hash:", window.location.hash);
    }
  }, []);

  return (
    <div className='App'>
      <HashRouter>
        <div className='App-container'>
          <nav>
            <ul>
              <li>
                <Link className='App-link' to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='App-link' to='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link className='App-link' to='/users'>
                  Users
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path='/about'>
              {!window.location.hash && <Redirect to='/#/about' />}f
              <About />
            </Route>
            <Route exact path='/users'>
              {!window.location.hash && <Redirect to='/#/users' />}f
              <Users />
            </Route>
            <Route exact path='/'>
              {!window.location.hash && <Redirect to='/#/' />}f
              <Home />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

function Home() {
  return <h2 className='App-title'>Home</h2>;
}

function About() {
  return <h2 className='App-title'>About</h2>;
}

function Users() {
  return <h2 className='App-title'>Users</h2>;
}
