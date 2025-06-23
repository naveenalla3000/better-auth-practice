"use client";

import { signIn } from "@/lib/auth-client";
import React from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const LoginForm = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    if (!data.email || !data.password) {
      toast.error("All fields are required.");
      return;
    }
    await signIn.email(
      {
        email: data.email as string,
        password: data.password as string,
      },
      {
        onRequest: () => {},
        onResponse: () => {},
        onError: (error) => {
          toast.error(
            error.error.message || "An error occurred during registration."
          );
        },
        onSuccess: () => {
          toast.success("Registration successful! Please check your email.");
        },
      }
    );
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />
      </div>
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
};

export default LoginForm;
