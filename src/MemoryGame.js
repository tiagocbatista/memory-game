import React, { useState, useEffect } from 'react';
import game from './game/game'
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';

export default function MemoryGame() {

    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(game.createCardsFromTechs());
    }, [])

    function handleRestart() {
        setGameOver(false);
        game.clearCards();
        setCards(game.createCardsFromTechs());
    }

    function handleFlip(card) {
        game.flipCard(card.id, () => { setGameOver(true) }, () => { setCards([...game.cards]) });
        setCards([...game.cards]);
    }

    return (
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={handleRestart}></GameOver>
        </div>
    )
}