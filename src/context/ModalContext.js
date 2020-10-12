import Axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ModalContext = createContext()

const ModalProvider = (props) => {
  const [idrecipe, getIdRecipe] = useState(null)
  const [result, getResult] = useState({})

  useEffect(() => {
    const getRecipe = async () => {
      if (!idrecipe) return
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`
      const result = await Axios.get(url)
      getResult(result.data.drinks[0])
    }
    getRecipe()
  }, [idrecipe])

  return (
    <ModalContext.Provider value={{ getIdRecipe, getResult, result }}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
