import React from 'react';
import { Map } from './Map'
import { LogOut } from './LogOut'
import { ProfileWithAuth } from './Profile'
import { LogInWithAuth } from './LogIn'
import { Reg } from './Reg'
import {withAuth} from './AuthContext'
import logo from './logo.png'
import './App.css';

const PAGES = {
  map: (props) => <Map { ...props }/>,
  profile: (props) => <ProfileWithAuth{ ...props }/>,
  logout: (props) => <LogOut{ ...props }/>,
  login: (props) => <LogInWithAuth{ ...props }/>,
  reg: (props) => <Reg{ ...props }/>
}

class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn){
      this.setState({ currentPage: page });
    }else{
      this.setState({ currentPage: "login"})
    }
  };

  render() {
    return (<>
      <header className="header">
        <div className="logo">
          <img className="logo__pic" src={logo} alt={"logo"}/> 
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <button className="nav__btn" onClick = {() => {this.navigateTo("map")}}>Карта</button>
            </li>
            <li className="nav__item">
            <button className="nav__btn" onClick = {() => {this.navigateTo("profile")}}>Профиль</button>
            </li>
            <li className="nav__item">
              <button className="nav__btn" onClick = {() => {this.navigateTo("login")}}>Выйти</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
        {PAGES[this.state.currentPage]({navigate: this.navigateTo})}
        </section>
      </main>
    </>
    );
  }

}

export default withAuth(App);
