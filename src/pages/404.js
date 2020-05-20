import React from 'react';
import '../styles/404.css';
import Container from 'react-bootstrap/Container';

const NoMatch = () => {
    return (
        <Container fluid className='noMatch'>
            <h1>Error 404! Page Not Found</h1>
            <h2>SomeSing Need DoiNG?</h2>
            <img src={require('../assets/images/error.png')} alt='lostGoblin' width='20%'></img>
        </Container>
    );
}

export default NoMatch;