import React, { useContext } from 'react'
import { PokemonContext } from '../Context/PokemonContext'
import { useLocation } from 'react-router-dom'
import { PokemonCard } from '../Components'

export const SearchPage = () => {

  const location = useLocation()
  
  const {globalPokemons} = useContext(PokemonContext)
  
  const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))
 

  return (
    <div className="container">
      <p className="p-search">
        Founded <span>{filteredPokemons.length}</span> Results:
      </p>
      <div className="card-list-pokemon container">
        {filteredPokemons.map(pokemon => (
          <PokemonCard pokemon={pokemon} key={pokemon.id}/>
        ))}
      </div>
    </div>
  )
}
