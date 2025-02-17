"use server";

// AttackVolumeCard.tsx
import ApiService from "@/services/api-service";
import { Card, CardContent } from "@mui/material";
import TitleRow from "./TitleRow";
import MaximumVolume from "./Volumes/MaximumValue";
import PreviousVolumes from "./Volumes/PreviousVolumes";
import convertToGbps from "../utils/convertToGbps";

const { getAttackVolumes } = new ApiService();

export default async function AttackVolumeCard() {
  const response = await getAttackVolumes();
  const volumes = "error" in response ? [] : convertToGbps(response);
  const [maxVolume] = volumes;
  const [, ...previousVolumes] = volumes;

  const unit = "Gbps";
  return (
    <Card
      sx={{
        backgroundColor: "#1b1e2e",
        color: "#fff",
        p: 1,
        borderRadius: 2,
        minWidth: 300,
        position: "relative", // allows floating badge
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <CardContent sx={{ pb: "16px !important" }}>
        {/* Title Row */}
        <TitleRow />

        <MaximumVolume {...{ maxVolume, unit }} />

        {/* Previous Volumes Row */}
        <PreviousVolumes {...{ previousVolumes, unit }} />
      </CardContent>
    </Card>
  );
}
