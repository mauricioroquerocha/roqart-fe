"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    startTransition(async () => {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        // Handle error visually
        alert("Invalid credentials"); // Temp until Toast is added
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none" htmlFor="email">
          Email
        </label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="m@example.com" 
          required 
          disabled={isPending}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none" htmlFor="password">
          Password
        </label>
        <Input 
          id="password" 
          name="password" 
          type="password" 
          required 
          disabled={isPending}
        />
      </div>
      <Button className="w-full mt-6" type="submit" disabled={isPending}>
        {isPending ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
