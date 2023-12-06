import React from "react";
import getSession from "../actions/getSession";

const page = async () => {
  const session = await getSession();
  console.log("session", session);
  return <div>page</div>;
};

export default page;
