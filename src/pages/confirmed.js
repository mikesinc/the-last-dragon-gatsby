import React, { useEffect } from "react"
import Container from "react-bootstrap/Container"
import { Link } from "gatsby"
import "../styles/Confirmed.css"
import axios from "axios"
import { useStaticQuery, graphql } from "gatsby"

const Confirmed = () => {
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
    }
    `)

  useEffect(() => {
    axios({
      method: "get",
      url: `https://limitless-beach-12582.herokuapp.com/api/user/confirm/${
        window.location.pathname.split("/")[2]
      }`,
    })
      .then(res => {
        alert(res.data.msg)
      })
      .catch(err => console.log(err.detail))
    // eslint-disable-next-line
  }, [])

  return (
    <Container fluid className="confirmedBack" style={{background: `linear-gradient(rgba(255, 255, 255, 0), rgba(0,0,0,1)), url(${data.allContentfulOverall.edges[0].node.background.file.url})`}}>
      <h1>Your email is now verified, enjoy!</h1>
      <div className="goHomeButton">
        <Link to="/" style={{ textDecoration: "none" }}>
          <input
            style={{
              fontFamily: "Ringbearer",
              height: "50px",
              fontSize: "12pt",
            }}
            type="submit"
            value="Click here to go Home"
          />
        </Link>
      </div>
    </Container>
  )
}

export default Confirmed
