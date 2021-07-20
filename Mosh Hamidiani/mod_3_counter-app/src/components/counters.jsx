import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 6 },
			{ id: 5, value: 0 },
		],
	};

	handleIncrement = (countersItem) => {
		console.log(countersItem);
		const newCounters = [...this.state.counters];
		//spreading: cloning the array using spread operators, because we cant make changes to the original state directly..

		const index = newCounters.indexOf(countersItem);
		// finding index value of the specific object from newCounters array;

		newCounters[index] = { ...countersItem };
		//...REFER TO #1 BELOW:

		newCounters[index].value++;
		// incrementing the value property of the object (by 1) positioned at that index value. This object is the same object which was cloned in the last step

		this.setState({ counters: newCounters });
		// Updating the state
	};

	handleDelete = (counterId) => {
		console.log('Event handler called', counterId);

		const newCounters = this.state.counters.filter((itemObj) => {
			return itemObj.id !== counterId;
		});

		this.setState({ counters: newCounters });
	};

	handleReset = () => {
		const resettedCounters = this.state.counters.map((i) => {
			i.value = 0;
			return i;
		});
		this.setState({ counters: resettedCounters });
	};

	render() {
		if (this.state.counters.length === 0) {
			return <h4>There is noting to show in the list..Pls refresh</h4>;
		}
		return (
			<div>
				<button
					onClick={this.handleReset}
					className='btn btn-sm btn-primary m-2'
				>
					Reset
				</button>
				{this.state.counters.map((countersItem) => (
					<Counter
						key={countersItem.id}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						countersItem={countersItem}
					></Counter>
				))}
			</div>
		);
	}
}

export default Counters;

/*

REFERENCE: 

#1.	Spread Operators: Since we are using  a spread operator on a nested object, hence it wouldve deep copied only the 1st top most data and shallow copied the nested objects. Thus, we need to use a spread operator again here so that we dont end up mutating the original object
*/
