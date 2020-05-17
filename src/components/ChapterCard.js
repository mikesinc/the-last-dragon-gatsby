import React, {useState} from "react"
import "../styles/ChapterCard.css"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import DocumentsModal from './DocumentsModal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from "react-bootstrap/Container"

const ChapterCard = ({ chapter, title, selected, handleClick, background, brief, chapterId }) => {
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <div className="overall">
      <h1>{title}</h1>
      {chapter === selected ? (
        <Card id="card_back" onClick={handleClick}>
          <div className="chapInfo" >
            <h1>Chapter {chapter}</h1>
            <div style={{color: 'white'}} dangerouslySetInnerHTML={{ __html: brief.html }} />
            <ButtonToolbar>
                <Container fluid>
                    <Button
                        variant="light"
                        onClick={() => setModalShow(true)}
                    >
                        <h5>Read Chapter >> </h5>
                    </Button>
                </Container>
                <DocumentsModal
                    chapter={chapter}
                    chapterId={chapterId}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </ButtonToolbar>
          </div>
        </Card>
      ) : (
        <Card onClick={handleClick}>
          <img
            id="card_front"
            src={background}
            height="450px"
            width="350px"
            alt={chapter}
          ></img>
        </Card>
      )}
    </div>
  )
}

export default ChapterCard
