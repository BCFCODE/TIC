import { Box, Card, CircularProgress, Typography } from "@mui/material";
import Gauge from "../MaximumAttackVolumes/Gauge";
// import { Gauge } from "lucide-react";

interface DurationCardProps {
  days: number;
  hours: number;
  minutes: number;
}

export default function DurationCard({
  days,
  hours,
  minutes,
}: DurationCardProps) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#0c162d",
        color: "#fff",
        p: 2,
        borderRadius: 2,
        minWidth: 600,
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          ml: 2,
        }}
      >
        <Gauge value={days} />
      </Box>

      {/* Time Boxes */}
      <Box sx={{ display: "flex", gap: 1, ml: 3 }}>
        {[
          { value: days, label: "DAYS" },
          { value: hours, label: "HOURS" },
          { value: minutes, label: "MINUTES" },
        ].map((time, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              borderRadius: 1,
              minWidth: 100,
              color: "#fff",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
              backgroundColor: "#1b1e2e",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              p: 1.5,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff" }}>
              {time.value}
            </Typography>
            <Typography variant="caption" sx={{ color: "#b0b8d4" }}>
              {time.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Text Content */}
      <Box sx={{ ml: 3 }}>
        <Typography
          variant="body1"
          sx={{ color: "#6ee7b7", fontWeight: "bold" }}
        >
          Maximum
        </Typography>
        <Typography variant="h6">Attack Duration</Typography>
      </Box>
    </Card>
  );
}
