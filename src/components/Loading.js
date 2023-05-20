import React from "react";
import ReactLoading from "react-loading";

const Loading = () => (
  <div style={{height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", margin: "auto", zIndex: "10"}}>
    <ReactLoading type={"bars"} color="#F2701D" height={100} width={100} />
  </div>
);

export default Loading;
