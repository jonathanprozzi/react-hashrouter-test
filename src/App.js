import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import IpfsRouter from "ipfs-react-router";
import "./App.css";

export default function App() {
  return (
    <div className='App'>
      <IpfsRouter>
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
              <About />
            </Route>
            <Route exact path='/users'>
              <Users />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </IpfsRouter>
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
