import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { PokemonContext } from '../Context/PokemonContext'

export const Navigation = () => {

    const {onInputChange, valueSearch, onResetForm} = useContext(PokemonContext)
    
    const navigate = useNavigate()

    const onSearchSubmit = (e) =>{
        e.preventDefault()
        navigate('/search',{
            state: valueSearch
        })
        onResetForm();
    }



  return (
    <>
        <header class="container">
        <a href="/" class="logo">
            <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pokédex_logo.png" alt="Logo Pokedex"/>
        </a>
        
        <form onSubmit = {onSearchSubmit}>
            <div class="form-group">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    class="icon-search">
                    <path 
                    fill-rule="evenodd" 
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" 
                    clip-rule="evenodd" />
                  </svg>
                <input 
                type="search" 
                name='valueSearch'
                id=''
                value={valueSearch}
                onChange={onInputChange}
                placeholder="Search Pokemon"/>
            </div>
            <button class="btn-search">Search</button>
        </form>
    </header>
    <Outlet />
    </>
  )
}

