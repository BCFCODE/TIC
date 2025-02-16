import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// Import Grid2
import MitigatedAttacks from "./components/MitigatedAttacks";
import AttackVolumeCard from "./components/AttackVolume/AttackVolumeCard";
import DurationCard from "./components/DurationCard/DurationCard";
import AttackSumCard from "./components/AttacksSum/Card";
import AttacksSumContainer from "./components/AttacksSum/Container";

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
            <AttacksSumContainer title="Cumulative Sum of Mitigated DDoS Attacks">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "column", lg: "row" },
                  gap: 2,
                }}
              >
                <Grid size={{ sm: 12, md: 12, lg: 6 }}>
                  <AttackSumCard value={66455.45} unit="Billion Packets" />
                </Grid>
                <Grid size={{ sm: 12, md: 12, lg: 6 }}>
                  <AttackSumCard value={68.72} unit="Peta Bytes" />
                </Grid>
              </Box>
            </AttacksSumContainer>
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
