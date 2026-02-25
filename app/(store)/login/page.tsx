import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";
import { TypographyH2, TypographyP } from "@/components/ui/typography";

export default async function LoginPage() {
  const session = await auth();

  // If already logged in, redirect to dashboard
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-md p-8 space-y-6 bg-card border rounded-lg shadow-sm">
        <div className="text-center">
          <TypographyH2>Welcome back</TypographyH2>
          <TypographyP className="text-muted-foreground mt-2">
            Enter your email to sign in to your account
          </TypographyP>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
