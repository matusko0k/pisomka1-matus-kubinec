// src/app/page.tsx

"use client"; // Add this line to indicate this is a client component

import { useSession, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1>Home Page</h1>
      {session ? (
        <>
          <h2>Welcome, {session.user?.name}!</h2>
          <button onClick={() => signOut()} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
            Sign Out
          </button>
        </>
      ) : (
        <h2>Please sign in to see your profile.</h2>
      )}
    </div>
  );
}
