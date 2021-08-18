import { Fragment, useState } from "react";

import Board from "components/Board";
import classes from "components/Game.module.css";
import { calculateWinner } from "utils";

const Game = () => {
	const initialState = Array(9).fill(null);

	const [board, setBoard] = useState(initialState);
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = (i) => {
		const updatedBoard = [...board];
		// If user click an occupied cell or if game is won, return
		if (winner || updatedBoard[i]) return;
		// Put an X or an O in the clicked cell
		updatedBoard[i] = xIsNext ? "X" : "O";
		setBoard(updatedBoard);
		setXisNext(!xIsNext);
	};

	const resetGame = () => {
		setBoard(initialState);
		setXisNext(true);
	};

	const renderInfo = () =>
		winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O");

	return (
		<Fragment>
			<Board cells={board} onClick={handleClick} />
			<div className={classes.status}>
				<p>{renderInfo()}</p>
				<button className={classes.button} onClick={resetGame}>
					Start New Game
				</button>
			</div>
		</Fragment>
	);
};

export default Game;
