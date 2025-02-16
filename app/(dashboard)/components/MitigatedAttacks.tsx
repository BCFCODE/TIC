// components/MitigatedAttacks.tsx
import ApiService from "@/services/api-service";
import { Card, CardContent, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const { getCountChart } = new ApiService();

export default async function MitigatedAttacks() {
  const response = await getCountChart();

  return (
    <Card
      sx={{
        backgroundColor: "#1b1e2e",
        color: "#fff",
        p: 2,
        minWidth: 275,
        minHeight: '100%',
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <CardContent>
        <TrendingUpIcon sx={{ color: "#6e7582", fontSize: 48 }} />
        <Typography variant="h3" sx={{ color: "#6ee7b7", fontWeight: "bold" }}>
          {"count" in response ? response.count : null}
        </Typography>
        <Typography variant="body2" component='div'>
          Number Of{" "}
          <Typography component="span" style={{ color: "#6ee7b7" }}>
            Mitigated
          </Typography>{" "}
          Attacks
        </Typography>
      </CardContent>
    </Card>
  );
}
