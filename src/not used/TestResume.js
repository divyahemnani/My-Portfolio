import React, { useState, useEffect } from "react";

import pdf from "./Divya_CV.pdf";

import { Document, Page, pdfjs } from "react-pdf";

//pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const resumeLink = `https://raw.githubusercontent.com/19sajib/portfolio/main/src/assets/sajib.pdf`;

const TestResume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div>
        <div div className="container-fluid">
          <div style={{ justifyContent: "center", position: "relative" }}>
            <button
              type="button"
              className="btn btn-primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              Download Resume
            </button>
          </div>

          <div className="row">
            <Document
              file={resumeLink}
              className="d-flex justify-content-center"
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </div>

          <div style={{ justifyContent: "center", position: "relative" }}>
            <button
              type="button"
              className="btn btn-primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestResume;
