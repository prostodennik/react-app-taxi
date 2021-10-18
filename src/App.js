import React from 'react';
import { Map } from './Map'
import { LogOut } from './LogOut'
import { Profile } from './Profile'
import { LogIn } from './LogIn'
import { Reg } from './Reg'
import logo from './logo.png'
import './App.css';

const PAGES = {
  map: Map,
  profile: Profile,
  logout: LogOut,
  login: LogIn,
  reg: Reg
}

class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {

    const Page = PAGES[this.state.currentPage];

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
        <Page navigateTo={this.navigateTo} />
        </section>
      </main>
    </>
    );
  }

}

export default App;
