import { useEffect, useState } from 'react'
import './Unit.css'
import { EditUnitHp } from './EditUnitHp'
import { EffectList } from './EffectList'

function Unit ({unit, updateUnit, id, killUnit}) {

	const [unitState, setUnitState] = useState(unit)
	const [hpChange, setHpChange] = useState('')

	useEffect(() => {
		setUnitState(unit)
	})

	const changeUnit = (e, type) => {
		const value = e.currentTarget.value
		const newUnitState = {...unitState}

		if(type !== 'name' && !Number(value) && value !== '') return
		
		newUnitState[type] = value
		updateUnit(id, newUnitState)
	}

	return(
		<div className='UnitCard'>
			<div className="Unit">
				<div className="UnitName">
					<input
						value={unitState.name}
						type='text'
						onChange={(e) => changeUnit(e, 'name')}
						placeholder='Unit Name'
					/>
				</div>
				<div className="UnitHp">
					<input
						value={unitState.hp}
						type='text'
						onChange={(e) => changeUnit(e, 'hp')}
						placeholder='HP'
					/>
					/
					<input
						value={unitState.maxhp}
						type='text'
						onChange={(e) => changeUnit(e, 'maxhp')}
						placeholder='MAX'
					/>
				</div>
				<EditUnitHp
					id={id}
					unitState={unitState}
					hpChange={hpChange}
					setHpChange={setHpChange}
					updateUnit={updateUnit}
					killUnit={killUnit}
				/>
			</div>

			<EffectList
				id = {id}
				unitState = {unitState}
				updateUnit = {updateUnit}
			/>
		</div>
	)
}

export {Unit}