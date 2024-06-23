/* eslint-disable react/prop-types */
import Strike from "./Strike";
import Tile from "./Tile";

function GameBoard({ tiles, onTileClick, playerTurn, strikeClass }) {
    return (
        <div className="bg-red-200 z-10 p-3 md:p-4 rounded-xl">
            <div className="board z-20">
                <Tile
                    playerTurn={playerTurn}
                    onClick={() => onTileClick(0)}
                    value={tiles[0]}
                    className="border-[#9a0001] border-4 rounded-2xl bg-[#fcf7f7]"
                />
                <Tile
                    playerTurn={playerTurn}
                    onClick={() => onTileClick(1)}
                    value={tiles[1]}
                    className="border-[#9a0001] border-4 rounded-2xl bg-[#fcf7f7]"
                />
                <Tile
                    playerTurn={playerTurn}
                    onClick={() => onTileClick(2)}
                    value={tiles[2]}
                    className="border-[#9a0001] border-4 rounded-2xl bg-[#fcf7f7]"
                />
                <Tile
                    playerTurn={playerTurn}
                    onClick={() => onTileClick(3)}
                    value={tiles[3]}
                    className="border-[#9a0001] border-4 rounded-2xl bg-[#fcf7f7]"
                />
                <Tile
                    playerTurn={playerTurn}
                    onClick={() => onTileClick(4)}
                    value={tiles[4]}
                    className="border-[#9a0001] border-4 rounded-2xl bg-[#fcf7f7]"
                />
                <Tile
                    playerTurn={playerTurn}
                    onClick={() => onTileClick(5)}
                    value={tiles[5]}
                    className="border-[#9a0001] border-4 rounded-2xl bg-[#fcf7f7]"
                />
                <Tile
                    playerTurn={playerTurn}
                    onClick={() => onTileClick(6)}
                    value={tiles[6]}
                    className="border-4 rounded-2xl bg-[#fcf7f7] border-[#9a0001]"
                />
                <Tile
                    playerTurn={playerTurn}
                    onClick={() => onTileClick(7)}
                    value={tiles[7]}
                    className="border-4 rounded-2xl bg-[#fcf7f7] border-[#9a0001]"
                />
                <Tile
                    playerTurn={playerTurn}
                    onClick={() => onTileClick(8)}
                    value={tiles[8]}
                    className="border-4 rounded-2xl bg-[#fcf7f7] border-[#9a0001]"
                />
                <Strike strikeClass={strikeClass} />
            </div>
        </div>
    );
}

export default GameBoard;
