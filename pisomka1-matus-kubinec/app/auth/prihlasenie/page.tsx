// src/app/auth/prihlasenie/page.tsx

"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1>Sign In</h1>
      <button
        onClick={() => signIn("google")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}
