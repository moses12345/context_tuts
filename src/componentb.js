import { Using_consumer } from './context/context_thing';

function Componentb() {
	return (
		<div>
			<Using_consumer>
				{(context) => {
					return <>{context.setposting(1)}</>;
				}}
			</Using_consumer>
		</div>
	);
}

export default Componentb;
