"use client";

import { useRouter } from "next/navigation";
import { buttonVariants } from "./ui/button";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem("designOptions");
    router.push("/api/auth/logout");
  };

  return (
    <button
      onClick={handleSignOut}
      className={buttonVariants({
        size: "sm",
        variant: "ghost",
      })}
    >
      Sign out
    </button>
  );
}
