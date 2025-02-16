import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// Import Grid2
import SumOfAttacks from "./components/AttacksSum";
import AttackSumCard from "./components/AttacksSum/Card";
import AttackVolumeCard from "./components/AttackVolume/AttackVolumeCard";
import DurationCard from "./components/DurationCard/DurationCard";
import MitigatedAttacks from "./components/MitigatedAttacks";
import BillionPackets from "./components/AttacksSum/BillionPackets";
import PetaBytes from "./components/AttacksSum/PetaBytes";

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
                <AttackVolumeCard maxVolume={831.6} unit="Gbps" />
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
            <DurationCard days={56} hours={15} minutes={55} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
