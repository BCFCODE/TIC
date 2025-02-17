import React from "react";
import AttackSumCard from "./Card";
import ApiService from "@/services/api-service";
import convertBitsToPB from "../utils/convertBitsToPB";

const { getPetaBytes } = new ApiService();

const PetaBytes = async () => {
  const response = await getPetaBytes();

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
