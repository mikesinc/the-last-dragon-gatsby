import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import "../styles/DocumentsModal.css"
import { useStaticQuery, graphql } from "gatsby"

const DocumentsModal = ({ chapter, show, onHide, chapterId }) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulChapterSummaries(sort: { fields: part }) {
        edges {
          node {
            chapter
            part
            childContentfulChapterSummariesPartSummaryRichTextNode {
              childContentfulRichText {
                html
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Modal
      show={show}
      onHide={() => onHide()}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>Chapter {chapter}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data.allContentfulChapterSummaries.edges.map((item, i) => {
          if (item.node.chapter === chapterId) {
            return (
              <Link
                key={i}
                to={`/user/chapterSummary/${chapterId}/${item.node.part}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <h2 style={{ cursor: "pointer" }}>Part {item.node.part} </h2>
              </Link>
            )
          }
          return null
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DocumentsModal
