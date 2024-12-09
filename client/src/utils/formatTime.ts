export default function formatTime(completionTime: number): string {
  const hours = Math.floor(completionTime / 3600000);
  const minutes = Math.floor((completionTime % 3600000) / 60000);
  const seconds = Math.floor((completionTime % 60000) / 1000);

  return [
    hours > 0 ? hours : null,
    String(minutes).padStart(2, "0"),
    String(seconds).padStart(2, "0"),
  ]
    .filter(Boolean)
    .join(":");
}
