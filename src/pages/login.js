import React, { useState, useContext, useEffect } from "react"
import Container from "react-bootstrap/Container"
import "../styles/access.css"
import Particles from "react-particles-js"
import axios from "axios"
import { AuthContext } from "../context/Store"
import checkAuth from "../services/helper"
import { navigate, Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Loading from "./loading"

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

const Login = ({ location }) => {
  const [signInEmail, setSignInEmail] = useState("")
  const [signInPassword, setSignInPassword] = useState("")
  const [redirect, setRedirect] = useState("/")
  const [, setAuthInfo] = useContext(AuthContext)
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

  useEffect(() => {
    const from = location.state.referrer
    switch (from) {
      case "/story":
        setRedirect("/story")
        break
      case "/prologue":
        setRedirect("/prologue")
        break
      case "/user/chapters":
        setRedirect("/user/chapters")
        break
      case "/user/forum":
        setRedirect("/user/forum")
        break
      case "/user/characters":
        setRedirect("/user/characters")
        break
      default:
        setRedirect("/")
        break
    }
    // eslint-disable-next-line
  }, [])

  const authorise = async () => {
    const valid = await checkAuth.authorise()
    if (valid) {
      setAuthInfo({ type: "LOGIN", payload: [true, checkAuth.userID] })
      return true
    } else {
      setAuthInfo({ type: "LOGIN", payload: [false, void 0] })
    }
  }

  const onEmailChange = e => {
    setSignInEmail(e.target.value)
  }

  const onPasswordChange = e => {
    setSignInPassword(e.target.value)
  }

  const onSubmitSignIn = e => {
    if (e.which === 13 || !e.which) {
      setIsLoading(true)
      axios({
        method: "post",
        url: "https://limitless-beach-12582.herokuapp.com/api/user/login",
        // url: "http://localhost:3001/api/user/login",
        data: {
          email: signInEmail,
          password: signInPassword,
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
            if (authorise()) {
              navigate(redirect)
            }
          }
          setIsLoading(false)
        })
        .catch(err => {
          if (err.response.status === 303) {
            window.localStorage.setItem("user_email", signInEmail)
            navigate("/confirmation")
          } else {
            alert(err.response.data)
            setIsLoading(false)
          }
        })
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
          fluid
          className="mainBox"
          onKeyPress={event => onSubmitSignIn(event)}
        >
          <h1>Sign In</h1>
          <fieldset className="textFields">
            <div>
              <h2>Email</h2>
              <input
                style={{ fontFamily: "Ringbearer" }}
                onChange={event => onEmailChange(event)}
                type="email"
                name="email-address"
                id="text_field"
              />
            </div>
            <div>
              <h2>Password</h2>
              <input
                style={{ fontFamily: "Ringbearer" }}
                onChange={event => onPasswordChange(event)}
                type="password"
                name="password"
                id="text_field"
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
              to="/register"
              id="alternateOption"
              style={{ textDecoration: "none" }}
            >
              <input
                style={{
                  fontFamily: "Ringbearer",
                  background: "none",
                  border: "none",
                }}
                type="submit"
                value="Register"
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

export default Login
