import { Card, CardContent, Typography, Box } from "@mui/material";

interface Props {
  value: string;
  unit: string;
}

export default function AttackSumCard({ value, unit }: Props) {
  return (
    <Card
      sx={{
        backgroundColor: "#1b1e2e",
        color: "#fff",
        // p: 2,
        minWidth: 275,
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <CardContent>
        {/* Title */}
        <Typography
          variant="subtitle2"
          sx={{ color: "#6ee7b7", fontWeight: "bold", fontSize: "14px" }}
        >
          {unit.toUpperCase()}
        </Typography>

        {/* Value */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {value}
          </Typography>
        </Box>

        {/* Unit Label */}
        <Typography variant="body2" sx={{ opacity: 0.8 }} component='div'>
          Total Number of{" "}
          <Typography
            component="span"
            sx={{ color: "#6ee7b7", fontWeight: "bold" }}
          >
            Dropped
          </Typography>{" "}
          {unit}
        </Typography>
      </CardContent>
    </Card>
  );
}
