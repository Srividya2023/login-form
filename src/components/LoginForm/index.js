// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',

    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  setCookie = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    //console.log(userName, password)
    const userDetails = {username: userName, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    console.log(response)
    const data = await response.json()

    console.log(data)

    if (response.ok === true) {
      this.setCookie(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userName, password, showSubmitError, errorMsg} = this.state
    return (
      <div className="background-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-img-large"
        />

        <div className="login-container">
          <div className="interface-imgs-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-img"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="website-login-img-small"
            />
          </div>
          <form onSubmit={this.submitForm} className="submit-form">
            <div className="username-input-container">
              <label htmlFor="userName" className="username">
                USERNAME
              </label>

              <br />
              <input
                type="text"
                id="userName"
                placeholder="Username"
                className="username-input"
                onChange={this.onChangeUserName}
                value={userName}
              />
            </div>

            <div className="password-input-container">
              <label htmlFor="passWord" className="password">
                PASSWORD
              </label>
              <br />
              <input
                type="password"
                id="passWord"
                placeholder="Password"
                className="password-input"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
            {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
