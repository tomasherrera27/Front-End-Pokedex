import React, { Component } from 'react'
import "../styles/App.css"
import Pokedex from './Pokedex';


const pokedex = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ]
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ]
  }]

export default class App extends Component {
  
  pokemon = [pokedex[0].name, pokedex[0].id, pokedex[0].type];
  pokemons = pokedex;


  update(pokemon) {
    console.log(pokemon);
    // En esta funcion se deberia actualizar el pokemon visible
  }

  getPokemon = () => {
      if (this.pokemon[1]?.toString()?.length === 1) return `00${this.pokemon[1]}`
      if (this.pokemon[1]?.toString()?.length === 2) return `0${this.pokemon[1]}`
      if (this.pokemon[1]?.toString()?.length === 3) return `${this.pokemon[1]}`
  }

  getTypes = () => {
    let phrase;
    if(this.pokemon[2].length === 1) return this.pokemon[2][0]
    if(this.pokemon[2].length > 1) {
     for (let index = 0; index < this.pokemon[2].length; index++) {
       if(index === 0) phrase = this.pokemon[2][index]
       if(index !== 0) phrase = `${phrase} and ${this.pokemon[2][index]}`
     }
     return phrase
    }
  }

  render() {
    return (
      <div style={{display:"flex"}}>
      <div className="container">
        <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.getPokemon()}.png`} alt={this.pokemon[0]} />
        <p id="name">{`${this.pokemon[0]} is a pokemon type ${this.getTypes()}`}</p>
      </div>
      <Pokedex updateParent={this.update} pokemons={this.pokemons} />
    </div>
    )
  }
}

