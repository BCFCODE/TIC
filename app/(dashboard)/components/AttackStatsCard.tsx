// components/AttackStatsCard.tsx
import ApiService from "@/services/api-service";
import { Card, CardContent, Typography } from "@mui/material";
import { TrendingUp } from "lucide-react";

const { getCountChart } = new ApiService();

export default async function AttackStatsCard() {
  const response = await getCountChart();

  return (
    <Card
      sx={{ backgroundColor: "#1b1e2e", color: "#fff", p: 2, minWidth: 275 }}
    >
      <CardContent>
        <TrendingUp size={32} color="#6ee7b7" />
        <Typography variant="h4" sx={{ color: "#6ee7b7", fontWeight: "bold" }}>
          {"count" in response ? response.count : null}
        </Typography>
        <Typography variant="body2">
          Number Of{" "}
          <Typography style={{ color: "#6ee7b7" }}>Mitigated</Typography>{" "}
          Attacks
        </Typography>
      </CardContent>
    </Card>
  );
}
