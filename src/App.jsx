import './App.css'
import { useState, useEffect } from 'react';
import Digits from './components/digits';
import Grid from './components/grid';
import Header from './components/header';

function App() {
  const [cells,setCells] = useState(Array(81).fill(""));
  const [chosenCell, setChosenCell] = useState(false);
  const [chosenDigit, setChosenDigit] = useState(false);

  useEffect(()=>{
    console.log(chosenCell);
    if (chosenCell!==""&&chosenDigit!==false) {
      const input = (chosenDigit<10)?chosenDigit:"";
      const updatedCells = cells.map((cell,index)=>{
        if (index === chosenCell)
          return input;
        else return cell;
      })
      setCells(updatedCells);
      setChosenDigit(false);
      const glowing = document.getElementById(chosenCell);
      glowing.classList.remove("glow");
      setChosenCell(false);
    }
  },[chosenCell, chosenDigit]);

  return (
    <div>
        <Header/>
        <Grid cells={cells} setCells={setCells} chosenCell={chosenCell} setChosenCell={setChosenCell}/>
        <Digits chosenCell={chosenCell} setChosenDigit={setChosenDigit}/>
    </div>
  )
}

export default App
