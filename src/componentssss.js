import { Using_consumer } from './context/context_thing';
import Componentb from './componentb'

const Component = () => {
    return (
			<Using_consumer>
				{(context) => {
					return (
						<div>
							<h1>{context.username}</h1>
							<h1>{context.number}</h1>
							<Componentb />
						</div>
					);
				}}
			</Using_consumer>
		);
}
export default Component
