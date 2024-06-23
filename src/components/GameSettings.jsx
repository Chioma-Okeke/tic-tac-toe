// /* eslint-disable react/prop-types */

// import { IoClose } from "react-icons/io5";
// import { icons } from "../data/gameIcons";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { PiPlayFill } from "react-icons/pi";

// function GameSettings({ closeGameSettings, selectedValue, handleMode }) {
//     const [playerIcons, setPlayerIcons] = useState({
//         player1: "",
//         player2: "",
//     });
//     function closeForm(event) {
//         if (event.target.id === "background") {
//             console.log(selectedValue, "selected value in game  ");
//             closeGameSettings();
//         }
//     }

//     function handleSelection(e) {
//         const [name, value] = e.target;
//         console.log(name, value);
//     }

//     return (
//         <div
//             id="background"
//             onClick={(event) => closeForm(event)}
//             className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
//         >
//             <div className="w-[80%] lg:w-[600px] h-fit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[1rem] bg-gradient-to-r from-[#bfd65a] to-[#fb2b39] shadow-2xl rounded-3xl p-5 md:p-10 flex flex-col items-center justify-center">
//                 <div className="bg-gradient-to-r from-[#01d0fa] to-[#02c0fa] rounded-full p-1 absolute top-2 right-2 hidden sm:block">
//                     <IoClose
//                         size={30}
//                         onClick={closeGameSettings}
//                         cursor={"pointer"}
//                         color="white"
//                         className=""
//                     />
//                 </div>
//                 {selectedValue === "play-with-computer" && (
//                     <div className="flex items-center justify-between w-[70%] md:w-[40%] mt-3">
//                         <label htmlFor="selectIcon">Select icon</label>
//                         <select
//                             name="selectIcon"
//                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         >
//                             {icons.map(({ icon, id }) => {
//                                 return (
//                                     <option className="text-center" key={id}>
//                                         {icon}
//                                     </option>
//                                 );
//                             })}
//                         </select>
//                     </div>
//                 )}
//                 <div className="md:w-[60%] flex flex-col md:flex-row items-center gap-1 md:gap-5 mt-3">
//                     <div className="">
//                         <input
//                             type="radio"
//                             id="play-with-computer"
//                             value="play-with-computer"
//                             checked={selectedValue == "play-with-computer"}
//                             onChange={() => handleMode("play-with-computer")}
//                             className="mr-2"
//                         />
//                         <label htmlFor="play-with-computer">
//                             Play with Computer
//                         </label>
//                     </div>
//                     <div>
//                         <input
//                             type="radio"
//                             id="play-with-opponent"
//                             value="play-with-opponent"
//                             checked={selectedValue == "play-with-opponent"}
//                             onChange={() => handleMode("play-with-opponent")}
//                             className="mr-2"
//                         />
//                         <label htmlFor="play-with-opponent">Play 1 on 1</label>
//                     </div>
//                 </div>
//                 {selectedValue === "play-with-opponent" && (
//                     <div className="w-full flex flex-col items-center gap-3 mt-4">
//                         <div className="flex items-center justify-between w-[70%] md:w-[40%]">
//                             <label htmlFor="selectIcon">Select icon</label>
//                             <select
//                                 name="selectIcon"
//                                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                             >
//                                 {icons.map(({ icon, id }) => {
//                                     return (
//                                         <option
//                                             className="text-center"
//                                             key={id}
//                                             value={playerIcons.player1}
//                                             onChange={handleSelection}
//                                         >
//                                             {icon}
//                                         </option>
//                                     );
//                                 })}
//                             </select>
//                         </div>
//                         <div className="flex items-center justify-between w-[70%] md:w-[40%]">
//                             <label htmlFor="selectIcon">Select icon</label>
//                             <select
//                                 name="selectIcon"
//                                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                             >
//                                 {icons.map(({ icon, id }) => {
//                                     return (
//                                         <option
//                                             className="text-center"
//                                             key={id}
//                                             value={playerIcons.player2}
//                                             onChange={handleSelection}
//                                         >
//                                             {icon}
//                                         </option>
//                                     );
//                                 })}
//                             </select>
//                         </div>
//                     </div>
//                 )}
//                 <Link
//                     to="/gameScreen"
//                     state={{ selectedValue: selectedValue }}
//                     className=" mt-5 bg-gradient-to-r from-[#01d0fa] to-[#02c0fa] p-2 rounded-full transition ease-out hover:bg-white hover:text-[#01d0fa] hover:scale-110 duration-300"
//                 >
//                     <PiPlayFill color="white" size={30} />
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default GameSettings;
