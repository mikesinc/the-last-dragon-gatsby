import React from "react"
import Container from "react-bootstrap/Container"
import "../styles/Characters.css"
import "../styles/common.css"
import CharacterCard from "./CharacterCard"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Characters = () => {
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
          }
        }
      }
      allContentfulCharacters(sort: {fields: stats___charid}) {
        edges {
          node {
            name
            childContentfulCharactersStatsJsonNode {
              bio
              charClass
              currentHP
              charid
              race
            }
            cardImage {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container fluid className="background">
      <Container fluid className="header" style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(0,0,0,1)), url(${data.allContentfulOverall.edges[0].node.background.file.url})`}}></Container>
      <Container fluid className="title">
        <h1>Characters of Australis</h1>
      </Container>
      <Container fluid className="charactersBody">
        <h2>Player Party</h2>
        <Container fluid className="characterList">
          {data.allContentfulCharacters.edges.map(character => {
            const characterArray =
              character.node.childContentfulCharactersStatsJsonNode
            if (characterArray.currentHP > 0) {
              return (
                <Link
                  key={`${characterArray.charid}`}
                  to={`/user/characterSheet/${characterArray.charid}`}
                  style={{ textDecoration: "none", color: "ghostwhite" }}
                >
                  <CharacterCard
                    image={`${character.node.cardImage.fluid.src}`}
                    name={`${character.node.name}`}
                    race={`${characterArray.race}`}
                    gameClass={`${characterArray.charClass}`}
                    bio={`${characterArray.bio}`}
                  />
                </Link>
              )
            } else {
              return null
            }
          })}
        </Container>
      </Container>
      <Container fluid className="graveBody">
        <h2>Graveyard</h2>
        <Container fluid className="characterList">
          {data.allContentfulCharacters.edges.map(character => {
            const characterArray =
              character.node.childContentfulCharactersStatsJsonNode
            if (characterArray.currentHP === 0) {
              return (
                <Link
                  key={`${characterArray.charid}`}
                  to={`/user/characterSheet/${characterArray.charid}`}
                  style={{ textDecoration: "none", color: "ghostwhite" }}
                >
                  <CharacterCard
                    image={`${character.node.cardImage.fluid.src}`}
                    name={`${character.node.name}`}
                    race={`${characterArray.race}`}
                    gameClass={`${characterArray.charClass}`}
                    bio={`${characterArray.bio}`}
                  />
                </Link>
              )
            } else {
              return null
            }
          })}
        </Container>
      </Container>
    </Container>
  )
}

export default Characters
