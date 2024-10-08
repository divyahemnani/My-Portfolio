import React from "react";
import newimg from "./newimg.png";
import SocialIconsBlock from "./SocialIconsBlock";
import "./Homepage.css";

function Home2(props) {
  const li = props.lightcolor;
  // eslint-disable-next-line
  const da = props.darkcolor;
  const darkmodecolor = "white";
  const lightmodecolor = "black";

  const func = () => {
    if (props.coll === li) {
      return lightmodecolor;
    } else {
      return darkmodecolor;
    }
  };
  return (
    <>
      <div className="container-fluid" id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12" id="test">
              <br></br>
              <h1 style={{ color: "#7f00fd" }}>Divya Hemnani</h1>
              <h3 className="profession" style={{ color: func() }}>
                Developer
              </h3>
              <p className="description" style={{ color: func() }}>
                Crafting seamless user experiences with dynamic, responsive, and
                intuitive React applications. I specialize in building
                high-performance web interfaces that not only look great but
                function flawlessly. Let's turn ideas into reality with clean,
                efficient, and scalable code.
              </p>

              <div className="my-3">
                <SocialIconsBlock />
              </div>
              {/*<div>
                <button
                  type="button"
                  className="btn bg-transparent btn-primary"
                >
                  Read More
                </button>

                <button type="button" className="btn btn-primary mx-3">
                  Contact Me
                </button>
              </div>*/}
            </div>

            <div className="col-md-6 col-12" style={{ paddingTop: 74 }}>
              <img
                src={newimg}
                alt="Logo"
                className="img-fluid" // Ensures image responsiveness
                style={{
                  // Make the image take up 100% of the column width on mobile
                  height: "auto", // Maintain aspect ratio
                  maxWidth: "100%", // Restrict maximum width for larger screens
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2;
