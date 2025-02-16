// components/DurationCard.tsx
import { Card, CardContent, Typography } from "@mui/material";

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
      sx={{ backgroundColor: "#1b1e2e", color: "#fff", p: 2, minWidth: 275 }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Attack Duration
        </Typography>
        <Typography variant="h4" sx={{ color: "#6ee7b7", fontWeight: "bold" }}>
          {days} Days {hours} Hours {minutes} Minutes
        </Typography>
      </CardContent>
    </Card>
  );
}
