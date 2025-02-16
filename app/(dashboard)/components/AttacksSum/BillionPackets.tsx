"use server";
import React from "react";
import AttackSumCard from "./Card";
import ApiService from "@/services/api-service";
import convertPacketsToBillion from "../utils/convertPacketsToBillion";

const { getPPSsum } = new ApiService();

const BillionPackets = async () => {
  const response = await getPPSsum();

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
