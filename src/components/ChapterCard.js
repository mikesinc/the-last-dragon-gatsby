import React, {useState} from "react"
import "../styles/ChapterCard.css"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import DocumentsModal from './DocumentsModal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from "react-bootstrap/Container"

const ChapterCard = ({ chapter, title, selected, handleClick, background, brief }) => {
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <div className="overall">
      {chapter === selected ? (
        <Card id="card_back" onClick={handleClick}>
          <div className="chapInfo" >
            <h1>Chapter {chapter}</h1>
            <p>{brief}</p>
            <ButtonToolbar>
                <Container fluid  >
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
            <p>{brief}</p>
          </div>
        </Card>
      ) : (
        <Card>
          <h1>{title}</h1>
          <img
            id="card_front"
            onClick={handleClick}
            src={background}
            height="400px"
            width="350px"
          ></img>
        </Card>
      )}
    </div>
  )
}

export default ChapterCard
