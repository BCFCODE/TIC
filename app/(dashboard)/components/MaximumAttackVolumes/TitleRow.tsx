import { Box, Typography } from "@mui/material";
import React from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const TitleRow = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
      <RocketLaunchIcon sx={{ fontSize: { md: 40, lg: 60 } }} />
      <Box>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "#fff", fontSize: "1.8rem" }}
        >
          Maximum Attack Volumes
        </Typography>
        <Typography variant="caption" sx={{ color: "#6ee7b7" }}>
          BITS
        </Typography>
      </Box>
    </Box>
  );
};

export default TitleRow;
