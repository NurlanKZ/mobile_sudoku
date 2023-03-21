export default function Digit({num, chosenCell, setChosenDigit}) {
  const handleDigitClick = (e) => {
    if (chosenCell!==false)
      setChosenDigit(num);
  }

  return (
    <div className="digit" onClick={handleDigitClick}>
        {(num<10)?num:""}
    </div>
  )
}