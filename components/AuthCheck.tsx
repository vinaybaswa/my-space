"use client";

import { useSession } from "next-auth/react";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === "loading") {
    return <>...</>;
  } else if (status === "unauthenticated") {
    return <></>;
  } else {
    return <>{children}</>;
  }
}
