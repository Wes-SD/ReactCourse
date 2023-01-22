import { useEffect , useState } from "react";

const DrinkBank = ({prop}) =>{
    const [state, setState] = useState( {visible : true})
    const button = state.visible ? "-" : "+";
return (           
    <div>
        {prop.map(prop =>
            <div key={prop.id} className='card container'>
            <h2 className="card-header">{prop.name}</h2>
            <button onClick={() => setState({ visible: ! state.visible})}>
            {button}
            </button>
            {state.visible ? (
                <div>
                <p className='card-body'>{prop.instructions}</p>
                <p className='card-body text-bold'>Ingredients</p>
                <ul>
                    {prop.ingredients.map(ingredients => 
                        <li key={ingredients.id}>{ingredients}</li>)}
                </ul>
                </div>
                ) : null}
                 
            </div>     
        )}
    </div>
);}
/*
<div>
            {state.drinks.map(drinks =>
                    <div key={drinks.id} className='card container'>
                         <h2 className="card-header">{drinks.name}</h2>
                         <p className='card-body'>{drinks.instructions}</p>
                         <p className='card-body text-bold'>Ingredients</p>
                         <ul>
                            {drinks.ingredients.map(ingredients => 
                                <li key={ingredients.id}>{ingredients}</li>)}
                         </ul>
                         
                    </div>     
                         )}
            </div>
*/

export default DrinkBank;

