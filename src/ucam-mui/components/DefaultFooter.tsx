import { Grid, Link, Typography } from "@mui/material";
import Image from "next/image";

import { termsAndConditions, userAdminEmail } from "../consts";
import logoUrl from "../images/cambridge-reversed-white-logo.png";

import Footer from "./Footer";

const DefaultFooter = () => {
  const year = new Date().getFullYear();

  return (
    <Footer
      sx={{
        pl: { xs: "72px", md: "228px" },
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
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
    </Footer>
  );
};

export default DefaultFooter;
