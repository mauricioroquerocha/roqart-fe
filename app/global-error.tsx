"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "@/components/ui/typography";

export default function GlobalError({
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
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
          <div className="space-y-4 max-w-md">
            <TypographyH2>Something went critically wrong!</TypographyH2>
            <TypographyP className="text-muted-foreground">
              A critical error occurred while rendering the application. We&apos;ve been notified.
            </TypographyP>
            <Button onClick={() => reset()} variant="default">
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
