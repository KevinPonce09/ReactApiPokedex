import React, { useContext } from 'react'
import { PokemonContext } from '../Context/PokemonContext'

export const FilterBar = () => {

  const {active, handleCheckbox} = useContext(PokemonContext)
  return (
    <div class={`container-filters ${active ? 'active' : ''}`}>
        <div class="filter-by-type">
            <span>
                Type
            </span>

            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="normal" id="normal"/>
                <label for="normal">
                    Normal
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="fighting" id="fighting"/>
                <label for="fighting">
                    Fighting
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="flying" id="flying"/>
                <label for="flying">
                    Flying
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox"  onChange={handleCheckbox} name="ground" id="ground"/>
                <label for="ground">
                    Ground
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="rock" id="rock"/>
                <label for="rock">
                    Rock
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="bug" id="bug"/>
                <label for="bug">
                    Bug
                </label>
            </div>
        
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="steel" id="steel"/>
                <label for="steel">
                    Steel
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="fire" id="fire"/>
                <label for="fire">
                    Fire
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="water" id="water"/>
                <label for="water">
                    Water
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="grass" id="grass"/>
                <label for="grass">
                    Grass
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="poison" id="poison"/>
                <label for="poison">
                    Poison
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="ghost" id="ghost"/>
                <label for="ghost">
                    Ghost
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="electric" id="electric"/>
                <label for="electric">
                    Electric
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="psychic" id="psychic"/>
                <label for="psychic">
                    Psychic
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="ice" id="ice"/>
                <label for="ice">
                    Ice
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="dragon" id="dragon"/>
                <label for="dragon">
                    Dragon
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="dark" id="dark"/>
                <label for="dark">
                    Dark
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="fairy" id="fairy"/>
                <label for="fairy">
                    Fairy
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="unknown" id="unknown"/>
                <label for="unknown">
                    Unknown
                </label>
            </div>
            <div class="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="shadow" id="shadow"/>
                <label for="shadow">
                    Shadow
                </label>
            </div>
        </div>
    </div>
  )
}
