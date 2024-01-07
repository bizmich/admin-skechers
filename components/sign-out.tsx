"use client";
import { IconLogout } from "@tabler/icons-react";
import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function SignOut() {
  return (
    <Button variant="ghost" size="icon" onClick={() => signOut()}>
      <IconLogout />
    </Button>
  );
}
