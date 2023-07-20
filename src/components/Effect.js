import './Effect.css'

function Effect ({i, unitState, setUnitState}) {

    const updateUnit = (type) => {
        const newUnitState = {...unitState}

        type === '+'
            ? newUnitState.effects[i].count += 1
            : newUnitState.effects[i].count -= 1

        setUnitState(newUnitState)
    }

    const proke = () => {
        const newUnitState = {...unitState}

        console.log(newUnitState)
        
        switch(newUnitState.effects[i].name){
            case 'rupture': {
                if(newUnitState.effects[i].count === 0) {
                    newUnitState.effects.splice(i, 1)
                    break
                }

                newUnitState.hp -= newUnitState.effects[i].count
                newUnitState.effects[i].count -= 1
            }; break;
            
            default: {
                newUnitState.hp -= newUnitState.effects[i].count
                newUnitState.effects.splice(i, 1)
            }
        }

        setUnitState(newUnitState)
    }


    return(
        <div className='Effect'  style={{
            backgroundImage: `url(${unitState.effects[i].url})`,
            backgroundSize: 'cover'
        }}>
            <div className='proke' onClick={() => {proke()}}>^^^^^</div>
            <h5 onClick={() => {updateUnit('-')}}>-</h5>
            <h4>{unitState.effects[i].count}</h4>
            <h5 onClick={() => {updateUnit('+')}}>+</h5>
        </div>
    )
}

export {Effect}