"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      <pre>{error.message}</pre>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
