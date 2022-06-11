import React, {useState} from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const styles ={
    width : '200px',
    margin: '20px auto'
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xMove, setXMove] = useState(true);
    const winner = calculateWinner(board); 


    const handleClick= i => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xMove ? 'X' : 'O';
        setBoard(boardCopy);
        setXMove(!xMove);

    }

   
    const startGame = () => {
        <button onClick={() => setBoard(Array(9).fill(null))}>
        Start Game
        </button>
    }

    return (
        <>
        <Board  squares={board} onClick={handleClick} />
        <div style ={styles}> 
            <p>{winner ? 'Winner:' + winner : 'Next Player: ' + (xMove ? 'X' : 'O') }</p>
            {startGame()}
        
        </div>
        </>
    )
}

export default Game;