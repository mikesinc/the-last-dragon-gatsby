import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/ChapterInfo.css';
import Button from 'react-bootstrap/Button';
import DocumentsModal from './DocumentsModal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const ChapterInfo = ({ chapter }) => {
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 811 || window.innerHeight < 415) {
            document.querySelector('.infoBox').scrollIntoView({
                behavior: 'smooth'
            });
        }
    })

    const description = (chapter) => {
        switch (chapter) {
            case "One":
                return (
                    <div>
                        <h2>The Prince of Plagues</h2>
                        <p>Introduction to the world, races, player party, back story.</p>
                        <p>...</p>
                    </div>
                )
            case "Two":
                return (
                    <div>
                        <h2>Sordid Sands</h2>
                        <p>The group continues through the dry barren deserts..</p>
                        <p>...</p>
                    </div>
                )
            case "Three":
                return (
                    <div>
                        <h2>Tradition and Temperament</h2>
                        <p>Party continues through elven land..</p>
                        <p>...</p>
                    </div>
                )
            case "Four":
                return (
                    <div>
                        <h2>Bastion of the North</h2>
                        <p>Journey into Orcish territory</p>
                        <p>...</p>
                    </div>
                )
            case "Five":
                return (
                    <div>
                        <h2>The Lost City</h2>
                        <p>The party embraces the depths of Lantanis</p>
                        <p>...</p>
                    </div>
                )
            case "Six":
                return (
                    <div>
                        <h2>The Badlands</h2>
                        <p>Edging towards the end of the journey.</p>
                        <p>...</p>
                    </div>
                )
            default:
                return 0;
        }
    }

    return (
        <Container className="infoBox" style={{ minHeight: '300px', paddingTop: '10px', margin: '20px' }}>
            <h1>Chapter {chapter}</h1>
            <ButtonToolbar>
                <Container fluid style={{ maxWidth: 'fit-content', display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }} >
                    <Button
                        variant="light"
                        onClick={() => setModalShow(true)}
                    >
                        <h5>Read Chapter >> </h5>
                    </Button>
                </Container>
                <DocumentsModal
                    chapter={chapter}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </ButtonToolbar>
            {description(chapter)}
        </Container>
    )
}
export default ChapterInfo;