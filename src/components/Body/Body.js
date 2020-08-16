import React from "react";

const Body = ({ isAuth }) => {
  const renderData = isAuth ? <div>Authenticated Body</div> : <div>Body</div>;
  return renderData;
};

export default Body;
