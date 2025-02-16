import { Box, Card } from "@mui/material";

interface GaugeProps {
  value: number; // Between 0 and 100
}

export default function Gauge({ value }: GaugeProps) {
  const angle = ((value > 100 ? 100 % value : value) / 100) * 180 - 90; // Convert value to rotation angle (-90° to +90°)

  return (
    <Card
      sx={{
        width: 120,
        height: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0c162d",
        color: "#fff",
        p: 2,
        borderRadius: "50%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* SVG Gauge */}
      <svg width="100" height="100" viewBox="0 0 100 50">
        {/* Background Arc */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          stroke="#4b5563"
          strokeWidth="6"
          fill="none"
        />
        {/* Foreground Arc */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          stroke="#6b7280"
          strokeWidth="6"
          fill="none"
          strokeDasharray="120"
          strokeDashoffset={120 - value * 1.2}
        />
      </svg>

      {/* Needle */}
      <Box
        sx={{
          position: "absolute",
          width: "4px",
          height: "30px",
          backgroundColor: "#6b7280",
          borderRadius: "2px",
          bottom: "50%",
          left: "50%",
          transformOrigin: "bottom",
          transform: `rotate(${angle}deg) translateX(-50%)`,
          transition: "transform 0.3s ease-in-out",
        }}
      />
    </Card>
  );
}
