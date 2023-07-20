import { useState } from 'react'
import './EffectSelection.css'

function EffectSelection ({id, unitState, updateUnit, selection, count}) {


    const [effectList, setEffectList] = useState([
        {
            name: 'bleed',
            url: 'https://i.imgur.com/TeyMBUm.png'
        },
        {
            name: 'ignite',
            url: 'https://i.imgur.com/tZLlRrX.png'
        },
        {
            name: 'rupture',
            url: 'https://i.imgur.com/1vieje0.png'
        },
        {
            name: 'tremor',
            url: 'https://i.imgur.com/kEqSEv4.jpg'
        },
        {
            name: 'add',
            url: 'https://i.imgur.com/nXuMDzx.png'
        },
    ])

    if (selection !== 1) {
        return (<div/>)
    }

    const addEffect = (effect) => {
        const newUnitState = {...unitState}
    
        newUnitState.effects.splice(newUnitState.effects.length-1, 0,
            {
                name: effect.name,
                url: effect.url,
                count: 1,
            }
        )
        
        updateUnit(id, newUnitState)
    }


    return (
        <div className='EffectSelection'
            style={{
                marginRight: `${370-(effectList.length+1)*25}px`,
            }}
        >
            {effectList.map((effect, i, effectList) => {
                return(
                    <div className='effectToSelect'
                        key={i}
                        style={{
                            backgroundImage: `url(${effectList[i].url})`,
                            backgroundSize: 'cover',
                        }}
                        onClick={()=> {addEffect(effect)}}
                    >
                        
                    </div>
                )
            })}
        </div>
    )
}



export {EffectSelection}