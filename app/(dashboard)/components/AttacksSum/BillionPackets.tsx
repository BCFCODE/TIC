"use server";
import { getApi } from "@/services/api-service";
import convertPacketsToBillion from "../utils/convertPacketsToBillion";
import AttackSumCard from "./Card";

// const { getPPSsum } = new ApiService();
type PacketCountResponse = { count: number; sum: number } | { error: string };

const BillionPackets = async () => {
  // const response = await getPPSsum();
  const response = await getApi<PacketCountResponse>("sum-pps");

  return (
    <AttackSumCard
      value={
        !("error" in response)
          ? convertPacketsToBillion(response.sum)
          : "Loading..."
      }
      unit="Billion Packets"
    />
  );
};

export default BillionPackets;
