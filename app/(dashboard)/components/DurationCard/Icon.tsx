import React from "react";
import Gauge from "../MaximumAttackVolumes/Gauge";
import { Box } from "@mui/material";

interface Props {
  days: number;
}

const Icon = ({ days }: Props) => {
  return (
    <Box
      sx={{
        width: 100,
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "50%",
        ml: 2,
      }}
    >
      <Gauge value={days} />
    </Box>
  );
};

export default Icon;
