import React,{ Component } from 'react';
import styles from '../Static/Styles/css/header.min.css';
// eslint-disable-next-line
import  { NavLink, withRouter } from 'react-router-dom';

class headerComponent extends Component {
  constructor() {
    super ();
    this.state = {
      loginStatus: "Login",
      signStatus: "Signup"
    }
  }

  componentDidMount() {
    const loginSessionUsername = JSON.parse(sessionStorage.getItem( 'username' ));

    if(!!loginSessionUsername) {
      this.setState({
        loginStatus: "Logout",
        signStatus: "MyProducts"
      })
    }
  }

  handleSessionStatus = () => {
    if(this.state.loginStatus === "Logout") {
      sessionStorage.setItem('username', JSON.stringify(""));
      sessionStorage.setItem('userID', JSON.stringify(""));

      this.setState({
        loginStatus: "Login",
        signStatus: "Signup"
      })
      this.props.history.push('/login');
    }
  }

  handleHeaderStick = () => {
    const header = document.getElementById("header-container");
    const headerSticky = header.offsetTop;

    if (window.pageYOffset > headerSticky) {
      header.classList.add("sticky-header");
    } else {
      header.classList.remove("sticky-header");
    }
  }

  render() {
    window.onscroll = () => this.handleHeaderStick();

    return(
      <header className="header-container" id="header-container">
        <h1 className="header-title">SELL ME MORE</h1>
        <nav className="navigation-container">
          <div className="left-nav">
              <NavLink exact to = "/" activeClassName={styles.active}>Home</NavLink>
              <NavLink to = "/blog">Blog</NavLink>
              <NavLink to = "/products">Products</NavLink>
          </div>
          <div className="right-nav">
            <NavLink to = {{ pathname: `/${this.state.loginStatus}` }} onClick={()=>this.handleSessionStatus()}>
              {this.state.loginStatus}
            </NavLink>
            <NavLink to = {{ pathname: `/${this.state.signStatus}` }}>
               {this.state.signStatus}
            </NavLink>
            <NavLink to = "/cart">Cart</NavLink>
          </div>
          <div className="dropdown">
            <div className="dropdown-button">
              <img className="dropdown-image" src={'/images/Header/dropdownMenu.png'} alt="dropdown-img" />
            </div>
            <div className="dropdown-content">
              <NavLink to = {{ pathname: `/${this.state.loginStatus}` }} onClick={()=>this.handleSessionStatus()}> 
                {this.state.loginStatus} 
              </NavLink>
              <NavLink to = {{ pathname: `/${this.state.signStatus}` }}>
                {this.state.signStatus} 
              </NavLink>
              <NavLink to = "/cart">Cart</NavLink>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(headerComponent);
