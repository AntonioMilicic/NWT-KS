import React,{Component} from 'react';
import '../Static/Styles/css/signup.min.css'
class logInForm extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: ""
    }
  }
  handleEmailChange(event){
    this.setState({
      email: event.target.value
    });
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value.substr(0, 20)
    });
  }
  handleClearing() {
    this.setState({
      email: "",
      password: "",
    })
  }
  render(){
    return(
      <div className="sign-form">
        <div className="sign-container">
        <div className="message-container">
          <img src="/images/Signup/signUp.png" alt="sign" className="sign-image" />
          <p id="error-paragraph">Hello, I'm your personal assistant Passy. Please enter your credentials :-)</p>
        </div>
          <div className="input-sign-field">
            <input 
              type="email"
              placeholder="Email@mail.com"
              className="input-for-sign"
              value={this.state.email}
              onChange={(e)=>this.handleEmailChange(e)}
            />
            <input 
              type="password"
              placeholder="Password"
              className="input-for-sign"
              value={this.state.password}
              onChange={(e)=>this.handlePasswordChange(e)}
            />
          </div>
          <div className="btn-sign-container">
            <button 
              type="button" 
              className="btn-sign"
            >
              Log In
            </button>
            <button
              type="button"
              className="btn-sign"
              onClick={()=>this.handleClearing()}
            >
              Clear
            </button>
        </div>
      </div>
    </div>
    )
  }
}

export default logInForm;