import React from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/Loading.css';
import { useStaticQuery, graphql } from "gatsby"

const Loading = () => {
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

    return (
        <Container fluid className="loadingScreen" style={{background: `linear-gradient(rgba(255, 255, 255, 0), rgba(0,0,0,1)), url(${data.allContentfulOverall.edges[0].node.background.file.url})`}}>
            <img alt='loader' src={require('../assets/images/ajax-loader.gif')}></img>
            <h1>Loading...</h1>
        </Container>
    )
}

export default Loading