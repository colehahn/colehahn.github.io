import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div>
      <h3>:( sorry, we don't recognize that url</h3>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default Footer;
