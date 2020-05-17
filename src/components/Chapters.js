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
      allContentfulChapterOverviews(sort: {fields: id}) {
        edges {
          node {
            title
            chapterId
            chapterNumber
            brief {
              childContentfulRichText {
                html
              }
            }
            chapterImage {
              fluid {
                src
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
        {data.allContentfulChapterOverviews.edges.map(
          (item, i) => {
            return (
              <ChapterCard
                key={i}
                handleClick={() => showInfo(item.node.chapterNumber)}
                chapter={item.node.chapterNumber}
                background={item.node.chapterImage.fluid.src}
                selected={chapter}
                title={item.node.title}
                brief={item.node.brief.childContentfulRichText}
                chapterId={item.node.chapterId}
              />
            )
          }
        )}
      </Container>
    </Container>
  )
}

export default Chapters
