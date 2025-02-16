import { Box } from "@mui/material";
import { ReactNode } from "react";
import AttacksSumContainer from "./Container";

interface Props {
  children: ReactNode;
}

const SumOfAttacks = ({ children }: Props) => {
  return (
    <AttacksSumContainer title="Cumulative Sum of Mitigated DDoS Attacks">
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "column", lg: "row" },
          gap: 2,
        }}
      >
        {children}
      </Box>
    </AttacksSumContainer>
  );
};

export default SumOfAttacks;
