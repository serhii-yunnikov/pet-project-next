import { AppBar } from "@mui/material";
import { Navigation } from "./Navigation";

function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/Profile" },
    { label: "About", href: "/about" },
  ];

  return (
    <header>
        <Navigation navLinks={navItems} />
    </header>
  );
}

export default Header;
