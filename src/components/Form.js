import React, { useContext, useState } from 'react'
import { CategoryContext } from '../context/CategoryContext'
import { RecipesContext } from '../context/RecipesContext'

const Form = () => {
  const [search, getSearch] = useState({
    ingredient: '',
    category: ''
  })

  const { categories } = useContext(CategoryContext)
  const { searchRecipes, getConsult } = useContext(RecipesContext)

  const getDataRecipe = e => {
    getSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form
      className='col-12'
      onSubmit={e => {
        e.preventDefault()
        searchRecipes(search)
        getConsult(true)
      }}
    >
      <fieldset className='text-center'>
        <legend>Find Cocktails by category or ingredients</legend>
      </fieldset>
      <div className='row mt-4'>
        <div className='col-md-4'>
          <input name='ingredient' className='form-control' type='text' placeholder='Search by ingredient' onChange={getDataRecipe} />
        </div>
        <div className='col-md-4'>
          <select className='form-control' name='category' onChange={getDataRecipe}>
            <option value=''>--Select a category</option>
            {categories.map(category => (
              <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
            ))}
          </select>
        </div>
        <div className='col-md-4'>
          <input type='submit' className='btn btn-block btn-primary' value='Search recipe' />
        </div>
      </div>
    </form>
  )
}

export default Form
