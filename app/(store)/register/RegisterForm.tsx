"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    startTransition(async () => {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      // TODO: Replace with actual registration API call to medusa/db
      console.log("Registering:", { name, email, password });
      
      // Temporary simulated register success, then auto sign-in
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        alert("Registration failed. Try again.");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none" htmlFor="name">
          Name
        </label>
        <Input 
          id="name" 
          name="name" 
          type="text" 
          placeholder="Juan Perez" 
          required 
          disabled={isPending}
        />
      </div>
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
        {isPending ? "Creating account..." : "Sign Up"}
      </Button>
    </form>
  );
}
