import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import "../styles/Chapters.css"
import "../styles/common.css"
import ChapterCard from "./ChapterCard"
import { useStaticQuery, graphql } from "gatsby"

const Chapters = () => {
  const [chapter, setChapter] = useState("")

  const data = useStaticQuery(graphql`
    {
      allContentfulChapterOverviews {
        edges {
          node {
            chapterOverviews {
              chapters {
                banner
                chapter
                brief
                id
                title
              }
            }
          }
        }
      }
    }
  `)

  const showInfo = value => {
      setChapter(value)
  }

  return (
    <Container fluid className="background">
      <Container fluid className="header"></Container>
      <Container fluid className="title">
        <h1>Campaign Chapters</h1>
      </Container>
      <Container fluid className="body">
        {data.allContentfulChapterOverviews.edges[0].node.chapterOverviews.chapters.map(
          item => {
            return (
              <ChapterCard
                handleClick={() => showInfo(item.chapter)}
                chapter={item.chapter}
                background={item.banner}
                selected={chapter}
                title={item.title}
                brief={item.brief}
              />
            )
          }
        )}
      </Container>
    </Container>
  )
}

export default Chapters
