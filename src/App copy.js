import "./App.css";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState(
    { url: process.env.PUBLIC_URL + '/abc2.pdf' }
  )

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </header>
    </div>
  );
}

export default App;
