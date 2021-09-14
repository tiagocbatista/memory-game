import React, { useState } from 'react';
import GameOver from './components/GameOver';

export default function MemoryGame() {

    const [gameOver, setGameOver] = useState(true);

    function handleRestart() {
        setGameOver(false);
    }


    return (
        <div>
            <GameOver show={gameOver} handleRestart={handleRestart}></GameOver>
        </div>
    )
}