import React from 'react'
import { Fragment } from 'react'

export default function GameOver(props) {
    return (props.show ?
        <div id="gameOver">
            <div>Parabéns, você completou o jogo!</div>
            <button id="restart" onClick={props.handleRestart}>Jogue Novamente</button>
        </div> : <Fragment />
    )
}