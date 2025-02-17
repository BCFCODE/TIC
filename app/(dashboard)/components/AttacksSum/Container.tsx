import { Box, Card, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

const AttacksSumContainer = ({ children, title }: Props) => {
  return (
    <Card
      sx={{
        backgroundColor: "#1b1e2e",
        color: "#fff",
        p: 2,
        minWidth: 275,
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Title */}
      <Typography
        variant="subtitle2"
        sx={{  fontWeight: "bold", fontSize: 21, mb: 1, ml: 2 }}
      >
        {title}
      </Typography>
      {children}
    </Card>
  );
};

export default AttacksSumContainer;
