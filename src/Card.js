import React, { useEffect, useState } from 'react';
import './App.css'
import axios  from 'axios';

const Card = ({item}) => {
    const [loadExtra, setLoadExtra] = useState(false)
    const uri = item.url;

    const [imageUrl, setImageUrl] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png")
    const [allImages, setAllImages] = useState([])
    
    async function getPokemonData() {
        const pokemon = await axios.get(uri)
        // console.log("this ", pokemon.data) 
        const pokemonImages = pokemon.data.sprites
        // console.log(pokemonImages.back_default)
        setImageUrl(pokemonImages.back_default)
        console.log(pokemonImages)
        setAllImages([...allImages, pokemonImages.front_default, pokemonImages.front_shiny])
        
    }

    useEffect(() => {
        getPokemonData()
    }, [])

    return <div>
        <div className='card'>
            { item.name }
            <br/>
            <img 
                src = {imageUrl}
                alt = "NA"
            />
            <br/>
            <button
                className='btn'
                onClick={
                    () => setLoadExtra(true)
                }
            >
                load more images
            </button>
            {loadExtra &&
            <div>
                {
                    allImages.map(pokeMonUri => <img 
                        src = {pokeMonUri}
                        alt = "NA"
                    />)
                }
            </div>}
        </div>
    </div>;
};

export default Card;
