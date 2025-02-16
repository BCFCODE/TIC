const convertPacketsToBillion = (packets: number): string => {
  const BILLION = 10 ** 9;

  const billionPackets = packets / BILLION;
  return billionPackets.toFixed(2);
};

export default convertPacketsToBillion;
