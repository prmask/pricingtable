import RadioBtn from '../ui/radioBtn/RadioBtn';
import HOST_DOMAIN_DATA from './hostDomain-data';
import PricingCard from './PricingCard';

import classes from './PricingTable.module.scss';

const PricingTable = () => {
	return (
		<>
			<RadioBtn />
			<div className={classes.pricingTable}>
				{HOST_DOMAIN_DATA.map((proj) => {
					return <PricingCard data={proj} key={proj.id} />;
				})}
			</div>
		</>
	);
};

export default PricingTable;
