export interface Volume {
  value: number;
}

const convertToGbps = (volumes: Volume[]): string[] => {
  const GIGABIT = 2 ** 30; 

  return volumes.map((item) => (item.value / GIGABIT).toFixed(1));
};

export default convertToGbps;