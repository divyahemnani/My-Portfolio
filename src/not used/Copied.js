import React from "react";
import "../index.css";

function ContactTest() {
  return (
    <>
      <section id="team" className="team section-bg">
        <div className="container my-3">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="member d-flex align-items-start"
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  position: "relative",
                }}
              >
                <div
                  className="mx-3"
                  style={{
                    background: "#d8dbe1",
                    height: 60,
                    width: 75,
                    borderRadius: 50,
                    border: "#d8dbe1",
                    textAlign: "center",
                    verticalAlign: "middle",
                    lineHeight: 4,
                  }}
                >
                  <i className="fa fa-envelope" style={{ fontSize: 35 }}></i>
                </div>
                <div className="member-info mx-3">
                  <h4>James</h4>
                  <span>Chief Executive Officer</span>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati, ducimus.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img src="./img/team2.png" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Benjamin</h4>
                  <span>Full-stack developer</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati, ducimus.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img src="./img/team3.png" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Amelia</h4>
                  <span>Senior software engineer</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati, ducimus.
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i className="bi bi-whatsapp"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start">
                <div className="teampic">
                  <img src="./img/team4.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Charlotte</h4>
                  <span>Senior software engineer</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati, ducimus.
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i className="bi bi-whatsapp"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactTest;
