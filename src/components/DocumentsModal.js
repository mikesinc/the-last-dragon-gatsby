import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'gatsby';
import '../styles/DocumentsModal.css';

const DocumentsModal = ({ chapter, show, onHide }) => {
  const [chapters, setChapters] = useState([]);

  const fetchChapters = async () => {
    const getChapters = await require('../ChapterText.json');
    setChapters(getChapters.chapterSummaries);
  }

  useEffect(() => {
    fetchChapters();
  }, []);

  const getLinks = () => {
    switch (chapter) {
      case "One":
        return (
          <>
            <Link key={chapters[0].Parts[0].Part} to={`/user/chapterSummary${chapter}${chapters[0].Parts[0].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[0].Parts[0].Part} </h2>
            </Link>
            <Link key={chapters[0].Parts[1].Part} to={`/user/chapterSummary${chapter}${chapters[0].Parts[1].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[0].Parts[1].Part} </h2>
            </Link>
          </>
        )
      case "Two":
        return (
          <>
            <Link key={chapters[1].Parts[0].Part} to={`/user/chapterSummary${chapter}${chapters[1].Parts[0].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[1].Parts[0].Part} </h2>
            </Link>
            <Link key={chapters[1].Parts[1].Part} to={`/user/chapterSummary${chapter}${chapters[1].Parts[1].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[1].Parts[1].Part} </h2>
            </Link>
            <Link key={chapters[1].Parts[2].Part} to={`/user/chapterSummary${chapter}${chapters[1].Parts[2].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[1].Parts[2].Part} </h2>
            </Link>
            <Link key={chapters[1].Parts[3].Part} to={`/user/chapterSummary${chapter}${chapters[1].Parts[3].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[1].Parts[3].Part} </h2>
            </Link>
            <Link key={chapters[1].Parts[4].Part} to={`/user/chapterSummary${chapter}${chapters[1].Parts[4].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[1].Parts[4].Part} </h2>
            </Link>
            <Link key={chapters[1].Parts[5].Part} to={`/user/chapterSummary${chapter}${chapters[1].Parts[5].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[1].Parts[5].Part} </h2>
            </Link>
            <Link key={chapters[1].Parts[6].Part} to={`/user/chapterSummary${chapter}${chapters[1].Parts[6].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[1].Parts[6].Part} </h2>
            </Link>
            <Link key={chapters[1].Parts[7].Part} to={`/user/chapterSummary${chapter}${chapters[1].Parts[7].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[1].Parts[7].Part} </h2>
            </Link>
          </>
        )
      case "Three":
        return (
          <>
            <Link key={chapters[2].Parts[0].Part} to={`/user/chapterSummary${chapter}${chapters[2].Parts[0].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[2].Parts[0].Part} </h2>
            </Link>
            <Link key={chapters[2].Parts[1].Part} to={`/user/chapterSummary${chapter}${chapters[2].Parts[1].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[2].Parts[1].Part} </h2>
            </Link>
            <Link key={chapters[2].Parts[2].Part} to={`/user/chapterSummary${chapter}${chapters[2].Parts[2].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[2].Parts[2].Part} </h2>
            </Link>
            <Link key={chapters[2].Parts[3].Part} to={`/user/chapterSummary${chapter}${chapters[2].Parts[3].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[2].Parts[3].Part} </h2>
            </Link>
            <Link key={chapters[2].Parts[4].Part} to={`/user/chapterSummary${chapter}${chapters[2].Parts[4].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[2].Parts[4].Part} </h2>
            </Link>
            <Link key={chapters[2].Parts[5].Part} to={`/user/chapterSummary${chapter}${chapters[2].Parts[5].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[2].Parts[5].Part} </h2>
            </Link>
          </>
        )
      case "Four":
        return (
          <>
            <Link key={chapters[3].Parts[0].Part} to={`/user/chapterSummary${chapter}${chapters[3].Parts[0].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[3].Parts[0].Part} </h2>
            </Link>
            <Link key={chapters[3].Parts[1].Part} to={`/user/chapterSummary${chapter}${chapters[3].Parts[1].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[3].Parts[1].Part} </h2>
            </Link>
            <Link key={chapters[3].Parts[2].Part} to={`/user/chapterSummary${chapter}${chapters[3].Parts[2].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[3].Parts[2].Part} </h2>
            </Link>
            <Link key={chapters[3].Parts[3].Part} to={`/user/chapterSummary${chapter}${chapters[3].Parts[3].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[3].Parts[3].Part} </h2>
            </Link>
            <Link key={chapters[3].Parts[4].Part} to={`/user/chapterSummary${chapter}${chapters[3].Parts[4].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[3].Parts[4].Part} </h2>
            </Link>
            <Link key={chapters[3].Parts[5].Part} to={`/user/chapterSummary${chapter}${chapters[3].Parts[5].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[3].Parts[5].Part} </h2>
            </Link>
            <Link key={chapters[3].Parts[6].Part} to={`/user/chapterSummary${chapter}${chapters[3].Parts[6].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[3].Parts[6].Part} </h2>
            </Link>
            <Link key={chapters[3].Parts[7].Part} to={`/user/chapterSummary${chapter}${chapters[3].Parts[7].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[3].Parts[7].Part} </h2>
            </Link>
            <Link key={chapters[3].Parts[8].Part} to={`/user/chapterSummary${chapter}${chapters[3].Parts[8].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[3].Parts[8].Part} </h2>
            </Link>
            <Link key={chapters[3].Parts[9].Part} to={`/user/chapterSummary${chapter}${chapters[3].Parts[9].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[3].Parts[9].Part} </h2>
            </Link>
            <Link key={chapters[3].Parts[10].Part} to={`/user/chapterSummary${chapter}${chapters[3].Parts[10].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[3].Parts[10].Part} </h2>
            </Link>
          </>
        )
      case "Five":
        return (
          <>
            <Link key={chapters[4].Parts[0].Part} to={`/user/chapterSummary${chapter}${chapters[4].Parts[0].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[4].Parts[0].Part} </h2>
            </Link>
            <Link key={chapters[4].Parts[1].Part} to={`/user/chapterSummary${chapter}${chapters[4].Parts[1].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[4].Parts[1].Part} </h2>
            </Link>
            <Link key={chapters[4].Parts[2].Part} to={`/user/chapterSummary${chapter}${chapters[4].Parts[2].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[4].Parts[2].Part} </h2>
            </Link>
            <Link key={chapters[4].Parts[3].Part} to={`/user/chapterSummary${chapter}${chapters[4].Parts[3].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[4].Parts[3].Part} </h2>
            </Link>
            <Link key={chapters[4].Parts[4].Part} to={`/user/chapterSummary${chapter}${chapters[4].Parts[4].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[4].Parts[4].Part} </h2>
            </Link>
            <Link key={chapters[4].Parts[5].Part} to={`/user/chapterSummary${chapter}${chapters[4].Parts[5].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[4].Parts[5].Part} </h2>
            </Link>
            <Link key={chapters[4].Parts[6].Part} to={`/user/chapterSummary${chapter}${chapters[4].Parts[6].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[4].Parts[6].Part} </h2>
            </Link>
            <Link key={chapters[4].Parts[7].Part} to={`/user/chapterSummary${chapter}${chapters[4].Parts[7].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[4].Parts[7].Part} </h2>
            </Link>
            <Link key={chapters[4].Parts[8].Part} to={`/user/chapterSummary${chapter}${chapters[4].Parts[8].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[4].Parts[8].Part} </h2>
            </Link>
            <Link key={chapters[4].Parts[9].Part} to={`/user/chapterSummary${chapter}${chapters[4].Parts[9].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[4].Parts[9].Part} </h2>
            </Link>
          </>
        )
      case "Six":
        return (
          <>
            <Link key={chapters[5].Parts[0].Part} to={`/user/chapterSummary${chapter}${chapters[5].Parts[0].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[5].Parts[0].Part} </h2>
            </Link>
            <Link key={chapters[5].Parts[1].Part} to={`/user/chapterSummary${chapter}${chapters[5].Parts[1].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[5].Parts[1].Part} </h2>
            </Link>
            <Link key={chapters[5].Parts[2].Part} to={`/user/chapterSummary${chapter}${chapters[5].Parts[2].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[5].Parts[2].Part} </h2>
            </Link>
            <Link key={chapters[5].Parts[3].Part} to={`/user/chapterSummary${chapter}${chapters[5].Parts[3].Part}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h2 style={{ cursor: 'pointer' }}>Part {chapters[5].Parts[3].Part} </h2>
            </Link>
          </>
        )
      default:
        return;
    }
  }

  if (chapters.length > 0) {
    return (
      <Modal
        show={show}
        onHide={() => onHide()}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>Chapter {chapter}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {getLinks()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return <h1>Loading...</h1>
  }
}

export default DocumentsModal;