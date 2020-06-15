import React, { useState } from "react";
import Helmet from "react-helmet";

export default function App() {
  const [color, setColor] = useState("#fff");
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
  };

  const handleClick = i => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    setColor(hexColor);
  };

  const Heading = () => (
    <h1 className="text-center text-gray-100">
      Background Color:{" "}
      <span className="select-all font-mono" style={{ color: `${color}` }}>
        {color}
      </span>
    </h1>
  );

  const Button = ({ onClick, value }) => (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {value}
    </button>
  );

  return (
    <>
      <h1 className="text-center text-3xl font-bold font-mono mt-12">
        React Color Flipper
      </h1>
      <div className="App mt-8 flex mx-auto flex-col items-center justify-center w-48 h-32 rounded-lg bg-black">
        <Helmet>
          <style>{`body {background-color: ${color}}`}</style>
        </Helmet>
        <Heading />
        <Button onClick={handleClick} value="Click Me" />
      </div>
      <p className="text-center text-xs">@RafaelDavisH</p>
    </>
  );
}
