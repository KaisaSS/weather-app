import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <Loader type="Rings" color="#00B" height={200} width={200} />
    </div>
  );
};

export default Spinner;
