import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import "../styles/Chapters.css"
import "../styles/common.css"
import ChapterCard from "./ChapterCard"
import ChapterInfo from "./ChapterInfo"

const Chapters = () => {
  const [chapterSelected, setChapterSelected] = useState(false)
  const [chapter, setChapter] = useState("")
  const [highlightarget, setHighlightarget] = useState("body")

  useEffect(() => {
    for (let i = 1; i < 7; i++) {
      const mover = document.querySelector(`#img${i}`)
      mover.addEventListener("mousemove", e => {
        mover.style.backgroundPositionX = -e.offsetX * 0.05 + "px"
        mover.style.backgroundPositionY = -e.offsetY * 0.05 + "px"
      })
    }
  })

  const showInfo = value => {
    if (chapter === value) {
      setChapter("")
      setChapterSelected(false)
    } else {
      setChapter(value)
      setChapterSelected(true)
    }
  }

  const setmap = chaphover => {
    if (window.innerWidth > 809 && window.innerHeight > 415) {
      setHighlightarget(chaphover)
    }
  }

  return (
      <Container fluid className="background">
        <Container fluid className="header"></Container>
        <Container fluid className="title">
          <h1>Campaign Chapters</h1>
        </Container>
        <div
          className="body1"
          style={{ backgroundPosition: "-999px -999px", position: "absolute" }}
        ></div>
        <div
          className="body2"
          style={{ backgroundPosition: "-999px -999px", position: "absolute" }}
        ></div>
        <div
          className="body3"
          style={{ backgroundPosition: "-999px -999px", position: "absolute" }}
        ></div>
        <div
          className="body4"
          style={{ backgroundPosition: "-999px -999px", position: "absolute" }}
        ></div>
        <div
          className="body5"
          style={{ backgroundPosition: "-999px -999px", position: "absolute" }}
        ></div>
        <div
          className="body6"
          style={{ backgroundPosition: "-999px -999px", position: "absolute" }}
        ></div>
        <Container fluid className={highlightarget}>
          <div className="leftChapDraw">
            <div className="drawWrapperL">
              <div
                className="cardFrameL"
                id="img1"
                style={{
                  backgroundImage: `url(${require("../assets/images/chap1.jpg")}`,
                }}
              >
                <ChapterCard
                  handleMouseOver={() => setmap("body1")}
                  handleMouseLeave={() => setmap("body")}
                  handleClick={() => showInfo("One")}
                  chapter="One"
                  selected={chapter}
                  title="The Prince of Plagues"
                />
              </div>
              <h2>Chapter One</h2>
            </div>
            <div className="drawWrapperL">
              <div
                className="cardFrameL"
                id="img2"
                style={{
                  backgroundImage: `url(${require("../assets/images/chap2.jpg")}`,
                }}
              >
                <ChapterCard
                  handleMouseOver={() => setmap("body2")}
                  handleMouseLeave={() => setmap("body")}
                  handleClick={() => showInfo("Two")}
                  chapter="Two"
                  selected={chapter}
                  title="Sordid Sands"
                />
              </div>
              <h2>Chapter Two</h2>
            </div>
            <div className="drawWrapperL">
              <div
                className="cardFrameL"
                id="img3"
                style={{
                  backgroundImage: `url(${require("../assets/images/chap3.jpg")}`,
                }}
              >
                <ChapterCard
                  handleMouseOver={() => setmap("body3")}
                  handleMouseLeave={() => setmap("body")}
                  handleClick={() => showInfo("Three")}
                  chapter="Three"
                  selected={chapter}
                  title="Tradition and Temperament"
                />
              </div>
              <h2>Chapter Three</h2>
            </div>
          </div>
          <div className="rightChapDraw">
            <div className="drawWrapperR">
              <h2>Chapter Four</h2>
              <div
                className="cardFrameR"
                id="img4"
                style={{
                  backgroundImage: `url(${require("../assets/images/chap4.jpg")}`,
                }}
              >
                <ChapterCard
                  handleMouseOver={() => setmap("body4")}
                  handleMouseLeave={() => setmap("body")}
                  handleClick={() => showInfo("Four")}
                  chapter="Four"
                  selected={chapter}
                  title="Bastion of the North"
                />
              </div>
            </div>
            <div className="drawWrapperR">
              <h2>Chapter Five</h2>
              <div
                className="cardFrameR"
                id="img5"
                style={{
                  backgroundImage: `url(${require("../assets/images/chap5.jpg")}`,
                }}
              >
                <ChapterCard
                  handleMouseOver={() => setmap("body5")}
                  handleMouseLeave={() => setmap("body")}
                  handleClick={() => showInfo("Five")}
                  chapter="Five"
                  selected={chapter}
                  title="The Lost City"
                />
              </div>
            </div>
            <div className="drawWrapperR">
              <h2>Chapter Six</h2>
              <div
                className="cardFrameR"
                id="img6"
                style={{
                  backgroundImage: `url(${require("../assets/images/chap6.jpg")}`,
                }}
              >
                <ChapterCard
                  handleMouseOver={() => setmap("body6")}
                  handleMouseLeave={() => setmap("body")}
                  handleClick={() => showInfo("Six")}
                  chapter="Six"
                  selected={chapter}
                  title="The Badlands"
                />
              </div>
            </div>
          </div>
          {chapterSelected ? (
            <div className="chapInfo">
              <ChapterInfo chapter={chapter} />
            </div>
          ) : null}
        </Container>
      </Container>
  )
}

export default Chapters
