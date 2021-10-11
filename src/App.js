import React from 'react';
import { Map } from './Map'
import { LogOut } from './LogOut'
import { Profile } from './Profile'
import { LogIn } from './LogIn'
import { Reg } from './Reg'
import './App.css';

const PAGES = {
  map: <Map/>,
  profile: <Profile/>,
  logout: <LogOut/>,
  login: <LogIn/>,
  reg: <Reg/>
}

class App extends React.Component {
  state = { currentPage: "map" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (<>
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={() => { this.navigateTo("map"); }}>
                Карта
              </button>
            </li>
            <li>
              <button onClick={() => { this.navigateTo("profile"); }}>
                Профиль
              </button>
            </li>
            <li>
              <button onClick={() => { this.navigateTo("logout"); }}>
                Выйти
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          {PAGES[this.state.currentPage]}
        </section>
      </main>
    </>
    );
  }

}

export default App;
