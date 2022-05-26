import React from "react";
import { Link } from "react-router-dom";

function BackButton() {



  return (
    <div>
      <Link to="/" ><button className=" col-md-2 mt-4 btn btn-outline-danger">Geri</button></Link>
    </div>
  );
}

export default BackButton;
