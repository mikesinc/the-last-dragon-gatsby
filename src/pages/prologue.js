import React from "react"
import Container from "react-bootstrap/Container"
import "../styles/Prologue.css"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const Prologue = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulOverall {
        edges {
          node {
            prologue {
              json
            }
          }
        }
      }
    }
  `)

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <img
          width="100%"
          style={{ marginTop: "50px" }}
          src={`https:${node.data.target.fields.file["en-US"].url}`}
        />
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h2 className="partHeader">{children}</h2>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="partCaption">{children}</h6>
      ),
    },
  }

  return (
    <Container fluid className="prologuePage">
      <h1>Prologue</h1>
      <Container className="pageText">
      {documentToReactComponents(data.allContentfulOverall.edges[0].node.prologue.json, options)}
      </Container>
      
    </Container>
  )
}

export default Prologue
