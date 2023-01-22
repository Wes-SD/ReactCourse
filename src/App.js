import './App.css';
import React, { useState, Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import DrinkBank from './components/DrinkBank';
import firebase from './firebase';




class App extends Component {
  
  constructor() {
    super();
    this.state = {
      drinks : [],
    };
    this.buttons = {
      visible: true,
      spirit: [
        {
          id: 1,
          title: "Whiskey",
          ingredient: 'Whiskey',
        },
        {
          id: 2,
          title: "Rye",
          ingredient: 'Rye',

        },
        {
          id: 3,
          title: "Gin",
          ingredient: 'Gin',

        },
        {
          id: 4,
          title: "Tequila",
          ingredient: 'Tequila',

        },
        {
          id: 5,
          title: "Mezcal",
          ingredient: 'Mezcal',

        },
        {
          id: 6,
          title: "Rum",
          ingredient: 'Rum',

        },
        {
          id: 7,
          title: "Vodka",
          ingredient: 'Vodka',

        }
      ],
      cocktail: [
        {
          id: 1,
          title: "Margarita",
          name: 'Margarita',

        },
        {
          id: 2,
          title: "Old fashioned",
          name: 'Old fashioned',

        },
        {
          id: 3,
          title: "Martini",
          name: 'Martini',

        },
        {
          id: 4,
          title: "Spritz",
          name: 'Spritz',

        },
        {
          id: 5,
          title: "Negroni",
          name: 'Negroni',

        },
        {
          id :6,
          title: "Sour",
          name: 'Sour',

        }
      ]
    };
    }
  render(){
    const handleClick = (ingredients) =>{
      let drinkName = ingredients;
      let drinkIngredient = ingredients;
      const options = {
          method: 'GET',
          url: 'https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail',
          params: {
              name: drinkName,
              ingredients: drinkIngredient
              },
          headers: {
          'X-RapidAPI-Key': 'f8bde9372amsh42057aefd2d2ed2p1d7582jsnd266b8d968fd',
          'X-RapidAPI-Host': 'cocktail-by-api-ninjas.p.rapidapi.com'
          }
      };

      axios.request(options).then((response) => {
          console.log(response.data); 
          this.setState({drinks : response.data})
      }).catch((error) => {
          console.error(error);
      });
  }
    return(
      
      <div>
        <Header/>
          
          <div className="card container-md mx-auto">
              <h2 className="card-header">
                I'd Like Something with..
                </h2>
              <div className="card-body row">
                  {this.buttons.spirit.map(spirit => (
                      <div key={spirit.id} className="col-md">
                          <button className=" mx-auto my-auto btn btn-light btn-lg" key={spirit.id} onClick={()=>{handleClick(spirit.title)}}>{spirit.title}</button>
                      </div>
                  ))}
                  </div>
          </div>
          
          <div className="card container-md mx-auto">
              <h2 className="card-header">I Would Like a...</h2>
              <div className="card-body row">
              {this.buttons.cocktail.map(cocktail => (
                  <div key={cocktail.id} className="col-md">
                          <button className=" mx-auto my-auto btn btn-light btn-lg" key={cocktail.id} onClick={()=>{handleClick(cocktail.title)}}>{cocktail.title}</button>
                  </div>                   
                  ))}
                  </div>
              
          </div>
          <DrinkBank prop={this.state.drinks}/>
      </div>
      );
  }  
}
/*
<div>
          <div className="card container-md mx-auto">
              <h2 className="card-header">I'd Like Something with..</h2>
              <div className="card-body row">
                  {this.buttons.spirit.map(spirit => (
                      <div className="col-md">
                          
                          <button className=" mx-auto my-auto btn btn-light btn-lg" key={spirit.id} onClick={() => this.requestAPI(spirit.ingredient)}>{spirit.title}</button>
                      
                      </div>
                  ))}
                  </div>
          </div>
        
          <div className="card container-md mx-auto">
              <h2 className="card-header">I Would Like a...</h2>
              <div className="card-body row">
              {this.buttons.cocktail.map(cocktail => (
                  <div className="col-md">
                          <button className=" mx-auto my-auto btn btn-light btn-lg" key={cocktail.id} onClick={() => this.requestAPI(cocktail.name)}>{cocktail.title}</button>
                  </div>                   
                  ))}
                  </div>
          </div>
    </div>
*/
export default App;
