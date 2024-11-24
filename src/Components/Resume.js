import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfFile from "./Divya React Developer Resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div
          className="my-4 text-center"
          style={{ justifyContent: "center", position: "relative" }}
        >
          <a
            href="https://drive.google.com/file/d/14P0I4yW84LRT1tpomI_w08-SKeQfnP_p/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="btn"
              style={{
                maxWidth: "250px",
                backgroundColor: "#7343b1",
                color: "white",
              }}
            >
              Download Resume
            </button>
          </a>
        </div>
        <div className="row">
          <Document file={pdfFile} className="d-flex justify-content-center">
            <Page
              pageNumber={1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              scale={width > 786 ? 1.7 : 0.6}
            />
          </Document>
        </div>
        <div
          className="my-4 text-center"
          style={{ justifyContent: "center", position: "relative" }}
        >
          <a
            href="https://drive.google.com/file/d/14P0I4yW84LRT1tpomI_w08-SKeQfnP_p/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="btn"
              href={pdfFile}
              target="_blank"
              style={{
                maxWidth: "250px",
                backgroundColor: "#7343b1",
                color: "white",
              }}
            >
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Resume;
