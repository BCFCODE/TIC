import { Box } from "@mui/material";
import React from "react";

interface Props {
  previousVolumes: string[];
  unit: string;
}

const PreviousVolumes = ({ previousVolumes, unit }: Props) => {
  return (
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
          {vol} {unit}
        </Box>
      ))}
    </Box>
  );
};

export default PreviousVolumes;
