"use server";

import ApiService from "@/services/api-service";
import { Card } from "@mui/material";
import formatDuration from "../utils/formatDuration";
import Icon from "./Icon";
import TextContent from "./TextContent";
import TimeBoxes from "./TimeBoxes";

const { getDuration } = new ApiService();

export default async function DurationCard() {
  const response = await getDuration();
  const ms = "error" in response ? 0 : response.duration;
  const formattedDurations = formatDuration(ms);
  const [days] = formattedDurations;
  
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#0c162d",
        color: "#fff",
        p: 2,
        borderRadius: 2,
        minWidth: 600,
      }}
    >
      <Icon days={days.value} />

      <TimeBoxes timeBoxes={formatDuration(ms)} />

      <TextContent />
    </Card>
  );
}
