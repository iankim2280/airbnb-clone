import React from "react";
import ColumnItem from "./ColumnItem";
// import PropTypes from "prop-types";

class Column extends React.Component {
  render() {
    const contents = [];
    for (let i = 1; i < 5; i++) {
      contents.push({ class: `column column${i}` });
    }
    return (
      <>
        {contents.map((content, index) => (
          <div key={index} className={content.class}>
            <ColumnItem />
          </div>
        ))}
      </>
    );
  }
}
export default Column;
