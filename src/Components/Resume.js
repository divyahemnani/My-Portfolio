import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfFile from "./Divya_CV.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [width, setWidth] = useState(900);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <>
      <div
        div
        className="container-fluid"
        style={{
          paddingLeft: 230,
          paddingRight: 230,
        }}
      >
        <div
          className="my-4 text-center"
          style={{ justifyContent: "center", position: "relative" }}
        >
          <a
            href="https://drive.google.com/file/d/1Pnq7CYQ8AWRcg6WBn-dMHTrIhgmvpp2S/view?usp=sharing"
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
        <div style={{ boxShadow: "0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25)" }}>
          <Document file={pdfFile}>
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
            href="https://drive.google.com/file/d/1Pnq7CYQ8AWRcg6WBn-dMHTrIhgmvpp2S/view?usp=sharing"
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
