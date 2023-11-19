import React, { useContext } from 'react'
import { PokemonList, FilterBar} from '../Components/'
import { PokemonContext } from '../Context/PokemonContext'


export const HomePage = () => {

   const {onClickLoadMore,active, setactive} = useContext(PokemonContext)

  return (
    <>
    <div class="container-filter container " onClick={() => setactive(!active)}>
        <div class="icon-filter" >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                class="icon">
            <path 
                d="M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" />
          </svg>
          
        </div>
    <span>Filter</span>
    </div>
    <PokemonList />
    <FilterBar />
     
     <div className="container-btn-load-more container">
        <button className='btn-load-more' onClick={onClickLoadMore}>
            Load More
        </button>

     </div>

    </>
  )
}
