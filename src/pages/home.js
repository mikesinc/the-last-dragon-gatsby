import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import "../styles/Home.css"
import Particles from "react-particles-js"
import { navigate } from "gatsby"

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

const Home = () => {
  const [isBottom, setIsBottom] = useState(false)


  useEffect(() => {
    document.addEventListener("scroll", () => {
      const checkBottom = window.scrollY > window.innerHeight - 100
      if (checkBottom !== isBottom) {
        setIsBottom(checkBottom)
      }
    })
  })

    return (
      <Container fluid className="homePage">
        <Particles className="particles" params={particleOptions} />
        <Container fluid className="homeFirstPage">
          <h1>The Last Dragon</h1>
          <h2>Australis Awaits...</h2>
        </Container>
        <Container fluid className="homeSecondPage">
          <Container className="blurbText">
            <h2>A Journey Through Death</h2>
            <p>A long time ago in a place far far away…</p>
            <p>
              There was once a group of adventurers travelling to the town of
              Loudwater.
            </p>
            <p>
              These adventurers had travelled long and hard, and met on the
              roads under mysterious circumstances…
            </p>
          </Container>
          {isBottom ? (
            <Button
              className="introButton"
              variant="light"
              onClick={() => navigate("/story")}
            >
              <h3>Introduction >></h3>
            </Button>
          ) : null}
        </Container>
        <Container fluid className="homeThirdPage">
          <Container className="socials">
            <a
              href="https://www.facebook.com/groups/140744109325816/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="shortIcon"
                src={require("../assets/images/fb.png")}
                height="40vw"
                alt="fb"
              ></img>
            </a>
            <a
              href="https://discord.gg/UAJ9Mg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="shortIcon"
                src={require("../assets/images/discord.png")}
                height="40vw"
                alt="ds"
              ></img>
            </a>
            <a
              href="https://github.com/mikesinc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="shortIcon"
                src="https://avatars2.githubusercontent.com/u/28840236?s=460&v=4"
                height="40vw"
                alt="git"
              ></img>
            </a>
            <h4>Website by mikesinc</h4>
          </Container>
          <Container className="roll20">
            <a
              href="https://app.roll20.net/campaigns/details/2025675/the-last-dragon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/roll20-logo.png")}
                height="30vw"
                weight="30vw"
                alt="fb"
              ></img>
            </a>
          </Container>
        </Container>
      </Container>
    )
}

export default Home
