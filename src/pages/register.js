import React, { useState, useContext } from "react"
import Container from "react-bootstrap/Container"
import "../styles/access.css"
import Particles from "react-particles-js"
import axios from "axios"
import { AuthContext } from "../context/Store"
import checkAuth from "../services/helper"
import { Link, navigate } from "gatsby"

const particleOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    size: {
      value: 1.5,
      random: true,
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      speed: 5,
    },
  },
}

const Register = () => {
  const [signInEmail, setSignInEmail] = useState("")
  const [signInPassword, setSignInPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [signInUsername, setSignInUsername] = useState("")
  const [, setIsAuthorised] = useContext(AuthContext)

  const authorise = async () => {
    const valid = await checkAuth.authorise()
    if (valid) {
      setIsAuthorised({ type: "LOGIN", payload: [true, checkAuth.userID] })
    } else {
      setIsAuthorised({ type: "LOGIN", payload: [false, void 0] })
    }
  }

  const onEmailChange = e => {
    setSignInEmail(e.target.value)
  }

  const onPasswordChange = e => {
    setSignInPassword(e.target.value)
  }

  const onConfirmPassword = e => {
    setConfirmPassword(e.target.value)
  }

  const onUsernameChange = e => {
    setSignInUsername(e.target.value)
  }

  const onSubmitSignIn = e => {
    if (e.which === 13 || !e.which) {
      if (confirmPassword !== signInPassword) {
        return alert("Passwords do not match! Please try again.")
      } else {
        axios({
          method: "post",
          url: "https://limitless-beach-12582.herokuapp.com/api/user/register",
          data: {
            email: signInEmail,
            password: signInPassword,
            username: signInUsername,
          },
        })
          .then(res => {
            if (res.status === 200) {
              window.localStorage.setItem("access_token", `Bearer ${res.data}`)
              window.localStorage.setItem("user_email", signInEmail)
              if (authorise()) {
                navigate("/confirmation")
              }
            }
          })
          .catch(err => alert(err.response.data))
      }
    }
  }

  return (
    <Container fluid className="accessPage">
      <Particles className="particles" params={particleOptions} />
      <Container
        className="mainBox"
        onKeyPress={event => onSubmitSignIn(event)}
      >
        <h1>Register!</h1>
        <fieldset className="textFields">
          <div>
            <h2>Email</h2>
            <input
              style={{
                fontFamily: "Ringbearer",
                height: "40px",
                fontSize: "16pt",
              }}
              onChange={event => onEmailChange(event)}
              type="email"
              placeholder="email@domain.com"
              name="email-address"
              id="text_field"
            />
          </div>
          <div>
            <h2>Username</h2>
            <input
              style={{
                fontFamily: "Ringbearer",
                height: "40px",
                fontSize: "16pt",
              }}
              onChange={event => onUsernameChange(event)}
              name="username"
              id="text_field"
            />
          </div>
          <div>
            <h2>Password</h2>
            <input
              style={{
                fontFamily: "Ringbearer",
                height: "40px",
                fontSize: "16pt",
              }}
              onChange={event => onPasswordChange(event)}
              type="password"
              name="password"
              id="text_field"
            />
          </div>
          <div>
            <h2>Confirm Password</h2>
            <input
              style={{
                fontFamily: "Ringbearer",
                height: "40px",
                fontSize: "16pt",
              }}
              onChange={event => onConfirmPassword(event)}
              type="password"
              id="text_field"
              name="passwordCheck"
            />
          </div>
        </fieldset>
        <fieldset className="submissions">
          <input
            style={{ fontFamily: "Ringbearer" }}
            type="submit"
            id="submit"
            value="Sign in"
            onClick={event => onSubmitSignIn(event)}
          />
          <Link
            to="/login"
            style={{ textDecoration: "none", paddingTop: "10px" }}
          >
            <input
              style={{
                fontFamily: "Ringbearer",
                background: "none",
                border: "none",
              }}
              type="submit"
              value={`Already have an account?\nLog in here`}
            />
          </Link>
        </fieldset>
      </Container>
    </Container>
  )
}

export default Register