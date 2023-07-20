import { useState } from 'react';
import { EditPanel } from './components/EditPanel';
import { Unit } from './components/Unit';

function App() {
	
	const initialLis = []

	const [unitList, setUnitList] = useState(initialLis)

	const addUnit = (unit) => {
		const newUnit = {...unit}
        newUnit.effects = [
			{
				name: 'add',
				url: 'https://i.imgur.com/X5trXjm.png',
				count: 1
			},
		]

		setUnitList([...unitList, newUnit])
	}

	const updateUnit = (id, unit) => {		
		const newUnitList = [...unitList]
		newUnitList[id] = unit
		setUnitList(newUnitList)
	}

	const killUnit = (id) => {
		const newUnitList = [...unitList]
		newUnitList.splice(id, 1)
		
		setUnitList(newUnitList)
	}

	return (
		<div className="App">
				<EditPanel addUnit={addUnit}/>
				{unitList.map((unit, i) => {
					return(
						<div key={i}>
							<Unit
								unit={unit}
								updateUnit={updateUnit}
								id={i}
								killUnit={killUnit}
							/>
						</div>
					)
				})}
		</div>
	);
}

export default App;
