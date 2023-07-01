import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecipe } from '../context/RecipeContext';

function RecipeDetail() {
    const { id } = useParams();
    const { RecipeArray } = useRecipe();

    const selectedRecipe = RecipeArray.find(recipe => recipe.id === id);



    return (
        <div className="recipeDetailPage">
            {selectedRecipe && <div className="recipeInfo">
                <h1>{selectedRecipe.name}</h1>
            </div>}
        </div>
    )
}

export default RecipeDetail