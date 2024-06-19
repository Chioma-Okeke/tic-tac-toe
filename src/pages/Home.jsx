/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import GameSettings from "../components/GameSettings";
import GameLogo from "../assets/game background.png";
import { PiPlayFill } from "react-icons/pi";

function Home() {
    const [showGameSettings, setShowGameSettings] = useState(false);
    const [selectedValue, setSelectedValue] = useState("play-with-computer");

    function handleMode(value) {
        // console.log(event.target.id);
        // if (event.target.id === "computer-mode") {
        //     setComputerMode((prevComputerMode) => !prevComputerMode);
        //     console.log(computerMode);
        // } else {
        //     setMultiPlayerMode(!multiPlayerMode);
        //     console.log(multiPlayerMode);
        // }
        console.log(value);
        setSelectedValue(value);
        console.log(selectedValue);
    }

    function handleToggle() {
        setShowGameSettings(false);
    }

    return (
        <div className="flex flex-col h-lvh gap-12 items-center lg:pt-10 pt-24 w-full bg-gradient-to-r from-[#bfd65a] to-[#fb2b39]">
            <h1 className="text-4xl sm:text-6xl font-bold">
                Tic-Tac-Toe Time!
            </h1>
            <img
                src={GameLogo}
                alt=""
                className="w-[70%] sm:w-[50%] md:w-[40%] lg:w-[30%] my-6 transition ease-out hover:rotate-6 hover:scale-110 duration-300"
            />
            <button
                className="bg-gradient-to-r from-[#01d0fa] to-[#02c0fa] p-4 rounded-full transition ease-out hover:bg-white hover:text-[#01d0fa] hover:scale-110 duration-300"
                onClick={() => setShowGameSettings(true)}
            >
                <PiPlayFill color="white" size={50}/>
            </button>
            {showGameSettings && (
                <GameSettings
                    closeGameSettings={handleToggle}
                    handleMode={handleMode}
                    selectedValue={selectedValue}
                />
            )}
        </div>
    );
}

export default Home;
