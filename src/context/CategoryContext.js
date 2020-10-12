import Axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const CategoryContext = createContext()

const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      const categories = await Axios.get(url)
      setCategories(categories.data.drinks)
    }
    getCategories()
  }, [])

  return (
    <CategoryContext.Provider value={{ categories }}>
      {props.children}
    </CategoryContext.Provider>
  )
}

export default CategoryProvider
