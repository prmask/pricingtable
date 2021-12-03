import { GrCheckmark } from 'react-icons/gr';

import classes from './PricingCard.module.scss';

const PricingCard = ({ data }) => {
	const splitData = (dataToSplit) => {
		const splArr = dataToSplit.split('.');
		return splArr;
	};

	const splitCurr = () => {
		const actPri = +data.price.slice(1);
		const actPriYer = actPri * 12;
		const disPri = actPri - actPri * 0.7;

		const splCrr = disPri.toFixed(2).split('.');

		return { arr: splCrr, actPriYer, actPri };
	};

	const splCur = splitCurr();
	const noWeb = splitData(data.noOfWebsite);
	const noRam = splitData(data.ram);
	const noDsk = splitData(data.diskSpace);
	const noBnd = splitData(data.bandwidth);
	const noEml = splitData(data.email);
	const pkgCard = data.freeFeatures;

	return (
		<div className={classes.pkgCard}>
			<div
				className={`${classes.pkgCard__hedGrp} ${
					data.mostPopular ? classes.popular : ''
				}`}
			>
				<div className={classes.pkgCard__hedGrp__pop}>
					{data.mostPopular ? 'Most Popular' : ''}
				</div>
				<br />
				<h3 className={classes.pkgCard__hedGrp__header}>
					{data.title}
				</h3>
				<p>{data.description}</p>
				<div className={classes.pkgCard__hedGrp__price1}>
					<s>{data.price}</s>
					<span> Save 70% </span>
				</div>
				<div className={classes.pkgCard__hedGrp__price2}>
					<sup>$</sup>
					{splCur.arr[0]}
					<sup>{splCur.arr[1]}</sup>
					<span>
						<s>*</s>/mo
					</span>
				</div>
				<div className={classes.pkgCard__hedGrp__offer}>
					70% off on First Purchase
				</div>
				<button className={classes.pkgCard__hedGrp__orderBtn}>
					Buy Now
				</button>
			</div>

			<ul>
				<li>
					<span className={classes.checkmark}>
						<GrCheckmark />
					</span>
					<strong>{noWeb[0]}</strong> {noWeb[1]}
				</li>
				<li>
					<span className={classes.checkmark}>
						<GrCheckmark />
					</span>
					<strong>{noRam[0]}</strong> {noRam[1]}
				</li>
				<li>
					<span className={classes.checkmark}>
						<GrCheckmark />
					</span>
					<strong>{noDsk[0]}</strong> {noDsk[1]}
				</li>
				<li>
					<span className={classes.checkmark}>
						<GrCheckmark />
					</span>
					<strong>{noBnd[0]}</strong> {noBnd[1]}
				</li>
				<li>
					<span className={classes.checkmark}>
						<GrCheckmark />
					</span>
					<strong>{noEml[0]}</strong> {noEml[1]}
				</li>
				{pkgCard.map((fet) => {
					return (
						<li key={data.id}>
							<span className={classes.checkmark}>
								<GrCheckmark />
							</span>
							<strong>{}</strong> {fet}
						</li>
					);
				})}
			</ul>

			<span className={classes.pkgCard__pkgFoot}>
				Renews for ${splCur.actPriYer.toFixed(2)}/year. By clicking ”Get
				Started” you agree to our <a href="#">Terms and Conditions</a>.
			</span>
		</div>
	);
};

export default PricingCard;
