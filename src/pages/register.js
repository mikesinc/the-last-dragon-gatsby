import React, { useState, useContext } from "react"
import Container from "react-bootstrap/Container"
import "../styles/access.css"
import Particles from "react-particles-js"
import axios from "axios"
import { AuthContext } from "../context/Store"
import checkAuth from "../services/helper"
import { Link, navigate } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Loading from './loading'

const particleOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#FF0000", "#000000"],
    },
    size: {
      value: 3,
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
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      speed: 1.5,
    },
  },
}

const Register = () => {
  const [signInEmail, setSignInEmail] = useState("")
  const [signInPassword, setSignInPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [signInUsername, setSignInUsername] = useState("")
  const [, setIsAuthorised] = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)

  const data = useStaticQuery(graphql`
    {
      allContentfulOverall {
        edges {
          node {
            background {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

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
      setIsLoading(true)
      if (confirmPassword !== signInPassword) {
        setIsLoading(false)
        return alert("Passwords do not match! Please try again.")
      } else {
        axios({
          method: "post",
          url: "https://limitless-beach-12582.herokuapp.com/api/user/register",
          // url: "http://localhost:3001/api/user/register",
          data: {
            email: signInEmail,
            password: signInPassword,
            username: signInUsername,
          },
        })
          .then(res => {
            if (res.status === 200) {
              window.localStorage.setItem(
                "access_token",
                `Bearer ${res.data.accessToken}`
              )
              window.localStorage.setItem(
                "refresh_token",
                `${res.data.refreshToken}`
              )
              window.localStorage.setItem("user_email", signInEmail)
              if (authorise()) {
                navigate("/confirmation")
              }
            }
            setIsLoading(false)
          })
          .catch(err => {
            alert(err.response.data)
            setIsLoading(false)
          })
          
      }
    }
  }

  if (!isLoading) {
    return (
      <Container
        fluid
        className="accessPage"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.8), rgba(255, 255, 255, 0), rgba(0,0,0,1)), url(${data.allContentfulOverall.edges[0].node.background.file.url})`,
        }}
      >
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
  } else {
    return <Loading />
  }
}

export default Register
