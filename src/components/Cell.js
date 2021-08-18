import classes from "components/Cell.module.css";

const Cell = ({ value, onClick }) => (
	<button className={classes.cell} onClick={onClick}>
		{value}
	</button>
);

export default Cell;
