import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// Import Grid2
import SumOfAttacks from "./components/AttacksSum";
import BillionPackets from "./components/AttacksSum/BillionPackets";
import PetaBytes from "./components/AttacksSum/PetaBytes";
import DurationCard from "./components/DurationCard";
import AttackVolumeCard from "./components/MaximumAttackVolumes/Card";
import MitigatedAttacks from "./components/MitigatedAttacks";

export default function HomePage() {
  return (
    <>
      <Typography>
        The Radar report has been extracted from the data of the DDoS detection
        and Mitigation system, which has been deployed and operated by the TIC
        company as the country&apos;s defense shield, providing effective
        protection against attacks.
      </Typography>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {/* First Row */}
          <Grid size={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "column", lg: "row" },
                gap: 2,
              }}
            >
              <Grid size={{ xs: 12, lg: 4 }}>
                <MitigatedAttacks />
              </Grid>
              <Grid size={{ xs: 12, lg: 8 }}>
                <AttackVolumeCard />
              </Grid>
            </Box>
          </Grid>

          {/* Second Row */}
          <Grid size={12}>
            <SumOfAttacks>
              <Grid size={{ sm: 12, md: 12, lg: 6 }}>
                <BillionPackets />
              </Grid>
              <Grid size={{ sm: 12, md: 12, lg: 6 }}>
                <PetaBytes />
              </Grid>
            </SumOfAttacks>
          </Grid>

          {/* Third Row */}
          <Grid size={12}>
            <DurationCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
