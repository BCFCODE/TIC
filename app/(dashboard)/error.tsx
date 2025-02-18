"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Error = () => {
  return (
    <Box>
      <Typography>
        An Error occurred, please check your connection or refresh...
      </Typography>

      <Button>Retry</Button>
    </Box>
  );
};

export default Error;
