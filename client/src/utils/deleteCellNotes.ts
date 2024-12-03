export default function deleteCellNotes(row: number, col: number) {
  let recentNotes: Record<string, any> | null = JSON.parse(
    localStorage.getItem("recentNotes") || "{}"
  );

  if (recentNotes && recentNotes[row * 10 + col])
    delete recentNotes[row * 10 + col];

  if (recentNotes && Object.keys(recentNotes).length > 0)
    localStorage.setItem("recentNotes", JSON.stringify(recentNotes));
  else localStorage.removeItem("recentNotes");
}
