import Axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const RecipesContext = createContext()

const RecipesProvider = (props) => {
  const [recipes, getRecipes] = useState([])
  const [search, searchRecipes] = useState({
    ingredient: '',
    category: ''
  })
  const [consult, getConsult] = useState(false)

  const { ingredient, category } = search

  useEffect(() => {
    if (consult) {
      const getAPI = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`
        const result = await Axios.get(url)
        getRecipes(result.data.drinks)
      }
      getAPI()
    }
  }, [search])

  return (
    <RecipesContext.Provider value={{ recipes, searchRecipes, getConsult }}>
      {props.children}
    </RecipesContext.Provider>
  )
}

export default RecipesProvider
