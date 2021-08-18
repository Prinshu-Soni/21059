import Cell from "./Cell";
import classes from "./Board.module.css";

const Board = ({ cells, onClick }) => (
	<div className={classes.board}>
		{cells.map((cell, i) => (
			<Cell key={i} value={cell} onClick={() => onClick(i)} />
		))}
	</div>
);

export default Board;
