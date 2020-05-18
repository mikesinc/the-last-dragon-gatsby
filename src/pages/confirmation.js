import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import axios from "axios"
import "../styles/Confirmation.css"
import { useStaticQuery, graphql } from "gatsby"

const Confirmation = () => {
  const [clicked, setClicked] = useState(false)

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
    sendVerificationEmail()
  })

  const sendVerificationEmail = () => {
    axios({
      method: "post",
      url: "https://limitless-beach-12582.herokuapp.com/api/user/confirmation",
      data: {
        email: window.localStorage.getItem("user_email"),
      },
    })
      .then(res => {
        if (clicked) alert(res.data.msg)
        window.localStorage.removeItem("user_email")
      })
      .catch(err => console.log(err.detail))
  }

  const handleClick = () => {
    sendVerificationEmail()
  }

  return (
    <Container fluid className="confirmationBack" style={{background: `linear-gradient(rgba(255, 255, 255, 0), rgba(0,0,0,1)), url(${data.allContentfulOverall.edges[0].node.background.file.url})`}}>
      <h1>Please check your email to verify your account!</h1>
      <h2>
        You must verify your email exists before continuing to use this website.
      </h2>
      <h3>Didn't receive an email? Click the button below to try again..</h3>
      <div className="verifyButton">
        <input
          style={{ fontFamily: "Ringbearer", height: "50px" }}
          type="submit"
          value="Re-send Verification Email"
          onClick={() => {
            setClicked(true)
            handleClick()
          }}
        />
      </div>
    </Container>
  )
}

export default Confirmation
