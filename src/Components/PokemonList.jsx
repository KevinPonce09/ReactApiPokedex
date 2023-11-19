import React, { useContext } from 'react'
import { PokemonContext } from '../Context/PokemonContext'
import { PokemonCard } from './PokemonCard'
import { Loader } from './Loader'

export const PokemonList = () => {

    const {allPokemons, loading, filteredPokemons} = useContext(PokemonContext)

  return (
    <>
      {
          loading ?(
            <Loader/>
          ) : (

            <div className="card-list-pokemon container">
              {
                filteredPokemons.length ?(
                  <>
                   {filteredPokemons.map(pokemon => (
                    <PokemonCard pokemon={pokemon} key={pokemon.id}/>
                    ))}
                  </>
                 

                ) : (
                  <>
                  {allPokemons.map(pokemon => (
                   <PokemonCard pokemon={pokemon} key={pokemon.id}/>
                   ))}
                 </>


                )
              }

              

          </div>

          )
      }
       
    </>
  )
}
