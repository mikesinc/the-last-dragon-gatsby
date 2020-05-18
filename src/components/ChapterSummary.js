import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import "../styles/ChapterSummary.css"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const ChapterSummary = () => {
  const [partNumbers, setPartNumbers] = useState(0)
  const [prevChapPartNumbers, setPrevChapPartNumbers] = useState(0)
  const [position, setPosition] = useState("")
  const [isBottom, setIsBottom] = useState(false)
  const [partText, setPartText] = useState("")
  const [partBackground, setPartBackground] = useState(0)

  const data = useStaticQuery(graphql`
    {
      allContentfulChapterOverviews(sort: { fields: chapterId }) {
        edges {
          node {
            title
            chapterId
            chapterNumber
          }
        }
      }
      allContentfulChapterSummaries(sort: { fields: [chapter, part] }) {
        edges {
          node {
            chapter
            partBackgroundImage {
              file {
                url
              }
            }
            part
            partSummary {
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
        <img alt={node.data.target.fields.title["en-US"]} width="100%" style={{marginTop: '50px'}} src={`https:${node.data.target.fields.file["en-US"].url}`} />
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h2 className="partHeader">{children}</h2>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="partCaption">{children}</h6>
      ),
    },
    renderMark: {},
  }

  let chapters = data.allContentfulChapterOverviews.edges.length
  let chapter = Number(window.location.pathname.split("/")[3])
  let part = Number(window.location.pathname.split("/")[4])

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const checkBottom = window.scrollY > window.innerHeight - 100
      checkBottom !== isBottom
        ? setIsBottom(checkBottom)
        : setIsBottom(checkBottom)
    })
  })

  useEffect(() => {
    setPrevChapPartNumbers(
      data.allContentfulChapterSummaries.edges.filter(page => {
        if (page.node.chapter === chapter - 1) {
          return page.node
        }
        return null
      }).length
    )

    setPartBackground(
      data.allContentfulChapterSummaries.edges.filter(page => {
        if (page.node.chapter === chapter && page.node.part === part) {
          return page.node
        }
        return null
      })[0].node.partBackgroundImage.file.url
    )

    setPartNumbers(
      data.allContentfulChapterSummaries.edges.filter(page => {
        if (page.node.chapter === chapter) {
          return page.node
        }
        return null
      }).length
    )

    setPartText(
      data.allContentfulChapterSummaries.edges.filter(page => {
        if (page.node.chapter === chapter && page.node.part === part) {
          return page.node
        }
        return null
      })[0].node.partSummary.json
    )

    switch (part % partNumbers) {
      case 1:
        setPosition("start")
        break
      case 0:
        setPosition("end")
        break
      default:
        setPosition("between")
        break
    }
    //eslint-disable-next-line
  }, [chapter, part, partNumbers, position])

  return (
    <Container
      fluid
      className="chapSummaryBackground"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(${partBackground})`,
      }}
    >
      <Container fluid className="chapPart">
        <h1>
          Ch. {chapter} | Pt. {part}
        </h1>
      </Container>
      <Container className="PartBody">
        {/* <div dangerouslySetInnerHTML={{ __html: partText.html }} /> */}
        {(documentToReactComponents(partText, options))}
        {isBottom ? (
          <Button
            className="topButton"
            variant="light"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Container style={{ display: "flex" }}>
              <h3>Top</h3>
              <img alt="hand" src={require("../assets/images/top.png")}></img>
            </Container>
          </Button>
        ) : null}
        {chapter === chapters && position === "end" ? (
          <Link to={`/user/chapterSummary/${chapter}/${part - 1}`}>
            <Button
              className="prevButton"
              variant="light"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Container style={{ display: "flex" }}>
                <img
                  alt="hand"
                  src={require("../assets/images/prev.png")}
                ></img>
                <h3>Previous</h3>
              </Container>
            </Button>
          </Link>
        ) : chapter === 1 && position === "start" ? (
          <Link to={`/user/chapterSummary/${chapter}/${part + 1}`}>
            <Button
              className="nextButton"
              variant="light"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Container style={{ display: "flex" }}>
                <h3>Next</h3>
                <img
                  alt="hand"
                  src={require("../assets/images/next.png")}
                ></img>
              </Container>
            </Button>
          </Link>
        ) : position === "end" ? (
          <>
            <Link to={`/user/chapterSummary/${chapter + 1}/${1}`}>
              <Button
                className="nextButton"
                variant="light"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Container style={{ display: "flex" }}>
                  <h3>Next Chapter</h3>
                  <img
                    alt="hand"
                    src={require("../assets/images/next.png")}
                  ></img>
                </Container>
              </Button>
            </Link>
            <Link to={`/user/chapterSummary/${chapter}/${part - 1}`}>
              <Button
                className="prevButton"
                variant="light"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Container style={{ display: "flex" }}>
                  <img
                    alt="hand"
                    src={require("../assets/images/prev.png")}
                  ></img>
                  <h3>Previous</h3>
                </Container>
              </Button>
            </Link>
          </>
        ) : position === "start" ? (
          <>
            <Link to={`/user/chapterSummary/${chapter}/${part + 1}`}>
              <Button
                className="nextButton"
                variant="light"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Container style={{ display: "flex" }}>
                  <h3>Next</h3>
                  <img
                    alt="hand"
                    src={require("../assets/images/next.png")}
                  ></img>
                </Container>
              </Button>
            </Link>
            <Link
              to={`/user/chapterSummary/${chapter - 1}/${prevChapPartNumbers}`}
            >
              <Button
                className="prevButton"
                variant="light"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Container style={{ display: "flex" }}>
                  <img
                    alt="hand"
                    src={require("../assets/images/prev.png")}
                  ></img>
                  <h3>Previous Chapter</h3>
                </Container>
              </Button>
            </Link>
          </>
        ) : position === "between" ? (
          <>
            <Link to={`/user/chapterSummary/${chapter}/${part - 1}`}>
              <Button
                className="prevButton"
                variant="light"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Container style={{ display: "flex" }}>
                  <img
                    alt="hand"
                    src={require("../assets/images/prev.png")}
                  ></img>
                  <h3>Previous</h3>
                </Container>
              </Button>
            </Link>
            <Link to={`/user/chapterSummary/${chapter}/${part + 1}`}>
              <Button
                className="nextButton"
                variant="light"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Container style={{ display: "flex" }}>
                  <h3>Next</h3>
                  <img
                    alt="hand"
                    src={require("../assets/images/next.png")}
                  ></img>
                </Container>
              </Button>
            </Link>
          </>
        ) : null}
      </Container>
    </Container>
  )
}

export default ChapterSummary
