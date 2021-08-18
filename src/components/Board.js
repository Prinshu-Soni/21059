import Cell from "components/Cell";
import classes from "components/Board.module.css";

const Board = ({ cells, onClick }) => {
	const renderCells = () =>
		cells.map((cell, i) => (
			<Cell key={i} value={cell} onClick={() => onClick(i)} />
		));

	return <div className={classes.board}>{renderCells()}</div>;
};

export default Board;
