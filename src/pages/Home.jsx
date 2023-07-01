import React, { useState } from 'react'
import Navbar from '../components/navbar'
import { useRecipe } from '../context/RecipeContext'
import { useNavigate } from 'react-router-dom';
import NewRecipeModal from '../components/newRecipeModal';

function Home() {
    const { RecipeArray, openModal, setOpenModal } = useRecipe();

    const navigate = useNavigate()

    return (
        <div className="homepage">
            <Navbar />
            <ul className="recipeList grid grid-cols-4 w-full mt-8 px-8 items-center justify-center gap-6 relative">
                {RecipeArray && RecipeArray.map(recipe => {
                    const { id, name, cuisine, img } = recipe;
                    return <li key={id} className="bg-slate-300 shadow-lg pb-6 rounded-md flex flex-col items-center justify-evenly">
                        <img src={img} className="w-full" alt={name} />
                        <h3 className="w-full px-4 text-lg font-bold py-6">{name}</h3>
                        <div className="cuisine__type text-sm flex w-full items-center justify-between px-4">
                            <p className="font-bold pointer-events-none">Cuisine Type: </p>
                            <p className=" pointer-events-none">{cuisine}</p>
                        </div>
                        <div className="cuisine__type text-sm flex w-full items-center justify-between px-4">
                            <p className="font-bold pointer-events-none">Ingredients: </p>
                            <p onClick={() => navigate(`/recipe/${id}`)} className="cursor-pointer hover:text-blue-500 ">See Recipe</p>
                        </div>
                        <div className="cuisine__type text-sm flex w-full items-center justify-between px-4">
                            <p className="font-bold pointer-events-none">Instructions: </p>
                            <p onClick={() => navigate(`/recipe/${id}`)} className="cursor-pointer hover:text-blue-500 ">See Recipe</p>
                        </div>
                    </li>
                })}
                <li onClick={() => setOpenModal(true)} className="text-xl h-10 w-10 cursor-pointer text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </li>

            </ul>
            {openModal && <NewRecipeModal />}
        </div>
    )
}

export default Home