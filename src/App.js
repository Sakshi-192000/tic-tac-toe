import React, { useState } from "react";
import "./style.css";
import Square from "./Components/Square";

export default function App() {
  const InitialPositions = [
    "EMPTY",
    "EMPTY",
    "EMPTY",
    "EMPTY",
    "EMPTY",
    "EMPTY",
    "EMPTY",
    "EMPTY",
    "EMPTY"
  ];

  const InitialPlayer = "HUMAN";
  const [Player, setPlayer] = useState(InitialPlayer);
  const [positions, setPositions] = useState(InitialPositions);

  const onSquareClick = position => {
    const arrPosition = [...positions];
    arrPosition[position] = Player;
    setPositions(arrPosition);
    const newPlayer = Player === "HUMAN" ? "COMPUTER" : "HUMAN";
    setPlayer(newPlayer);
  };

  return (
    <div id="grid">
      <Square
        position={0}
        value={positions[0]}
        onClick={() => onSquareClick(0)}
      />

      <Square
        position={1}
        value={positions[1]}
        onClick={() => onSquareClick(1)}
      />

      <Square
        position={2}
        value={positions[2]}
        onClick={() => onSquareClick(2)}
      />

      <Square
        position={3}
        value={positions[3]}
        onClick={() => onSquareClick(3)}
      />

      <Square
        position={4}
        value={positions[4]}
        onClick={() => onSquareClick(4)}
      />

      <Square
        position={5}
        value={positions[5]}
        onClick={() => onSquareClick(5)}
      />

      <Square
        position={6}
        value={positions[6]}
        onClick={() => onSquareClick(6)}
      />

      <Square
        position={7}
        value={positions[7]}
        onClick={() => onSquareClick(7)}
      />
      <Square
        position={8}
        value={positions[8]}
        onClick={() => onSquareClick(8)}
      />
    </div>
  );
}
