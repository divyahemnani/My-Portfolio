import React from "react";
//"fa fa-map-marker"

export default function BlockBox(props) {
  const style = {
    fontSize: props.fsize,
  };
  const style2 = {
    fontSize: props.fosize,
    paddingBottom: props.pab,
    paddingTop: props.pat,
  };
  return (
    <>
      <div className="d-flex flex-column bd-highlight">
        {/*box*/}
        <div className="p-2 bd-highlight">
          <div
            className="member d-flex align-items-start"
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              position: "relative",
              boxShadow: "0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25)",
            }}
          >
            <div
              className="mx-3 my-3"
              style={{
                background: "#d8dbe1",
                height: 60,
                width: 65,
                borderRadius: 50,
                border: "#d8dbe1",
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: 4,
              }}
            >
              <i className={props.icon} style={style}></i>
            </div>
            <div className="member-info mx-3">
              <h4 style={{ paddingTop: 10, color: "#7f00fd" }}>
                {props.title}
              </h4>

              <p style={style2}>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
