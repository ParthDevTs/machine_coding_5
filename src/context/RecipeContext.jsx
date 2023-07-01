import { createContext, useContext, useState } from "react";
import { Recipies } from "../data/recipeData";
export const RecipeContext = createContext();


export const RecipeProvider = ({ children }) => {
    const [searchTerm, setsearchTerm] = useState("")
    const [filterMode, setFilterModee] = useState("")
    const [RecipeArray, setRecipeArray] = useState(Recipies)
    const [openModal, setOpenModal] = useState(false)
    const addARecipe = (newRecipe) => {
        setRecipeArray([...RecipeArray, newRecipe])
    }
    const deleteRecipie = (id) => {
        const updatedArray = RecipeArray.filter(recipe => recipe.id !== id);
        setRecipeArray(updatedArray)

    }

    return <RecipeContext.Provider value={{ openModal, setOpenModal, addARecipe, RecipeArray, deleteRecipie, RecipeArray, setRecipeArray, searchTerm, setsearchTerm, filterMode, setFilterModee }}>{children}</RecipeContext.Provider>
}

export const useRecipe = () => useContext(RecipeContext)