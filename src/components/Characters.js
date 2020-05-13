import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import "../styles/Characters.css"
import "../styles/common.css"
import CharacterCard from "./CharacterCard"
import { Link } from "gatsby"
import Loading from "../pages/loading"

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetchChars()
    //eslint-disable-next-line
  }, [])

  const fetchChars = async () => {
    const getChars = await require("../CharacterData.json")
    setCharacters(getChars.characters)
    setIsLoaded(true)
  }

  if (isLoaded) {
    return (
      <Container fluid className="background">
        <Container fluid className="header"></Container>
        <Container fluid className="title">
          <h1>Characters of Australis</h1>
        </Container>
        <Container fluid className="charactersBody">
          <h2>Player Party</h2>
          <Container fluid className="characterList">
            {characters.map(character => {
              if (character.currentHP > 0) {
                return (
                  <Link
                    key={`${character.id}`}
                    to={`/user/characterSheet/${character.id}`}
                    style={{ textDecoration: "none", color: "ghostwhite" }}
                  >
                    <CharacterCard
                      image={`${character.id}card`}
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
            })}
          </Container>
        </Container>
        <Container fluid className="graveBody">
          <h2>Graveyard</h2>
          <Container fluid className="characterList">
            {characters.map(character => {
              if (character.currentHP === 0) {
                return (
                  <Link
                    key={`${character.id}`}
                    to={`/user/characterSheet/${character.id}`}
                    style={{ textDecoration: "none", color: "ghostwhite" }}
                  >
                    <CharacterCard
                      image={`${character.id}card`}
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
            })}
          </Container>
        </Container>
      </Container>
    )
  } else {
    return <Loading />
  }
}

export default Characters
