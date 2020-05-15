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
      allContentfulCharacters {
        edges {
          node {
            characterCardDetails {
              characters {
                alignment
                attacking {
                  name
                  type
                }
                attributes {
                  chari
                  cons
                  dex
                  intel
                  str
                  wis
                }
                background
                backdrop
                bio
                bonds
                card
                classAbility
                currentHP
                charClass
                flaws
                ideals
                lvl
                maxHP
                name
                other {
                  proficiency
                  type
                }
                png
                personality
                race
                stats {
                  initiative
                  speed
                }
                toolkit {
                  att
                  tool
                }
                id
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container fluid className="background">
      <Container fluid className="header"></Container>
      <Container fluid className="title">
        <h1>Characters of Australis</h1>
      </Container>
      <Container fluid className="charactersBody">
        <h2>Player Party</h2>
        <Container fluid className="characterList">
          {data.allContentfulCharacters.edges[0].node.characterCardDetails.characters.map(
            character => {
              if (character.currentHP > 0) {
                return (
                  <Link
                    key={`${character.id}`}
                    to={`/user/characterSheet/${character.id}`}
                    style={{ textDecoration: "none", color: "ghostwhite" }}
                  >
                    <CharacterCard
                      image={`${character.card}`}
                      name={`${character.name}`}
                      race={`${character.race}`}
                      gameClass={`${character.charClass}`}
                      bio={`${character.bio}`}
                    />
                  </Link>
                )
              } else {
                return null
              }
            }
          )}
        </Container>
      </Container>
      <Container fluid className="graveBody">
        <h2>Graveyard</h2>
        <Container fluid className="characterList">
          {data.allContentfulCharacters.edges[0].node.characterCardDetails.characters.map(
            character => {
              if (character.currentHP === 0) {
                return (
                  <Link
                    key={`${character.id}`}
                    to={`/user/characterSheet/${character.id}`}
                    style={{ textDecoration: "none", color: "ghostwhite" }}
                  >
                    <CharacterCard
                      image={`${character.card}`}
                      name={`${character.name}`}
                      race={`${character.race}`}
                      gameClass={`${character.charClass}`}
                      bio={`${character.bio}`}
                    />
                  </Link>
                )
              } else {
                return null
              }
            }
          )}
        </Container>
      </Container>
    </Container>
  )
}

export default Characters
