"use client";
import { useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { status, data } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
  });
  // console.log("data", data);

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  return "User is logged in";
};

export default page;
