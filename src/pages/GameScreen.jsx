/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import GameBoard from "../components/GameBoard";
import GameState from "../components/GameState";
import GameOver from "../components/GameOver";
import gameOverSoundAsset from "../sound/gameover_sound.wav";
import yaySoundAsset from "../sound/yay_sound.mp3";
import clickSoundAsset from "../sound/cliick_sound.wav";
import { Link, useLocation } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import PlayerCard from "../components/PlayerCard";

const gameOverSound = new Audio(gameOverSoundAsset);
gameOverSound.volume = 0.4;
const clickSound = new Audio(clickSoundAsset);
clickSound.volume = 0.5;
const winSound = new Audio(yaySoundAsset);
winSound.volume = 0.4;

const player_x = "X";
const player_o = "O";

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
            if (tileValue1 === player_x || tileValue1 === "X") {
                setGameState(GameState.playerXWins);
            } else if (tileValue1 === player_o || tileValue1 === "O") {
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
    const [rounds, setRounds] = React.useState(1);
    const [wins, setWins] = React.useState({
        player_o_wins: 0,
        player_x_wins: 0,
    });
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
        if (gameState === GameState.playerOWins) {
            setWins((prevScore) => {
                return {
                    ...prevScore,
                    player_o_wins: prevScore.player_o_wins + 1,
                };
            });
        } else if (gameState === GameState.playerXWins) {
            setWins((prevScore) => {
                return {
                    ...prevScore,
                    player_x_wins: prevScore.player_x_wins + 1,
                };
            });
        }
    }, [gameState]);

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
                tiles.filter((tile) => tile !== null).length % 2 === 1;
            const putComputerAt = (index) => {
                let newTiles = [...tiles];
                newTiles[index] = "O";
                setTiles([...newTiles]);
            };
            if (isComputerTurn && tiles.some((tile) => tile === null)) {
                const emptyTiles = tiles
                    .map((tile, index) => (tile === null ? index : null))
                    .filter((val) => val !== null);

                const randomIndex =
                    emptyTiles[Math.ceil(Math.random() * emptyTiles.length)];
                putComputerAt(randomIndex);
                console.log("problem site 1")
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
            const isplayerTurn =
                tiles.filter((tile) => tile !== null).length % 2 === 0;
            if (isplayerTurn) {
                let newTiles = [...tiles];
                newTiles[index] = "X";
                setTiles([...newTiles]);
            }
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
    }

    function reset() {
        setRounds((prevRound) => (prevRound = prevRound + 1));
        setTiles(Array(9).fill(null));
        setStrikeClass("");
        setGameState(GameState.inProgress);
        setPlayerTurn(player_x);
    }

    return (
        <div className="bg-[#ffeaed]">
            <div className="flex flex-col items-center pt-5 md:p-5 w-[90%] lg:w-[90%] max-w-[1024px] mx-auto min-h-lvh">
                <Link
                    to="/"
                    className="rounded-md bg-[#9a0001] self-start p-3 cursor-pointer transition ease-out hover:scale-110"
                >
                    <RiHomeFill size={20} color="white" />
                </Link>
                <h1 className="text-3xl sm:text-6xl font-bold mb-4">
                    Round {rounds}
                </h1>
                <div className="flex items-center justify-between w-[90%] lg:w-[60%] mx-auto my-2">
                    <PlayerCard player={player_o} wins={wins.player_o_wins} />
                    <PlayerCard player={player_x} wins={wins.player_x_wins} />
                </div>
                <h3 className="text-3xl sm:text-6xl font-bold mb-4">
                    {playerTurn} turn
                </h3>
                <div className="flex items-center justify-between w-[80%}">
                    <GameBoard
                        playerTurn={playerTurn}
                        tiles={tiles}
                        onTileClick={handleTileClick}
                        strikeClass={strikeClass}
                    />
                </div>
                <GameOver gameState={gameState} />
                {gameState !== GameState.inProgress && (
                    <button
                        onClick={() => {
                            reset();
                        }}
                        cursor={"pointer"}
                        className="w-[90%] md:w-[70%] max-w-[500px] p-3 rounded-md bg-[#9a0001] text-white text-center text-md md:text-2xl transition ease-in-out hover:bg-[#582424] duration-500"
                    >
                        Play Again
                    </button>
                )}
                {gameState === GameState.inProgress && (
                    <button
                        onClick={() => {
                            reset();
                        }}
                        cursor={"pointer"}
                        className="w-[90%] md:w-[70%] max-w-[500px] mt-10 p-3 rounded-md bg-[#9a0001] text-white text-center text-md md:text-2xl transition ease-in-out hover:bg-[#582424] duration-500"
                    >
                        Reset Game
                    </button>
                )}
            </div>
        </div>
    );
}

export default GameScreen;
