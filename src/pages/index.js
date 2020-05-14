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

export default () => {
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
            These adventurers had travelled long and hard, and met on the roads
            under mysterious circumstances…
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
    </Container>
  )
}

// export default Home
