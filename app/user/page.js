"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { status, data } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });
  // console.log("data", data);

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  return "User is logged in";
};

export default page;
