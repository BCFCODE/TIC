// AttackVolumeCard.tsx
import { Card, CardContent, Typography, Box } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
// You can pass these volumes as props, or fetch them from an API
const previousVolumes = [
  "830.5 Gbps",
  "826.7 Gbps",
  "795.8 Gbps",
  "786.5 Gbps",
];

interface AttackVolumeCardProps {
  maxVolume: number; // e.g., 831.6
  unit: string; // e.g., "Gbps"
}

export default function AttackVolumeCard({
  maxVolume,
  unit,
}: AttackVolumeCardProps) {
  return (
    <Card
      sx={{
        backgroundColor: "#1b1e2e",
        color: "#fff",
        p: 1,
        borderRadius: 2,
        minWidth: 300,
        position: "relative", // allows floating badge
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <CardContent sx={{ pb: "16px !important" }}>
        {/* Title Row */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          {/* <ShieldAlert size={24} color="#6ee7b7" /> */}
          <RocketLaunchIcon sx={{ fontSize: { md: 40, lg: 60 } }} />
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#fff" }}
            >
              Maximum Attack Volumes
            </Typography>
            <Typography variant="caption" sx={{ color: "#6ee7b7" }}>
              BITS
            </Typography>
          </Box>
        </Box>

        {/* Big Metric */}
        <Typography
          variant="h3"
          sx={{ color: "#6ee7b7", fontWeight: "bold", mb: 1 }}
        >
          {maxVolume.toLocaleString()} {unit}
        </Typography>

        {/* Subtitle */}
        <Typography variant="body2" sx={{ mb: 2 }}>
          Maximum Volume
          <Typography>
            Of The{" "}
            <Typography
              component="span"
              sx={{ color: "#6ee7b7", fontWeight: "bold" }}
            >
              Mitigated
            </Typography>{" "}
            Attacks
          </Typography>
        </Typography>

        {/* Previous Volumes Row */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {previousVolumes.map((vol) => (
            <Box
              key={vol}
              sx={{
                px: 1.5,
                py: 0.5,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 1,
                fontSize: { md: "0.7rem", lg: "1rem" },
              }}
            >
              {vol}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
