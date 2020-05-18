import React from "react"
import Container from "react-bootstrap/Container"
import "../styles/Forum.css"
import { useStaticQuery, graphql } from "gatsby"

const Forum = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulOverall {
        edges {
          node {
            townhallBackground {
              file {
                url
              }
            }
          }
        }
      }
    }
    `)

  return (
      <Container fluid className="forumBackground">
        <Container fluid className="forumHeader" style={{background: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0,0,0,0)), url(${data.allContentfulOverall.edges[0].node.townhallBackground.file.url})`}}></Container>
        <Container fluid className="forumTitle">
          <h1>Town Hall</h1>
          <h1>Coming Soon...</h1>
        </Container>
      </Container>
  )
}

export default Forum
