import React from "react";
import "./card.css";
import NewtestCard from "./NewtestCard";

import htmlicon from "./images-cards/html_1051277.png";
import cssicon from "./images-cards/css-3_732190.png";
import jsicon from "./images-cards/js_5968292.png";
import pythonicon from "./images-cards/python_5968350.png";
import mysqlicon from "./images-cards/MySQLnew.png";

import reacticon from "./images-cards/React.png";
import reduxicon from "./images-cards/Redux.png";
import numpyicon from "./images-cards/NumPy.png";
import pandasicon from "./images-cards/Pandas.png";
import bootstrapicon from "./images-cards/Bootstrapnew.png";

import vscodeicon from "./images-cards/Visual Studio Code (VS Code).png";
import giticon from "./images-cards/Git.png";
import sqlservericon from "./images-cards/SQL Developer.png";
import powerbiicon from "./images-cards/power-bi.384x512.png";

function Cards() {
  return (
    <>
      <div className="container">
        <div className="my-3">
          <h3>Languages and Databases</h3>
        </div>
        <div className="row text-center">
          <div className="col-sm">
            <NewtestCard imgsrc={htmlicon} title="HTML5" />
          </div>

          <div className="col-sm">
            <NewtestCard imgsrc={cssicon} title="CSS" />
          </div>

          <div className="col-sm">
            <NewtestCard imgsrc={jsicon} title="Javascript" />
          </div>

          <div className="col-sm">
            <NewtestCard imgsrc={pythonicon} title="Python" />
          </div>
          <div className="col-sm">
            <NewtestCard imgsrc={mysqlicon} title="MySQL" />
          </div>
        </div>
        <div className="my-4">
          <br></br>
          <br></br>
          <h3>Libraries and Frameworks</h3>
        </div>
        <div>
          <div className="row text-center">
            <div className="col-sm">
              <NewtestCard imgsrc={reacticon} title="React" />
            </div>

            <div className="col-sm">
              <NewtestCard imgsrc={reduxicon} title="Redux" />
            </div>

            <div className="col-sm">
              <NewtestCard imgsrc={numpyicon} title="Numpy" />
            </div>

            <div className="col-sm">
              <NewtestCard imgsrc={pandasicon} title="Pandas" />
            </div>
            <div className="col-sm">
              <NewtestCard imgsrc={bootstrapicon} title="Bootstrap" />
            </div>
          </div>
        </div>
        <div className="my-4">
          <br></br>
          <br></br>
          <h3>Tools</h3>
        </div>
        <div>
          <div className="row text-center">
            <div className="col-sm">
              <NewtestCard imgsrc={vscodeicon} title="Visual Studio Code" />
            </div>

            <div className="col-sm">
              <NewtestCard imgsrc={giticon} title="Git" />
            </div>

            <div className="col-sm">
              <NewtestCard imgsrc={sqlservericon} title="SQL Server" />
            </div>

            <div className="col-sm">
              <NewtestCard imgsrc={powerbiicon} title="Power BI" />
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;