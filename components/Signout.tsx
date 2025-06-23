"use client";

import { auth } from "@/lib/auth";
import { Button } from "./ui/button";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Signout() {
    const router = useRouter();
  async function handleSignOut() {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
            toast.success("Signed out successfully.");
            router.push("/auth/login");
        },
        onError: (ctx) => {
          toast.error(
            `Sign out failed: ${ctx.error.message || "Unknown error"}`
          );
        },
      },
    });
  }
  return <Button onClick={handleSignOut}>Sign out</Button>;
}
