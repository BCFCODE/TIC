const convertBitsToPB = (sumOfBits: number): string => {
  const BITS_IN_BYTE = 8;
  const BYTES_IN_PB = 10 ** 15;

  const petabytes = sumOfBits / (BITS_IN_BYTE * BYTES_IN_PB);
  return petabytes.toFixed(2);
}

export default convertBitsToPB;
