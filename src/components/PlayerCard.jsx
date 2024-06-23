/* eslint-disable react/prop-types */
// import React from 'react'

function PlayerCard({ player, wins}) {
    return (
        <div className="flex items-center justify-between w-[40%] max-w-[130px] rounded-md px-3 py-3 text-lg lg:text-2xl bg-[#9a0001] text-white">
           <p>{player}</p>
           <span>{wins}</span>
        </div>
    );
}

export default PlayerCard;
