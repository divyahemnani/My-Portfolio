import React from "react";

function BlockTest() {
  return (
    <div>
      <a
        href="https://github.com/divyahemnani/"
        target="_blank"
        rel="noreferrer"
      >
        <button
          className="btn rounded-circle"
          style={{
            background: "#d8dbe1",
            border: "#d8dbe1",
          }}
        >
          <i className="fa fa-github" style={{ fontSize: 26 }}></i>
        </button>
      </a>

      <a
        href="https://www.linkedin.com/in/divyahemnani/"
        target="_blank"
        rel="noreferrer"
      >
        <button
          className="btn rounded-circle mx-2"
          style={{
            background: "#d8dbe1",
            border: "#d8dbe1",
          }}
        >
          <i className="fa fa-linkedin-square" style={{ fontSize: 26 }}></i>
        </button>
      </a>

      <a
        href="mailto:divya11hemnani@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <button
          className="btn rounded-circle "
          style={{
            background: "#d8dbe1",
            border: "#d8dbe1",
          }}
        >
          <i className="fa fa-envelope" style={{ fontSize: 24 }}></i>
        </button>
      </a>
    </div>
  );
}

export default BlockTest;
