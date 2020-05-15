import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import "../styles/Home.css"
import Particles from "react-particles-js"
import { navigate } from "gatsby"
import { graphql } from "gatsby"

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

export default ({ data }) => {
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
        <h1>{data.contentfulPageHeadings.title}</h1>
        <h2>{data.contentfulPageHeadings.subtitle}</h2>
      </Container>
      <Container fluid className="homeSecondPage">
        <Container className="blurbText">
          <h2>{data.contentfulPageHeadings.header}</h2>
          {data.contentfulPageHeadings.homePageText.content.map((item, i) => <p key={i}>{item.content[0].value}</p> )}
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

export const query = graphql`
  {
    contentfulPageHeadings {
      title
      subtitle
      header
      homePageText {
        content {
          content {
            value
          }
        }
      }
    }
  }
`
