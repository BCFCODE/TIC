import React from "react";
import AttackSumCard from "./Card";
import { getApi } from "@/services/api-service";
import convertBitsToPB from "../utils/convertBitsToPB";

// const { getPetaBytes } = new ApiService();

type PetaBytesResponse = { count: number; sum: number } | { error: string };

const PetaBytes = async () => {
  // const response = await getPetaBytes();
  const response = await getApi<PetaBytesResponse>("sum-lrl");
  return (
    <AttackSumCard
      value={
        !("error" in response) ? convertBitsToPB(response.sum) : "Loading..."
      }
      unit="Peta Bytes"
    />
  );
};

export default PetaBytes;
