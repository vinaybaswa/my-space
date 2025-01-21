"use client";

import { useSession } from "next-auth/react";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === "loading") {
    return <p>Loading...</p>;
  } else if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  } else {
    return <>{children}</>;
  }
}
