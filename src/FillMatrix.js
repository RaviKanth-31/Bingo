import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FillMatrix = () => {
  const [count, setCount] = useState(1);
  const [matrix, setMatrix] =  useState(Array.from({ length: 5 }, () => Array(5).fill(null)));
  const [isComplete, setIsComplete] = useState(false);
  const size = 5;
  const navigate = useNavigate();
  const handleClick = (e, i, j) => {
    if (e.target.textContent === ' ') {
      e.target.textContent = count;
      setCount(count+1);
      setMatrix((prevMatrix) => {
        const newMatrix = [...prevMatrix];
        newMatrix[i][j] = count;
        return newMatrix;
      });
      if(count==25){
        setIsComplete(true);
      }
      console.log(i,j);
    }
    else console.log(matrix);
  };

  const handleNextPage = () => {
    navigate('/game', { state: { matrix } });
  };

  return (
    <div className="container">
      {[...Array(size)].map((_, i) => (
        <div key={i} className="row">
          {[...Array(size)].map((_, j) => (
            <button key={j} onClick={(e) => handleClick(e, i, j)} className="cell">
              {' '}
            </button>
          ))}
        </div>
      ))}
      {isComplete && <button onClick={handleNextPage}>Go to next page</button>}
    </div>
  );
};

export default FillMatrix;