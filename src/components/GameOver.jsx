/* eslint-disable react/prop-types */
import GameState from "./GameState";

function GameOver({ gameState }) {
    switch (gameState) {
        case GameState.inProgress:
            return <></>;
        case GameState.playerXWins:
            return <div className="w-[90%] md:w-[70%] max-w-[500px] text-md md:text-2xl p-3 text-center rounded-md bg-[#9a0001] text-white mt-10 mb-2 transition ease-in-out hover:bg-[#582424] transition-500">X Wins</div>;
        case GameState.playerOWins:
            return <div className="w-[90%] md:w-[70%] max-w-[500px] text-md md:text-2xl p-3 text-center rounded-md bg-[#9a0001] text-white mt-10 mb-2 transition ease-in-out hover:bg-[#582424] transition-500">O Wins</div>;
        case GameState.draw:
            return <div className="w-[90%] md:w-[70%] max-w-[500px] text-md md:text-2xl p-3 text-center rounded-md bg-[#9a0001] text-white mt-10 mb-2 transition ease-in-out hover:bg-[#582424] transition-500">Draw</div>;
        default:
            return <></>;
    }
}

export default GameOver;
