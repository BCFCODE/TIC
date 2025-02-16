import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// Import Grid2
import AttackStatsCard from "./components/AttackStatsCard";
import AttackVolumeCard from "./components/AttackVolumeCard";
import DurationCard from "./components/DurationCard";
import MetricCard from "./components/MetricCard";

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
          <Grid size={{ xs: 12, md: 4 }}>
            <AttackStatsCard />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <MetricCard
              title="Cumulative Sum of Mitigated DDoS Attacks"
              value={66455.45}
              unit="Billion Packets"
            />
            <MetricCard title="" value={68.72} unit="Peta Bytes" />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <AttackVolumeCard maxVolume={831.6} unit="Gbps" />
          </Grid>

          {/* Second Row */}
          <Grid size={12}>
            <DurationCard days={56} hours={15} minutes={55} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
