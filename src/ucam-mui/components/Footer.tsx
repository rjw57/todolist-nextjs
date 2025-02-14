// MUI components
import { BottomNavigation, Grid, Link, Typography } from "@mui/material";

// Next.js components
import Image from "next/image";

// Constants
import { termsAndConditions, userAdminEmail } from "../consts";

import logoUrl from "../images/cambridge-reversed-white-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    // TODO: replace with more appropriate component
    <BottomNavigation component="footer">
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pl: { xs: "72px", md: "228px" },
        }}
      >
        <Grid item xs={12} sm={12} md={4}>
          <Image
            src={logoUrl}
            width={152}
            height={31}
            alt="University of Cambridge"
            priority={false}
          />
          <Typography variant="body" sx={{ mt: 1 }}>
            © {year} University of Cambridge Information Services
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Link href={termsAndConditions} target="_blank" variant="linkFooterUnderline">
            Terms and conditions
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="bodyFooter">
            Get help with setting up your University IT account.
          </Typography>
          <Link href={`mailto:${userAdminEmail}`} variant="linkFooter">
            {userAdminEmail}
          </Link>
        </Grid>
      </Grid>
    </BottomNavigation>
  );
};

export default Footer;
