import React from 'react';
import { Map } from './Map'
import { ProfileWithAuth } from './Profile'
import { LogInWithAuth } from './LogIn'
import { logOut } from './actions';
import { Reg } from './Reg'
import logo from './logo.png'
import { PrivateRoute } from './PrivateRoute';
import './App.css';
import {connect} from 'react-redux'
import { Switch, Route, Link } from "react-router-dom";




class App extends React.Component {
  onLogout = () => {
    this.props.logOut();
  }
  render() {
    return (<>
      <header className="header">
        <div className="logo">
          <img className="logo__pic" src={logo} alt={"logo"}/> 
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__btn" to="/map">Карта</Link>
            </li>
            <li className="nav__item">
            <Link className="nav__btn" to="/profile">Профиль</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__btn" onClick = {this.onLogout} to="/">Выйти</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
        <Switch>
        <Switch>
              <Route exact path="/" component={LogInWithAuth} />
              <Route exact path="/reg" component={Reg} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={ProfileWithAuth} />
            </Switch>
        </Switch>
        </section>
      </main>
    </>
    );
  }

}

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn }),
  { logOut }
) (App);
