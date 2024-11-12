import "../../assets/css/notes.css";

export default function Notes({ notes }) {
  function getNotePositionClass(note) {
    const positionMap = {
      1: "top-left",
      2: "top-center",
      3: "top-right",
      4: "middle-left",
      5: "middle-center",
      6: "middle-right",
      7: "bottom-left",
      8: "bottom-center",
      9: "bottom-right",
    };
    return positionMap[note] || "";
  }

  return (
    <div className="notes">
      {notes.map((note) => (
        <span key={note} className={`note ${getNotePositionClass(note)}`}>
          {note}
        </span>
      ))}
    </div>
  );
}
