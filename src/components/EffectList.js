import { useState } from 'react'
import { Effect } from './Effect'
import { EffectSelection } from './EffectSelection'

function EffectList ({id, unitState, updateUnit}) {

    const [selection, setSelection] = useState(-1)


    function EffectSelector ({effect, count}) {    
        return(
            <div className='Effect' 
                onClick={() => {setSelection(selection*-1)}}
                style={{
                    cursor: 'pointer',
                    backgroundImage: `url(${effect.url})`,
                    backgroundSize: 'cover'
            }}>
            </div>
        )
    }

	const prokeUnit = (unit) => {
		const newUnitState = {...unit}
		updateUnit(id, newUnitState)
	}
    
    return(
        <div className='EffectList'>
            {[...unitState.effects, {name: 'selection'}].map((effect, i) => {
                if(effect.name === 'add'){
                    return(
                        <EffectSelector key={i}
                            effect = {effect}
                        />
                    )
                }
                if(effect.name === 'selection'){
                    return(
                        <EffectSelection key={i}
                            id = {id}
                            unitState = {unitState}
                            updateUnit = {updateUnit}
                            selection = {selection}
                            count = {effect.count}
                        />
                    )
                }
                
                return(
                    <Effect
                        key={i}
                        i={i}
                        unitState={unitState}
                        setUnitState={prokeUnit}
                    />
                )
            })}
        </div>
    )
}

export {EffectList}