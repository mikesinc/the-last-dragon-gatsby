import React from "react"
import Container from "react-bootstrap/Container"
import "../styles/Prologue.css"
import { useStaticQuery, graphql } from "gatsby"

const Prologue = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulOverall {
        prologue {
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
    <Container fluid className="prologuePage">
      <h1>Prologue</h1>
      <Container className="pageText">
        {data.contentfulOverall.prologue.content.map((item, i) => (
          <p key={i}>{item.content[0].value}</p>
        ))}
      </Container>
    </Container>
  )
}

export default Prologue
