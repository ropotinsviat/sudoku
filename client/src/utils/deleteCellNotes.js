export default function deleteCellNotes(row, col) {
  let recentNotes = JSON.parse(localStorage.getItem("recentNotes"));

  if (recentNotes && recentNotes[row * 10 + col])
    delete recentNotes[row * 10 + col];

  if (recentNotes && Object.keys(recentNotes).length > 0)
    localStorage.setItem("recentNotes", JSON.stringify(recentNotes));
  else localStorage.removeItem("recentNotes");
}
