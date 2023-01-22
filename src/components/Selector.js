
import React , {Component} from 'react';


    
class Selector extends Component {
    
   constructor(prop) {
        super(prop)
        this.state = {prop};
    }
    render() {
        console.log(this.state);
        return(
            <div>
                {this.state.prop.map(prop =>
            <div key={prop.id} className='card container-sm mx-auto'>
            <h2 key={prop.id} className="card-header">{prop.name}</h2>
            <button key={prop.id} onClick={() => hide(prop.id)}>
            {toggleButton}
            </button>
            <button key={prop.id} onClick={() => favorite(prop.id)}>
            favorite
            </button>
            {state.visible ? (
                <div>
                <p key={prop.id} className='card-body'>{prop.instructions}</p>
                <p key={prop.id} className='card-body text-bold'>Ingredients</p>
                <ul>
                    {prop.ingredients.map(ingredients => 
                        <li key={ingredients.id}>{ingredients}</li>)}
                </ul>
                </div>
                ) : null}
                 
            </div>     
        )}
            </div>
        )
    }

}
export default Selector;




/*
const Selector = ({ prop }) => {
    let [responseData, setResponseData] = React.useState('')
    

    
      
      
    return(
        <div>
            <h1>{responseData[1].name}</h1>
        </div>
        
        
    );
}
{drinkBank.length < 1 && <div className='card-body' key='empty'></div>}
{data.data.map((data)=> 
                    <div key={data.id} className="card container">
                        <h2 className="card-header">{data.name}</h2>
                        <p className="card-body">{data.instructions}</p>
                        {data.ingredients.map(ingredients =>(
                            <ul className="card-body">
                                <li key={ingredients.id}>{data.ingredients}</li>
                                </ul>
                        ))}
                        </div>
                        )}
                        
*/

