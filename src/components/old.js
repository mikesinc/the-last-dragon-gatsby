import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import "../styles/chapterSummary.css"
import Loading from "../pages/loading"

const ChapterSummary = () => {
  const [chapter, setChapter] = useState()
  const [partText, setPartText] = useState([])
  const [noMatch, setNoMatch] = useState(false)
  const [chapterEnd, setChapterEnd] = useState(false)
  const [chapterStart, setChapterStart] = useState(false)
  const [storyEnd, setStoryEnd] = useState(false)
  const [storyStart, setStoryStart] = useState(false)
  const [lastPartRef, setLastPartRef] = useState()
  const [isBottom, setIsBottom] = useState(false)

  const chapArray = ["One", "Two", "Three", "Four", "Five", "Six"]

  let partNum = []
  const chapStr = []
  window.location.pathname.split("y/")[1].split("").forEach(letter => {
    if (Number(letter) || letter === "0") {
      partNum.push(Number(letter))
    } else {
      chapStr.push(letter)
    }
  })

  let part = Number(partNum.join(""))
  const chapString = chapStr.join("")

  const fetchChapters = async () => {
    const getChapters = await require("../ChapterText.json")
    if (!getChapters.chapterSummaries[chapter - 1].Parts[part - 1]) {
      if (!(chapter + 1)) {
        setNoMatch(true)
      }
    } else {
      setPartText(
        getChapters.chapterSummaries[chapter - 1].Parts[part - 1].Text.join(
          "\n\n"
        )
      )
    }
  }

  useEffect(() => {
    switch (chapString) {
      case "One":
        part === 2 ? setChapterEnd(true) : setChapterEnd(false)
        part === 1 ? setStoryStart(true) : setStoryStart(false)
        setChapter(1)
        break
      case "Two":
        part === 1 ? setChapterStart(true) : setChapterStart(false)
        part === 8 ? setChapterEnd(true) : setChapterEnd(false)
        setLastPartRef(2)
        setChapter(2)
        break
      case "Three":
        part === 1 ? setChapterStart(true) : setChapterStart(false)
        part === 6 ? setChapterEnd(true) : setChapterEnd(false)
        setLastPartRef(8)
        setChapter(3)
        break
      case "Four":
        part === 1 ? setChapterStart(true) : setChapterStart(false)
        part === 11 ? setChapterEnd(true) : setChapterEnd(false)
        setLastPartRef(6)
        setChapter(4)
        break
      case "Five":
        part === 1 ? setChapterStart(true) : setChapterStart(false)
        part === 10 ? setChapterEnd(true) : setChapterEnd(false)
        setLastPartRef(11)
        setChapter(5)
        break
      case "Six":
        part === 1 ? setChapterStart(true) : setChapterStart(false)
        if (part === 4) {
          setStoryEnd(true)
          setChapterEnd(true)
        } else {
          setStoryEnd(false)
          setChapterEnd(false)
        }
        setLastPartRef(10)
        setChapter(6)
        break
      default:
        return
    }
    if (chapter) {
      fetchChapters()
    }
    document.addEventListener("scroll", () => {
      const checkBottom = window.scrollY > window.innerHeight - 100
      checkBottom !== isBottom
        ? setIsBottom(checkBottom)
        : setIsBottom(checkBottom)
    })
    // eslint-disable-next-line
  }, [chapter, partText, chapterEnd, storyEnd, noMatch, chapString, part])

  if (!chapter || !part) {
    return <Loading />
  } else {
    return (
      <Container
        fluid
        className="chapSummaryBackground"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(${require(`../assets/images/chap${chapter}back.jpg`)})`,
        }}
      >
        <Container fluid className="chapPart">
          <h1>
            Ch. {chapter} | Pt. {part}
          </h1>
        </Container>
        <Container className="PartBody">
          <p>{partText}</p>
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
          {storyEnd ? (
            <Link to={`/user/chapterSummary/${chapString}${part - 1}`}>
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
          ) : storyStart ? (
            <Link to={`/user/chapterSummary/${chapString}${part + 1}`}>
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
          ) : chapterEnd ? (
            <>
              <Link to={`/user/chapterSummary/${chapArray[chapter]}${1}`}>
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
              <Link to={`/user/chapterSummary/${chapString}${part - 1}`}>
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
          ) : chapterStart ? (
            <>
              <Link to={`/user/chapterSummary/${chapString}${part + 1}`}>
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
                to={`/user/chapterSummary/${chapArray[chapter - 2]}${lastPartRef}`}
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
          ) : !chapterEnd && !chapterStart ? (
            <>
              <Link to={`/user/chapterSummary/${chapString}${part - 1}`}>
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
              <Link to={`/user/chapterSummary/${chapString}${part + 1}`}>
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
}

export default ChapterSummary
