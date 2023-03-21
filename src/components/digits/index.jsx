import Digit from './digit';

export default function Digits({chosenCell, setChosenDigit}) {
    return (
      <div className='digits'>
        <>
          {Array(10).fill().map((num,ind)=>
            <Digit key={ind} num={ind+1} chosenCell={chosenCell} setChosenDigit={setChosenDigit}/>
          )}
        </>
      </div>
    )
  }