import React from "react"
import Container from "react-bootstrap/Container"
import "../styles/Prologue.css"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const Story = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulOverall {
        edges {
          node {
            backstory {
              json
            }
            backstoryBackground {
              file {
                url
              }
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
          alt={node.data.target.fields.title["en-US"]}
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
    <Container fluid className="storyPage" style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(0,0,0,1)), url(${data.allContentfulOverall.edges[0].node.backstoryBackground.file.url})`}}>
      <h1>The world of Australis..</h1>
      <Container fluid className="pageText">
        {documentToReactComponents(
          data.allContentfulOverall.edges[0].node.backstory.json,
          options
        )}
      </Container>
    </Container>
  )
}

export default Story
