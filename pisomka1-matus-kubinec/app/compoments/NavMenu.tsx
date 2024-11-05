// app/components/NavMenu.tsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Link from "next/link";

export default function NavMenu() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link href="/">Home</Link>
        </MenuItem>
        {session ? (
          <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
        ) : (
          <MenuItem onClick={() => signIn("google")}>Sign In with Google</MenuItem>
        )}
      </Menu>
    </div>
  );
}
