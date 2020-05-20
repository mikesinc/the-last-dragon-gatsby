import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import "../styles/Home.css"
import Particles from "react-particles-js"
import { navigate } from "gatsby"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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

export default ({ data }) => {
  return (
    <Container fluid className="homePage">
      <Particles className="particles" params={particleOptions} />
      <Container
        fluid
        className="homeFirstPage"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.8),rgba(255, 255, 255, 0), rgba(0,0,0,1)), url(${data.allContentfulOverall.edges[0].node.background.file.url})`,
        }}
      >
        <h1>{data.allContentfulOverall.edges[0].node.websiteTitle}</h1>
        <h2>{data.allContentfulOverall.edges[0].node.websiteSubtitle}</h2>
      </Container>
      <Container
        fluid
        className="homeSecondPage"
        style={{
          background: `linear-gradient(rgba(0,0,0,1), rgba(255, 255, 255, 0)),url(${data.allContentfulOverall.edges[0].node.homepageBackground2.file.url})`,
        }}
      >
        <Container className="blurbText">
          <h2>{data.allContentfulOverall.edges[0].node.teaserHeader}</h2>
          {documentToReactComponents(
            data.allContentfulOverall.edges[0].node.teaserSubtext.json
          )}
        </Container>
        <Button className="introButton" onClick={() => navigate("/story")}>
          <h3>
            Introduction{" "}
            <img
              src={require("../assets/images/arrows.png")}
              alt="arrow"
              width="30px"
            ></img>
          </h3>
        </Button>
      </Container>
    </Container>
  )
}

export const query = graphql`
  {
    allContentfulOverall {
      edges {
        node {
          homepageBackground2 {
            file {
              url
            }
          }
          background {
            file {
              url
            }
          }
          websiteSubtitle
          websiteTitle
          teaserHeader
          teaserSubtext {
            json
          }
        }
      }
    }
  }
`
