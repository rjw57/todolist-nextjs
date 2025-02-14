// MUI components
import { AppBar, Toolbar } from "@mui/material";

// Next.js components
import Image from "next/image";

import logoUrl from "../images/cambridge-logo.png";

const Header = () => {
  return (
    <AppBar position="static" variant="headerBox">
      <Toolbar>
        <Image
          width={160}
          height={34}
          src={logoUrl}
          alt="University of Cambridge"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
