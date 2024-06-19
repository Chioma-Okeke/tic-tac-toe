/* eslint-disable react/prop-types */
function Tile({ className, value, onClick, playerTurn }) {
    let hoverClass = null;
    if (value === null && playerTurn !== null) {
        hoverClass = `${playerTurn.toLowerCase()}-hover`;
    }
    return (
        <div
            onClick={onClick}
            className={`flex items-center justify-center text-4xl ${className} ${hoverClass}`}
        >
            {value}
        </div>
    );
}

export default Tile;
