/* eslint-disable react/prop-types */
import GameState from "./GameState";

function GameOver({ gameState }) {
    switch (gameState) {
        case GameState.inProgress:
            return <></>;
        case GameState.playerXWins:
            return <div>X Wins</div>;
        case GameState.playerOWins:
            return <div>O Wins</div>;
        case GameState.draw:
            return <div>Draw</div>;
        default:
            return <></>;
    }
}

export default GameOver;
