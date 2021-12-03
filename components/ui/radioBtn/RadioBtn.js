import classes from './RadioBtn.module.scss';

const RadioBtn = () => {
	return (
		<div className={classes.radioBtn}>
			<label className={classes.radioBtn__custom}>
				<input type="radio" name="radio" checked />
				<span className={classes.radioBtn__custom__radBtn}>
					<i className="las la-check"></i>
					<div className={classes.radioBtn__custom__radBtn__icon}>
						<h3>Monthly</h3>
					</div>
				</span>
			</label>
			<label className={classes.radioBtn__custom}>
				<input type="radio" name="radio" />
				<span className={classes.radioBtn__custom__radBtn}>
					<i className="las la-check"></i>
					<div className={classes.radioBtn__custom__radBtn__icon}>
						<h3>Yearly</h3>
					</div>
				</span>
			</label>
		</div>
	);
};

export default RadioBtn;
