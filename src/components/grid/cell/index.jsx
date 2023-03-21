export default function Cell({id, cell, chosenCell, setChosenCell}) {
  const handleCellClick = (e) => {
    if (e.target.classList.contains("glow")) {
      setChosenCell(false);
      e.target.classList.remove("glow");
    } else {
      if (chosenCell!==false) {
        const glowing = document.getElementById(chosenCell);
        glowing.classList.remove("glow");
      }
      setChosenCell(id);
      e.target.classList.add("glow");
    }
  }

  return (
    <div className="grid-cell" id={id} onClick={handleCellClick}>
        {(cell)?cell:""}
    </div>
  )
}