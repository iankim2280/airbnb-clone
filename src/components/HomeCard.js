import React from "react";

class HomeCard extends React.Component {
  render() {
    return (
      <div>
        <div className="card1 pd-10">
          <div className="card-image shadowBox">
            <figure className="image is-4by3">
              <img
                src={"https://picsum.photos/seed/picsum/600/400"}
                alt="Placeholder image"
              />
              <div className="text-block pd-10">
                <p>Online Experiences</p>
                <p>
                  Unique activities we can do together, led by a world of hosts.
                </p>
              </div>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeCard;
