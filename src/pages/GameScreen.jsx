/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import GameBoard from "../components/GameBoard";
import GameState from "../components/GameState";
import GameOver from "../components/GameOver";
import gameOverSoundAsset from "../sound/gameover_sound.wav";
import yaySoundAsset from "../sound/yay_sound.mp3";
import clickSoundAsset from "../sound/cliick_sound.wav";
import { useLocation } from "react-router-dom";
// import PlayerCard from "../components/PlayerCard";

const gameOverSound = new Audio(gameOverSoundAsset);
gameOverSound.volume = 0.2;
const clickSound = new Audio(clickSoundAsset);
clickSound.volume = 0.5;
const winSound = new Audio(yaySoundAsset);
winSound.volume = 0.3;

const player_x = "🧡";
const player_o = "💛";

const winningCombinations = [
    //rows
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },

    //columns
    { combo: [0, 3, 6], strikeClass: "strike-column-1" },
    { combo: [1, 4, 7], strikeClass: "strike-column-2" },
    { combo: [2, 5, 8], strikeClass: "strike-column-3" },

    //diagonals
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tiles, setStrikeClass, setGameState) {
    for (const { combo, strikeClass } of winningCombinations) {
        const tileValue1 = tiles[combo[0]];
        const tileValue2 = tiles[combo[1]];
        const tileValue3 = tiles[combo[2]];

        if (
            tileValue1 !== null &&
            tileValue1 === tileValue2 &&
            tileValue1 === tileValue3
        ) {
            setStrikeClass(strikeClass);
            if (tileValue1 === player_x) {
                setGameState(GameState.playerXWins);
            } else {
                setGameState(GameState.playerOWins);
            }
            return;
        }
    }

    const allTilesAreFilled = tiles.every((tile) => tile !== null);
    if (allTilesAreFilled) {
        setGameState(GameState.draw);
    }
}

function GameScreen() {
    const [tiles, setTiles] = React.useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = React.useState(player_x);
    const [strikeClass, setStrikeClass] = React.useState("");
    const [gameState, setGameState] = useState(GameState.inProgress);
    const location = useLocation();
    const selectedValue = location.state?.selectedValue;

    console.log(selectedValue, "selected value");

    useEffect(() => {
        checkWinner(tiles, setStrikeClass, setGameState);
    }, [tiles]);

    useEffect(() => {
        if (tiles.some((tile) => tile !== null)) {
            clickSound.play();
        }
    }, [tiles]);

    useEffect(() => {
        if (
            gameState === GameState.playerOWins ||
            gameState === GameState.playerXWins
        ) {
            winSound.play();
        } else if (gameState === GameState.draw) {
            gameOverSound.play();
        }
    }, [gameState]);

    useEffect(() => {
        if (selectedValue === "play-with-computer") {
            const isComputerTurn =
                tiles.filter((tile) => tile !== null).length % 2 === 0;
            const putComputerAt = (index) => {
                const newTiles = [...tiles];
                newTiles[index] = "O";
                setTiles(newTiles);
            };
            if (isComputerTurn) {
                const emptyTiles = tiles
                    .map((tile, index) => (tile === null ? index : null))
                    .filter((val) => val !== null);

                const randomIndex =
                    emptyTiles[Math.ceil(Math.random() * emptyTiles.length)];
                putComputerAt(randomIndex);
            }
        }
    }, [selectedValue, tiles]);

    function handleTileClick(index) {
        if (gameState !== GameState.inProgress) {
            return;
        }

        if (tiles[index] !== null) {
            return;
        }

        if (selectedValue === "play-with-computer") {
            const newTiles = [...tiles];
            newTiles[index] = playerTurn;
            setTiles(newTiles);
        } else {
            const newTiles = [...tiles];
            newTiles[index] = playerTurn;
            setTiles(newTiles);
            if (playerTurn === player_x) {
                setPlayerTurn(player_o);
            } else {
                setPlayerTurn(player_x);
            }
        }

        // if (selectedValue === "play-with-computer") {
        //     const isComputerTurn =
        //         tiles.filter((tile) => tile !== null).length % 2 === 0;
        //     const putComputerAt = (index) => {
        //         const newTiles = [...tiles];
        //         newTiles[index] = "O";
        //         setTiles(newTiles);
        //     };
        //     if (isComputerTurn) {
        //         const emptyTiles = tiles
        //             .map((tile, index) => (tile === null ? index : null))
        //             .filter((val) => val !== null);

        //         const randomIndex =
        //             emptyTiles[Math.ceil(Math.random() * emptyTiles.length)];
        //         putComputerAt(randomIndex);
        //     }
        // }
    }

    function reset() {
        setTiles(Array(9).fill(null));
        setStrikeClass("");
        setGameState(GameState.inProgress);
        setPlayerTurn(player_x);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1>TIC TAC TOE</h1>
            <h3>1st Round</h3>
            <div className="flex items-center justify-between w-[80%}">
                {/* <PlayerCard /> */}
                <GameBoard
                    playerTurn={playerTurn}
                    tiles={tiles}
                    onTileClick={handleTileClick}
                    strikeClass={strikeClass}
                />
                {/* <PlayerCard /> */}
            </div>
            <GameOver gameState={gameState} />
            {gameState !== GameState.inProgress && (
                <button
                    onClick={() => {
                        reset();
                    }}
                    cursor={"pointer"}
                >
                    Play Again
                </button>
            )}
        </div>
    );
}

export default GameScreen;
