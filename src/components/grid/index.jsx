import Cell from './cell';
import axios from "axios";
import { useEffect, useState } from "react";


const url = "https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value,solution,difficulty},results,message}}";

export default function Grid({cells, setCells, chosenCell, setChosenCell}) {
    const [data, setData] = useState(false);

    const getData = async () => {
        await axios.get(url)
          .then(res=>{
              setData(res.data.newboard.grids);
          }).catch(err=>{
              console.log(err);
          });
    }

    useEffect(()=>{
        getData();
    },[]);

    useEffect(()=>{
        if (data) {
            const flat = [];
            data[0].value.map((el)=>{
               el.map((e)=>{
                flat.push(e);
               })
            });
            setCells(flat);
        };
    },[data]);

    return (
        <>
            <div className="overgrid">
                {cells.map((cell,ind)=>
                    <Cell key={ind} id={ind} cell={cell} chosenCell={chosenCell} setChosenCell={setChosenCell}/>
                )}
                <div className='vertical-divider-1'></div>
                <div className='vertical-divider-2'></div>
                <div className='horizontal-divider-1'></div>
                <div className='horizontal-divider-2'></div>
            </div>
        </>
    )
  }