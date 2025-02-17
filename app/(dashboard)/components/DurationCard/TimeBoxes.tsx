import { Box, Typography } from "@mui/material";
import React from "react";
import { FormattedDuration } from "../utils/formatDuration";

interface Props {
  timeBoxes: FormattedDuration;
}

const TimeBoxes = ({ timeBoxes }: Props) => {
  return (
    <Box sx={{ display: "flex", gap: 1, ml: 3 }}>
      {timeBoxes.map(({ value, label }, index) => (
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
            {value}
          </Typography>
          <Typography variant="caption" sx={{ color: "#b0b8d4" }}>
            {label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TimeBoxes;
