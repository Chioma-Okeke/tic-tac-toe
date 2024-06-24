/* eslint-disable no-unused-vars */
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import GameLogo from "../assets/game background.png";
import { PiPlayFill } from "react-icons/pi";
import { IoPersonSharp, IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";

function Home() {
    const [selectedValue, setSelectedValue] = useState("play-with-computer");

    function handlePlayMode(value) {
        console.log(value);
        setSelectedValue(value);
        console.log(selectedValue);
    }

    return (
        <div className="bg-[#fcf7f7] min-h-lvh">
            <div className="flex flex-col min-h-lvh items-center lg:pt-10 pt-16 w-[70%] lg:w-[40%] max-w-[1024px] mx-auto">
                <img
                    src={GameLogo}
                    alt=""
                    className="w-[30%] sm:w-[20%] md:w-[20%] my-3 lg:my-2 transition ease-out hover:rotate-6 hover:scale-110 duration-300"
                />
                <h1 className="text-2xl sm:text-4xl font-bold mb-20">
                    Tic-Tac-Toe Time!
                </h1>
                <button
                    className="w-full md:w-[80%] text-lg lg:text-2xl py-4 px-2.5 rounded-2xl flex items-center bg-white shadow-md mb-5 transition ease-in-out hover:bg-[#9a0001] focus:bg-[#9a0001] hover:text-[#fff] focus:text-[#fff] duration-500"
                    onClick={() => handlePlayMode("play-with-computer")}
                >
                    <IoPersonSharp size={25} className="w-[10%]" />
                    <span className="w-[90%]">Play Solo</span>
                </button>
                <button
                    className="w-full md:w-[80%] text-lg lg:text-2xl py-4 px-2.5 rounded-2xl flex items-center bg-white shadow-md mb-10 transition ease-in-out hover:bg-[#9a0001] focus:bg-[#9a0001] hover:text-[#fff] focus:text-[#fff] duration-500"
                    onClick={() => handlePlayMode("play-with-opponent")}
                >
                    <IoPeople size={25} className="w-[10%]" />
                    <span className="w-[90%]">Play with a friend</span>
                </button>
                <Link
                    to="/gameScreen"
                    state={{ selectedValue: selectedValue }}
                    className="w-full md:w-[80%] flex items-center justify-center rounded-2xl mt-5 bg-gradient-to-r from-[#01d0fa] to-[#9a0001] p-2 transition ease-out hover:bg-white hover:text-[#01d0fa] hover:scale-110 duration-300"
                >
                    <PiPlayFill color="white" size={45} />
                </Link>
                {/* {showGameSettings && (
                <GameSettings
                    closeGameSettings={handleToggle}
                    handleMode={handleMode}
                    selectedValue={selectedValue}
                />
            )} */}
            </div>
        </div>
    );
}

export default Home;
