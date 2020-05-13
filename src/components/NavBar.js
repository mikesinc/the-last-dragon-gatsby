import React, { useState, useEffect, useContext } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import "../styles/NavBar.css"
import { AuthContext } from "../context/Store"
import { navigate } from "gatsby"
import checkAuth from '../services/helper'
import Loading from '../pages/loading'


const NavBar = () => {
  const [isTop, setIsTop] = useState(true)
  const [isChecking, setIsChecking] = useState(true)
  const [authInfo, setIsAuthorised] = useContext(AuthContext)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const checkTop = window.scrollY < 10
      if (checkTop !== isTop) {
        setIsTop(checkTop)
      }
    })
  })

  useEffect(() => {
    const authorise = async () => {
      const valid = await checkAuth.authorise()
      if (valid !== null) {
        setIsChecking(false)
        if (valid) {
          setIsAuthorised({ type: "LOGIN", payload: [true, checkAuth.userID] })
        } else {
          setIsAuthorised({ type: "LOGIN", payload: [false, void 0] })
        }
      }
    }
    authorise()
    // eslint-disable-next-line
  }, [])

  if (isChecking) {
    return <Loading />
  } else {
    return (
      <Navbar
        fixed="top"
        bg={isTop ? "" : "darker"}
        variant="dark"
        collapseonselect="true"
        expand="lg"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="toggled" id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              style={{ paddingRight: "40px" }}
              onClick={() => navigate("/")}
            >
              The Last Dragon
            </Nav.Link>
            <NavDropdown
              style={{ paddingRight: "30px" }}
              title="Story"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => navigate("/story")}>
                Background
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/prologue")}>
                Prologue
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate("/user/chapters")}>
                Chapters
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/user/forum")}>
                Town Hall
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => navigate("/user/characters")}>
              Characters
            </Nav.Link>
          </Nav>
          {authInfo.isAuthorised ? (
            <Nav>
              <h1
                className="welcomeUser"
                style={{
                  paddingRight: "30px",
                  color: "ghostwhite",
                  fontSize: "32pt",
                }}
              >
                {authInfo.user}
              </h1>
              <Nav.Link
                onClick={() => {
                  window.localStorage.removeItem("access_token")
                  navigate("/")
                  window.location.reload()
                }}
              >
                Sign Out
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
              <Nav.Link onClick={() => navigate("/register")}>
                Register
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
