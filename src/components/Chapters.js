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
      allContentfulOverall {
        edges {
          node {
            background {
              file {
                url
              }
            }
            chapterScreenBackground {
              file {
                url
              }
            }
          }
        }
      }
      allContentfulChapterOverviews(sort: {fields: chapterId}) {
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
      <Container fluid className="header" style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(0,0,0,1)), url(${data.allContentfulOverall.edges[0].node.background.file.url})`}}></Container>
      <Container fluid className="title">
        <h1>Campaign Chapters</h1>
      </Container>
      <Container fluid className="body" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,1)), url(${data.allContentfulOverall.edges[0].node.chapterScreenBackground.file.url})`}}>
        {data.allContentfulChapterOverviews.edges.map(
          (item, i) => {
            return (
              <ChapterCard
                key={i}
                handleMouseOver={() => showInfo(item.node.chapterNumber)}
                handleMouseLeave={() => showInfo("")}
                handleFocus={() => showInfo(item.node.chapterNumber)}
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
