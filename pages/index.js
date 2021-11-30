import PricingTable from '../components/PricingTable/PricingTable';
import classes from '../styles/index.module.scss';

export default function Home() {
	return (
		<div className={classes.container}>
			<PricingTable />
		</div>
	);
}
