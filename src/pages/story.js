import React from "react"
import Container from "react-bootstrap/Container"
import "../styles/Prologue.css"
import { useStaticQuery, graphql } from "gatsby"

const Story = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulOverall {
        backstory {
          content {
            content {
              value
            }
          }
        }
      }
    }
  `)
  return (
    <Container fluid className="storyPage">
      <h1>The world of Australis..</h1>
      <Container fluid className="pageText">
      {data.contentfulOverall.backstory.content.map((item, i) => (
          <p key={i}>{item.content[0].value}</p>
        ))}
      </Container>
    </Container>
  )
}

export default Story
