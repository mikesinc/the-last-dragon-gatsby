import React from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/Loading.css';

const Loading = () => {
    return (
        <Container fluid className="loadingScreen">
            <img alt='loader' src={require('../assets/images/ajax-loader.gif')}></img>
            <h1>Loading...</h1>
        </Container>
    )
}

export default Loading