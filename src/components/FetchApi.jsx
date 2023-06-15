import React, { useEffect, useState } from 'react'
import DrinkItem from './DrinkItem';
import { fw } from '../utils/fw';
import axios from 'axios';
import { aw } from '../utils/aw';

const FetchApi = () => {
  const SEARCH_BY_FIRST_LETTER = "/search.php?f=a";
  
  const [drinks, setDrinks] = useState([])

  const axiosGetCocktailByFirstLetter = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}${SEARCH_BY_FIRST_LETTER}`)
            const dataDrink = response.data.drinks
            setDrinks(dataDrink)
            console.log(drinks)
        } catch (error) {
            console.log(error)
        }
    }

  useEffect(() => {
    axiosGetCocktailByFirstLetter()
  }, [])
  

  return (
    <div>
        <h1>Fetching Drinks</h1>
        {drinks.map((drink)=>{
          <DrinkItem drink={drink}/>
        })}
    </div>
  )
}

export default FetchApi