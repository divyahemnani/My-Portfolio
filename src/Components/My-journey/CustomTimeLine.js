import React from "react";
import "./CustomTimeLine.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function App(props) {
  let workIconStyles = { background: "#AF90A9" };
  let schoolIconStyles = { background: "#CCC4CA" };
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
    <div>
      <h1 className="title" style={{ color: func() }}>
        Timeline
      </h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h4
                className="vertical-timeline-element-date"
                style={{ color: func() }}
              >
                {element.date}
              </h4>
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle my-3">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;
