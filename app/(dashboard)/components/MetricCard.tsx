// components/MetricCard.tsx
import { Card, CardContent, Typography } from "@mui/material";

interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
}

export default function MetricCard({ title, value, unit }: MetricCardProps) {
  return (
    <Card sx={{ backgroundColor: "#1b1e2e", color: "#fff", p: 2, minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>{title}</Typography>
        <Typography variant="h4" sx={{ color: "#6ee7b7", fontWeight: "bold" }}>
          {value.toLocaleString()} {unit}
        </Typography>
      </CardContent>
    </Card>
  );
}