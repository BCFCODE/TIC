"use server";
import React from "react";
import AttackSumCard from "./Card";
import ApiService from "@/services/api-service";

const { getPPSsum } = new ApiService();

const BillionPackets = async () => {
  const response = await getPPSsum();

  return (
    <AttackSumCard
      value={
        !("error" in response) ? (response.sum / 1e9).toFixed(2) : "Loading..."
      }
      unit="Billion Packets"
    />
  );
};

export default BillionPackets;
