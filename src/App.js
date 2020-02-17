import React from "react";
import "./App.css";
import "./App2.css";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      isOpen:false
    }
  }
  render(){
  return (
    <div>
      <header className="main-header-container">
        <nav>
          <div className="nav-container">
            <a className="title-link">Start Bootstrap</a>
            <ul className="links-container">
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>

            <div className="menu-toggle" onClick={()=>{this.setState({isOpen:!this.state.isOpen})}}>
            <p>MENU</p>
            <img width="12px" height="10px" src="https://i.ya-webdesign.com/images/hamburger-menu-icon-png-white-6.png"/>
            </div>
          </div>
        </nav>
      </header>
        <menu className={this.state.isOpen? "menu-open": ""}>
          <p>SERVICES</p>
          <p>PORTFOLIO</p>
          <p>ABOUT</p>
          <p>TEAM</p>
          <p>CONTACT</p>
        </menu>
        <div className="text-container">
          <div className="welcome-text-one">Welcome To Our Studio!</div>
          <div className="welcome-text-two">IT'S NICE TO MEET YOU</div>
          <a className="tell-more-button">TELL ME MORE</a>
        </div>
      <section className="section-container">

      </section>
    </div>
  );
}
}

export default App;
