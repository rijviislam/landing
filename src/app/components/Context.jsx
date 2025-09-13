"use client";

import useLenis from "../hooks/useLenis";

const Context = ({ children }) => {
  useLenis();

  return <div className="content-wrapper">{children}</div>;
};
export default Context;
