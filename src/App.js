import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
    this.handleMobileMenu = this.handleMobileMenu.bind(this)
  }
  handleMobileMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }
  render() {
    // console.log(this.state.menuOpen)
    return (
      <div>
        <header className="header">
          <h1> Start {' '} Bootstrap</h1>
          <nav className="navbar">
            <ul className="navlist">
              <li className="nav-item">SERVICES</li>
              <li className="nav-item">PORTFOLIO</li>
              <li className="nav-item">ABOUT</li>
              <li className="nav-item">TEAM</li>
              <li className="nav-item">CONTACT</li>
            </ul>
            <div className="mobile-menu"> MENU
              <img onClick={this.handleMobileMenu}
                className="hamburger"
                src="https://img.icons8.com/cotton/2x/menu.png"></img>
            </div>
            <ul className={`mobile-navlist ${this.state.menuOpen ? 'mobile-navlist-open' : null} `}>
              {/* <li className="nav-item">SERVICES</li>
              <li className="nav-item">PORTFOLIO</li>
              <li className="nav-item">ABOUT</li>
              <li className="nav-item">TEAM</li>
              <li className="nav-item">CONTACT</li> */}
            </ul>
          </nav>
        </header>
        <main className="main">
          <i className="main-cursive-text">Welcome To Our Studio!</i>
          <p className="main-text">IT'S NICE TO MEET YOU</p>
          <div className="yellow-box">TELL ME MORE</div>
        </main>
      </div>
    )
  }
}

export default App;
