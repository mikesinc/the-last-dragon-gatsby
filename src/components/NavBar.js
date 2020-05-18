import React, { useState, useEffect, useContext } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import "../styles/NavBar.css"
import { AuthContext } from "../context/Store"
import { navigate } from "gatsby"
import axios from "axios"

const NavBar = () => {
  const [isTop, setIsTop] = useState(true)
  const [authInfo] = useContext(AuthContext)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const checkTop = window.scrollY < 10
      if (checkTop !== isTop) {
        setIsTop(checkTop)
      }
    })
  })

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
            {authInfo.user === "Conquer" ? (
              <h1
                className="welcomeUser"
                style={{
                  padding: "10px",
                  paddingRight: "30px",
                  fontSize: "20px",
                }}
              >
                <a
                  style={{ textDecoration: "none", color: "ghostwhite" }}
                  href="https://app.contentful.com/spaces/8innoycs3ygc/home"
                  target="blank"
                >
                  Contentful
                </a>
              </h1>
            ) : null}
            <h1
              className="welcomeUser"
              style={{
                paddingRight: "30px",
                color: "ghostwhite",
                fontSize: "38px",
              }}
            >
              {authInfo.user}
            </h1>
            <Nav.Link
              onClick={() => {
                window.localStorage.removeItem("access_token")
                axios({
                  method: "delete",
                  url:
                    "https://limitless-beach-12582.herokuapp.com/api/user/logout",
                  // url: "http://localhost:3001/api/user/logout",
                  data: {
                    token: window.localStorage.getItem("refresh_token"),
                  },
                }).then(res => {
                  if (res.status === 200) {
                    console.log(res)
                  }
                })
                window.localStorage.removeItem("refresh_token")
                authInfo.isAuthorised = false
                authInfo.user = void 0
                navigate("/")
              }}
            >
              Sign Out
            </Nav.Link>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
            <Nav.Link onClick={() => navigate("/register")}>Register</Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
