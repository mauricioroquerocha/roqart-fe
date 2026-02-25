"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center p-4 text-center">
      <div className="space-y-4 max-w-md border rounded-xl p-8 bg-card shadow-sm">
        <TypographyH2 className="text-secondary-foreground">404 - Page Not Found</TypographyH2>
        <TypographyP className="text-muted-foreground">
          The page you are looking for doesn&apos;t exist or has been moved.
        </TypographyP>
        <div className="mt-6 flex justify-center gap-4">
          <Button asChild variant="default">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/products">Shop Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
