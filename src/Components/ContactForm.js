import React from "react";
import Swal from "sweetalert2";
import BlockBox from "./BlockBox";
import SocialIconsBlock from "./SocialIconsBlock";

// or via CommonJS
//clconst Swal = require("sweetalert2");

function ContactForm() {
  const var_socialIconsBlock = <SocialIconsBlock />;
  // eslint-disable-next-line
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eb3f8914-089f-4398-8b80-8e312d0b412e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success",
        text: "Your message was sent Successfully",
        icon: "success",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container" id="contactform">
          <div className="row">
            <div className="col-md-5">
              <div className="my-2" style={{ paddingTop: 60 }}>
                <BlockBox
                  title="Address"
                  description="Nana Chiloda, Ahmedabad"
                  icon="fa fa-map-marker"
                  fsize={20}
                  fosize={20}
                  pab={10}
                />
              </div>
              <div>
                <BlockBox
                  title="Email"
                  description="divya11hemnani@gmail.com"
                  icon="fa fa-envelope"
                  fsize={20}
                  fosize={20}
                  pab={10}
                />
              </div>
              <div className="my-2">
                <BlockBox
                  title="Contact"
                  description="+91 7600491335"
                  icon="fa fa-mobile-phone"
                  fsize={30}
                  fosize={20}
                  pab={10}
                />
              </div>
              <div className="my-2">
                <BlockBox
                  title="Social Profiles"
                  description={var_socialIconsBlock}
                  icon="fa fa-share-alt"
                  fsize={20}
                  fosize={20}
                  pab={10}
                  pat={10}
                />
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5" style={{ paddingTop: 120 }}>
              <h3 className="mx-3" style={{ color: "#7f00fd" }}>
                Get in Touch!
              </h3>
              <form onSubmit={onSubmit} className="my-3">
                <fieldset
                  style={{
                    boxShadow: "0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25)",
                    backgroundColor: "white",
                    border: 340,
                    borderRadius: 30,
                    padding: 20,
                  }}
                >
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                      style={{ fontSize: 20 }}
                    >
                      Name
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="form-label"
                      style={{ fontSize: 20 }}
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder="name@example.com"
                      name="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                      style={{ fontSize: 20 }}
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Enter Your Message"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-20">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      style={{
                        background: "#7f00fd",
                        color: "white",
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
