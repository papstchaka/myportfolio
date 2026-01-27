import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Scroll from './Scroll';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
          <Modal.Header closeButton>
            <Modal.Title><h1 className="project-wrapper__text-title">{content.title}</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <Document
              file={content.content.show}
              className={"PDFDocument"}
            >
              <Scroll>
                <Page pageNumber={1} scale={1.8} className={"PDFPage PDFPageOne"}/>
                <Page pageNumber={2} scale={1.8} className={"PDFPage PDFPageOne"}/>
              </Scroll>
            </Document>
          </Modal.Body>
          <Modal.Footer>
          <a rel="noopener noreferrer" className="cta-btn cta-btn--hero" onClick={handleClose}>
              Close
            </a>
          <a rel="noopener noreferrer" href={content.content.download} className="cta-btn cta-btn--hero" download="CV.pdf">
              Download
            </a>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Modal_;
