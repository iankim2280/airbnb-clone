import React from "react";

class ContentsCard extends React.Component {
  render() {
    return (
      <div class="card card1 mg-zero">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src={
                "https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg"
              }
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <ul class="rating">
                <li>Entire cottage·3 beds</li>
                <li>
                  <i class="fa fa-star" aria-hidden="true"></i>4.90
                </li>
              </ul>
              <p class="subtitle is-6">Summer cottage on the shore</p>
              <p class="subtitle is-6">
                <b>$116 CAD</b>/night
              </p>
              <p class="subtitle is-6">$580 CAD total</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContentsCard;
