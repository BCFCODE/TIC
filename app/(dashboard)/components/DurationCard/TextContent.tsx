import { Box, Typography } from "@mui/material";
import React from "react";

const TextContent = () => {
  return (
    <Box sx={{ ml: 3 }}>
      <Typography variant="body1" sx={{ color: "#6ee7b7", fontWeight: "bold" }}>
        Maximum
      </Typography>
      <Typography variant="h6">Attack Duration</Typography>
    </Box>
  );
};

export default TextContent;
