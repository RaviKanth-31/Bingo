import {React, useState} from 'react';
import { useLocation } from 'react-router-dom';
import "./App.css"
const Game = () => {
  const location = useLocation();
  const matrix = location.state.matrix;
  const [dup, setDup] = useState(JSON.parse(JSON.stringify(matrix)));
  const [diag, checkDiag] = useState(false);
  const [cDiag, checkCdiag] = useState(false);
  const [count, setCount] = useState(0);
  const [bingo, setBingo] = useState(['B', 'I', 'N', 'G', 'O']);
  const handleClick = (e, i, j) => {
    e.target.classList.add('crossed-off');
    if(dup[i][j]!==-1) {
      dup[i][j] = -1;
      var c = 0;
      for(var k=0;k<5;k++){
        if(dup[k][j]===-1) c++;
      }
      if(c===5) setCount(count+1);
      c = 0;
      for(var k=0;k<5;k++){
        if(dup[i][k]===-1) c++;
      }
      if(c===5) setCount(count+1);
      c = 0;
      if(!diag){
        for(var k=0;k<5;k++){
          if(dup[k][k]==-1) c++;
        }
        if(c===5){
          setCount(count+1);
          checkDiag(true);
        } 
      }
      c = 0;
      if(!cDiag){
        for(var k=0, l=4;k<5, l>=0;k++, l--){
          if(dup[k][l]===-1) c++;
        }
        if(c==5){
          setCount(count+1);
          checkCdiag(true);
        }
      }
    console.log(count);
  }
  };

  return (
    <div className="container">
      <div className='row'>
      {bingo.map((l,i)=>(
          <p style={{color: count>i ?"green":"red"}}>{l}</p>
      ))}
      </div>
      
      {matrix.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, j) => (
            <button key={j} className="cell" onClick={(e)=>handleClick(e,i,j)}>{cell} </button>
          ))}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Game;