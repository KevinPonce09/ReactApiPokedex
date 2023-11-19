import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext"
import { useForm } from "../hook/useForm"

export const PokemonProvider = ({ children }) => {

    const [allPokemons, setallPokemons] = useState([])
    const [globalPokemons, setglobalPokemons] = useState([])
    const [ofsset, setofsset] = useState(0)

    // user CustimHokk - useform for extract
    const {valueSearch, onInputChange,onResetForm} = useForm({
        valueSearch: ''
    })


    //States simples for aplication
    const [loading, setloading] = useState(true)
    const [active, setactive] = useState(false)


    //call 50 pokemons for the API
    const getAllPokemons = async(limit = 50) =>{
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${ofsset}`)
        const data = await res.json()
        
        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)

        setallPokemons([
            ...allPokemons,
            ...results
        ])
        setloading(false)

    }

    //call all pokemons
    const getGlobalPokemons = async() =>{
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
        const data = await res.json();
        
        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)

        setglobalPokemons(results)
        setloading(false)

    }

    //Call a pokemon by ID
    const getPokemonByID = async(id) => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = await res.json()
        return data

    }

    useEffect(() => {
        getAllPokemons()
    }, [ofsset])
    
    useEffect(() => {
        getGlobalPokemons()
    }, [])

    // BTN LOAD MORE
    const onClickLoadMore = () =>{
        setofsset(ofsset + 50)

    }
    //Filter function + state
    const [typeSelected, settypeSelected] = useState({
        grass:false,
        normal:false,
        fighting:false,
        flying:false,
        posion:false,
        ground:false,
        rock:false,
        bug:false,
        ghost:false,
        steel:false,
        fire:false,
        water:false,
        electric:false,
        psychic:false,
        ice:false,
        dragon:false,
        dark:false,
        fairy:false,
        unknow:false,
        shadow:false,
    })
   
    const [filteredPokemons, setfilteredPokemons] = useState([])

    


    const handleCheckbox = e =>{
        settypeSelected({
            ...typeSelected,
            [e.target.name]: e.target.checked
        })
        if(e.target.checked){
            const filteredResults = globalPokemons.filter(pokemon => 
                pokemon.types
                    .map(type => type.type.name)
                    .includes(e.target.name)
            );
            setfilteredPokemons([...filteredPokemons,...filteredResults])
        }else{
            const filteredResults = filteredPokemons.filter(pokemon => 
                !pokemon.types
                    .map(type => type.type.name)
                    .includes(e.target.name)
            );
            setfilteredPokemons([...filteredResults])
        }

    }


    


  return (
    <PokemonContext.Provider 
    value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonByID,
        //button more
        onClickLoadMore,
        //Loader
        loading,
        setloading,
        //btn Filter
        active,
        setactive,
        //filter container checkbox
        handleCheckbox,
        filteredPokemons
        
        
        

    }}> 
      {children}
    </PokemonContext.Provider>

  )
}
