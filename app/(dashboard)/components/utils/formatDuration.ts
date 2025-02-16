export type FormattedDuration = [
  { value: number; label: "DAYS" },
  { value: number; label: "HOURS" },
  { value: number; label: "MINUTES" },
];

function formatDuration(ms: number): FormattedDuration {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  return [
    { value: days, label: "DAYS" },
    { value: hours, label: "HOURS" },
    { value: minutes, label: "MINUTES" },
  ];
}

export default formatDuration;
