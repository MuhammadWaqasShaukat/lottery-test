"use client";
import { useRouter } from "next/navigation";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    router.push("/classic");
  });

  if (session && session.user) {
    console.log("session.user", session?.user);
    return (
      <button onClick={() => signOut()}>{session.user.name} Sign Out</button>
    );
  }

  return <button onClick={() => signIn()}>SignIn</button>;
}
