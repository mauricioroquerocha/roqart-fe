"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { H2, P } from "@/components/ui/typography";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[70vh] flex-col items-center justify-center p-4 text-center">
      <div className="space-y-4 max-w-md border rounded-xl p-8 bg-card shadow-sm">
        <H2 className="text-destructive">Oops, something went wrong!</H2>
        <P className="text-muted-foreground">
          We are having trouble loading this page. Please try again.
        </P>
        <Button onClick={() => reset()} variant="secondary" className="mt-4">
          Try again
        </Button>
      </div>
    </div>
  );
}
