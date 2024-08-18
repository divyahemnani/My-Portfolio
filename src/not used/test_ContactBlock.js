import React from "react";

function ContactBlock() {
  return (
    <>
      <div className="d-flex flex-column bd-highlight my-5">
        {/*first box*/}
        <div className="p-2 bd-highlight">
          <div
            className="member d-flex align-items-start"
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              position: "relative",
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
              <i className="fa fa-map-marker" style={{ fontSize: 20 }}></i>
            </div>
            <div className="member-info mx-3">
              <h4 style={{ paddingTop: 10, color: "#7f00fd" }}>My Address</h4>

              <p style={{ fontSize: 20, paddingBottom: 10 }}>
                Nana Chiloda , Ahmedabad
              </p>
            </div>
          </div>
        </div>
        {/*second box*/}
        <div className="p-2 bd-highlight my-2">
          <div
            className="member d-flex align-items-start"
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              position: "relative",
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
              <i className="fa fa-envelope" style={{ fontSize: 20 }}></i>
            </div>
            <div className="member-info mx-3">
              <h4 style={{ paddingTop: 10, color: "#7f00fd" }}>Email</h4>

              <p style={{ fontSize: 20, paddingBottom: 10 }}>
                divya11hemnani@gmail.com
              </p>
            </div>
          </div>
        </div>
        {/*third box*/}
        <div className="p-2 bd-highlight my-2">
          <div
            className="member d-flex align-items-start"
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              position: "relative",
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
              <i className="fa fa-mobile-phone" style={{ fontSize: 30 }}></i>
            </div>
            <div className="member-info mx-3">
              <h4 style={{ paddingTop: 10, color: "#7f00fd" }}>Contact</h4>

              <p style={{ fontSize: 20, paddingBottom: 10 }}>+91 7600491335</p>
            </div>
          </div>
        </div>
        {/*fourth box*/}
        <div className="p-2 bd-highlight my-2">
          <div
            className="member d-flex align-items-start"
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              position: "relative",
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
              <i className="fa fa-share-alt" style={{ fontSize: 20 }}></i>
            </div>
            <div className="member-info mx-3">
              <h4 style={{ paddingTop: 6, color: "#7f00fd" }}>
                Social Profiles
              </h4>
              <span style={{ color: "white" }}>Chief Executive Officer</span>

              <p>
                <a href="https://github.com/varadbhogayata/">
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

                <a href="https://www.linkedin.com/in/divyahemnani/">
                  <button
                    className="btn rounded-circle mx-2"
                    style={{
                      background: "#d8dbe1",
                      border: "#d8dbe1",
                    }}
                  >
                    <i
                      className="fa fa-linkedin-square"
                      style={{ fontSize: 26 }}
                    ></i>
                  </button>
                </a>

                <a href="mailto:divya11hemnani@gmail.com">
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactBlock;
