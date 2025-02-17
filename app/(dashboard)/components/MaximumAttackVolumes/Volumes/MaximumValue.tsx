import { Typography } from "@mui/material";
import React from "react";

interface Props {
  maxVolume: string;
  unit: string;
}

const MaximumVolume = ({ maxVolume, unit }: Props) => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ color: "#6ee7b7", fontWeight: "bold", mb: 1 }}
      >
        {maxVolume} {unit}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }} component="div">
        Maximum Volume
        <Typography>
          Of The{" "}
          <Typography
            component="span"
            sx={{ color: "#6ee7b7", fontWeight: "bold" }}
          >
            Mitigated
          </Typography>{" "}
          Attacks
        </Typography>
      </Typography>
    </>
  );
};

export default MaximumVolume;
