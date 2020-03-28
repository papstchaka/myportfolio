import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Scroll from './Scroll';
import { Document, Page, pdfjs } from "react-pdf";

import './Modal.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Modal_({content}) {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
      <>
        <a rel="noopener noreferrer" className="cta-btn cta-btn--resume" onClick={handleShow}>
          View Resume
        </a>
  
        <Modal show={show} onHide={handleClose} dialogClassName="modal-big">
          <Modal.Header>
            <Modal.Title><h1 className="project-wrapper__text-title">{content.title}</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body style={{alignSelf: "center", height: "55em", width: "100%", textAlign: "-webkit-center"}}>
            <Document
              file={content.content}
            >
              <Scroll>
                <Page pageNumber={1} scale={1.8}/>
                <Page pageNumber={2} scale={1.8}/>
              </Scroll>
            </Document>
          </Modal.Body>
          <Modal.Footer>
          <a rel="noopener noreferrer" className="cta-btn cta-btn--resume" onClick={handleClose}>
              Close
            </a>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Modal_;