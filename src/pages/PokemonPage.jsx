import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../Context/PokemonContext'
import { useParams } from 'react-router-dom'
import { Loader } from '../Components'


export const PokemonPage = () => {

  const {getPokemonByID} = useContext(PokemonContext)

  const [loading, setloading] = useState(true)
  const [pokemon, setpokemon] = useState({})

  const {id} = useParams()

  const fetchPokemon = async(id) =>{
    const data = await getPokemonByID(id)
    setpokemon(data)
    setloading(false)
  }

  useEffect(() => {
    fetchPokemon(id)
  }, [])
  
  

  return (
    <main className='container main-pokemon'>
      {
        loading ? (
          <Loader />
        ) : (
          <>
                <div className="header-main-pokemon">
                    <span className="number-pokemon">#{pokemon.id}</span>
                    <div className="container-img-pokemon">
                      <img src={pokemon.sprites.other.dream_world.front_default} alt={`Pokemon ${pokemon?.name}`}/>
                    </div>

                    <div className="container-info-pokemon">
                        <h1>{pokemon.name}</h1>
                        <div className="card-types">
                          {pokemon.types.map(type => (
                            <span key={type.type.name} className={`${type.type.name}`}>
                                {type.type.name}
                            </span>
                          ))}
                          
                        </div>
                        <div className='info-pokemon'>
                          <div className='group-info'>
                            <p>
                              Height
                            </p>
                            <span>
                              {pokemon.height}
                            </span>
                          </div>
                          <div className='group-info'>
                            <p>
                              Weight
                            </p>
                            <span>
                              {pokemon.weight}KG
                            </span>
                          </div>

                        </div>
                    </div>
                  </div>
                  <div class="container-stats">
            <h1>Statistics</h1>
            <div class="stats">
                <div class="stat-group">
                    <span>Hp</span>
                    <div class="progress-bar"></div>
                    <span class="counter-stat">{pokemon.stats[0].base_stat}</span>
                </div>
                <div class="stat-group">
                    <span>Attack</span>
                    <div class="progress-bar"></div>
                    <span class="counter-stat">{pokemon.stats[1].base_stat}</span>
                </div>
                <div class="stat-group">
                    <span>Defense</span>
                    <div class="progress-bar"></div>
                    <span class="counter-stat">{pokemon.stats[2].base_stat}</span>
                </div>
                <div class="stat-group">
                    <span>Special Attack</span>
                    <div class="progress-bar"></div>
                    <span class="counter-stat">{pokemon.stats[3].base_stat}</span>
                </div>
                <div class="stat-group">
                    <span>Special Defense</span>
                    <div class="progress-bar"></div>
                    <span class="counter-stat">{pokemon.stats[4].base_stat}</span>
                </div>
                <div class="stat-group">
                    <span>Speed</span>
                    <div class="progress-bar"></div>
                    <span class="counter-stat">{pokemon.stats[5].base_stat}</span>
                </div>
            </div>
        </div>
                  
            
       
          </>
        )
      }
    </main>
  )
}
