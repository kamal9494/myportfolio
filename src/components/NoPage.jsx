import React from "react";
import { NavLink } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="h-screen bg-bg-primary flex flex-col justify-center items-center">
      <div className="p-5">
        <div className="text-5xl font-medium text-text-highlight">404</div>
      </div>
      <span className="text-text-primary">Page not exist</span>
      <div className="text-text-primary p-4">
        Would you like to view my{" "}
        {
          <NavLink className="text-blue-500" to="/">
            Profile
          </NavLink>
        }{" "}
        ?
      </div>
    </div>
  );
};
export default NoPage;
