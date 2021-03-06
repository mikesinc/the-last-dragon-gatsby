import React from "react"
import Container from "react-bootstrap/Container"
import "../styles/CharacterSheet.css"
import Table from "react-bootstrap/Table"
import { useStaticQuery, graphql } from "gatsby"

const CharacterSheet = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulCharacters(sort: {fields: stats___charid}) {
        edges {
          node {
            name
            childContentfulCharactersStatsJsonNode {
              alignment
              attacking {
                name
                attack
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
              bio
              background
              bonds
              charClass
              classAbility
              currentHP
              flaws
              ideals
              lvl
              maxHP
              other {
                proficiency
                type
              }
              personality
              race
              stats {
                armourClass
                initiative
                speed
              }
              toolkit {
                att
                tool
                pro
              }
              charid
            }
            characterSheetImage {
              fluid {
                src
              }
            }
            characterSheetBackground {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const characterID = window.location.pathname.split("/")[3]

  const {
    race,
    charClass,
    lvl,
    attributes,
    background,
    alignment,
    personality,
    ideals,
    bonds,
    flaws,
    stats,
    maxHP,
    currentHP,
    attacking,
    toolkit,
    other,
    classAbility,
  } = data.allContentfulCharacters.edges[characterID].node.childContentfulCharactersStatsJsonNode
  const backgroundImg = data.allContentfulCharacters.edges[characterID].node.characterSheetBackground.file.url
  const portrait = data.allContentfulCharacters.edges[characterID].node.characterSheetImage.fluid.src

  return (
    <Container
      fluid
      className="sheetBackground"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(${backgroundImg})`,
      }}
    >
      <Container fluid className="characterHeader">
        <h1>{data.allContentfulCharacters.edges[characterID].node.name}</h1>
        <h2>
          {race} | {charClass} | Level {lvl}{" "}
        </h2>
        <img src={portrait} alt="portrait"></img>
      </Container>
      <Container fluid className="leftTables">
        <Container fluid className="attributeTable">
          <Table bordered striped responsive size="sm" variant="dark">
            <thead>
              <tr>
                <th>Strength</th>
                <th>Dexterity</th>
                <th>Constitution</th>
                <th>Intelligence</th>
                <th>Wisdom</th>
                <th>Charisma</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{attributes.str}</td>
                <td>{attributes.dex}</td>
                <td>{attributes.cons}</td>
                <td>{attributes.intel}</td>
                <td>{attributes.wis}</td>
                <td>{attributes.chari}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <Container fluid className="stats">
          <Table bordered striped responsive="sm" size="sm" variant="dark">
            <thead>
              <tr>
                <th>Armour Class</th>
                <th>Initiative</th>
                <th>Speed</th>
                <th>Max HP</th>
                <th>Current HP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{stats.armourClass}</td>
                <td>{stats.initiative}</td>
                <td>{stats.speed}</td>
                <td>{maxHP}</td>
                <td>{currentHP === 0 ? "R.I.P" : currentHP}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <Container fluid className="attackTable">
          <Table bordered responsive="sm" size="sm" variant="dark">
            <thead>
              <tr>
                <th>Attack</th>
                <th>Damage</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {attacking.map((attackItem, i) => {
                return (
                  <tr key={i}>
                    <td>{attackItem.name}</td>
                    <td>{attackItem.attack}</td>
                    <td>{attackItem.type}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Container>
        <Container fluid className="toolTable">
          {toolkit ? (
            <Table bordered responsive="sm" size="sm" variant="dark">
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Proficiency</th>
                  <th>Attribute</th>
                </tr>
              </thead>
              <tbody>
                {toolkit.map((toolItem, i) => {
                  return (
                    <tr key={i}>
                      <td>{toolItem.tool}</td>
                      <td>{toolItem.pro}</td>
                      <td>{toolItem.att}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          ) : null}
        </Container>
        <Container fluid className="otherTable">
          {other ? (
            <Table bordered responsive="sm" size="sm" variant="dark">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Proficiency</th>
                </tr>
              </thead>
              <tbody>
                {other.map((otherItem, i) => {
                  return (
                    <tr key={i}>
                      <td>{otherItem.type}</td>
                      <td>{otherItem.proficiency}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          ) : null}
        </Container>
      </Container>
      <Container fluid className="rightTables">
        <Container fluid className="backgroundTable">
          <Table bordered striped responsive size="sm" variant="dark">
            <thead>
              <tr>
                <th>Background</th>
                <th>Alignment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{background}</td>
                <td>{alignment}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <Container fluid className="personalityTable">
          <Table bordered striped responsive size="sm" variant="dark">
            <thead>
              <tr>
                <th>Personality</th>
                <th>Ideals</th>
                <th>Bonds</th>
                <th>Flaws</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {personality.map((trait, i) => (
                    <li key={i}>{trait}</li>
                  ))}
                </td>
                <td>
                  {ideals.map((ideal, i) => (
                    <li key={i}>{ideal}</li>
                  ))}
                </td>
                <td>
                  {bonds.map((bond, i) => (
                    <li key={i}>{bond}</li>
                  ))}
                </td>
                <td>
                  {flaws.map((flaw, i) => (
                    <li key={i}>{flaw}</li>
                  ))}
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <Container fluid className="abilityTable">
          <Table bordered striped responsive size="sm" variant="dark">
            <thead>
              <tr>
                <th>{charClass} Ability</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "justify", lineHeight: "200%" }}>
              <tr>
                <td>{classAbility}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </Container>
  )
}

export default CharacterSheet
