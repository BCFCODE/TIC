export interface Volume {
  value: number;
}

const convertToGbps = (volumes: Volume[]): string[] => {
  const GIGABIT = 10 ** 9;

  return volumes.map((item) => (item.value / GIGABIT).toFixed(1));
};


export default convertToGbps;
