import { useEffect } from "react";
import Router from "next/router";

const Param = ({ children, info }) => {
  useEffect(() => {
    if (Object.keys(info).length <= 0) {
      Router.push("/");
    }
  }, []);
  return <>{children}</>;
};

export default Param;
