import React from "react";

class ContentsButton extends React.Component {
  render() {
    const contents = [
      {
        name: "Cancellation flexibility",
      },
      {
        name: "Type of place",
      },
      {
        name: "Price",
      },
      {
        name: "Instant Book",
      },
      {
        name: "More filters",
      },
    ];
    return (
      <div>
        {contents.map((content, index) => (
          <button key={content.name + index} class="button is-rounded">
            {content.name}
          </button>
        ))}
      </div>
    );
  }
}
export default ContentsButton;
