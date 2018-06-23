import React from "react";
import "./Thumbnail.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
const Thumbnail = props => (
  <div
    id={props.id}
    className="thumbnail"
    role="img"
    aria-label="Game of Thrones character"
    style={{
      backgroundImage: `url(${props.src})`
    }}
    onClick={props.click}
  />
);

export default Thumbnail;