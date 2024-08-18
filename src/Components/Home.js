import React from "react";
import newimg from "./newimg.png";
import SocialIconsBlock from "./SocialIconsBlock";

function Home2(props) {
  const li = props.lightcolor;
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
            <div className="col-md-6" style={{ paddingTop: 250 }}>
              <h3 className="profession" style={{ color: func() }}>
                Developer
              </h3>

              <h1 style={{ color: "#7f00fd" }}>Divya Hemnani</h1>
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

            <div
              className="col-md-6"
              style={{ paddingTop: 74, paddingLeft: 100 }}
            >
              <img src={newimg} alt="Logo" width={600} height={595} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2;
