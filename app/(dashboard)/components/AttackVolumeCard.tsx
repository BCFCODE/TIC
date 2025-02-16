// components/AttackVolumeCard.tsx
import { Card, CardContent, Typography } from "@mui/material";
import { ShieldAlert } from "lucide-react";

interface AttackVolumeCardProps {
  maxVolume: number;
  unit: string;
}

export default function AttackVolumeCard({
  maxVolume,
  unit,
}: AttackVolumeCardProps) {
  return (
    <Card
      sx={{ backgroundColor: "#1b1e2e", color: "#fff", p: 2, minWidth: 275 }}
    >
      <CardContent>
        <ShieldAlert size={32} color="#6ee7b7" />
        <Typography variant="h4" sx={{ color: "#6ee7b7", fontWeight: "bold" }}>
          {maxVolume.toLocaleString()} {unit}
        </Typography>
        <Typography variant="body2">
          Maximum Volume Of The{" "}
          <Typography sx={{ color: "#6ee7b7" }}>Mitigated</Typography> Attacks
        </Typography>
      </CardContent>
    </Card>
  );
}
