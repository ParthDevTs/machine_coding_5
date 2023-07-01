import React from 'react'
import { useRecipe } from '../context/RecipeContext';

function NewRecipeModal() {
    const { setOpenModal } = useRecipe();
    return (
        <div className="absolute h-full w-full top-0 left-0 bg-black/30 flex items-center justify-center">
            <div className="container relative bg-white flex flex-col items-center justify-center gap-6 px-4 py-8 rounded-lg shadow-lg">
                <button onClick={() => setOpenModal(false)} className="absolute -top-12 -right-12 h-10 w-10 hover:text-red-500 text-red-700 bg-white rounded-full shadow hover:scale-105  "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
                <h1>Add New Recipe</h1>
                <div className="formGroup flex justify-between items-center w-full gap-4"><label className="px-5 w-[20rem]" htmlFor="">Name</label><input className="bg-slate-300 rounded-md flex-grow" type="text" name="" id="" /></div>
                <div className="formGroup flex justify-between items-center w-full gap-4"><label className="px-5 w-[20rem]" htmlFor="">Cuisine</label><input className="bg-slate-300 rounded-md flex-grow" type="text" name="" id="" /></div>
                <div className="formGroup flex justify-between items-center w-full gap-4"><label className="px-5 w-[20rem]" htmlFor="">Recipe</label><input className="bg-slate-300 rounded-md flex-grow" type="text" name="" id="" /></div>
                <div className="formGroup flex justify-between items-center w-full gap-4"><label className="px-5 w-[20rem]" htmlFor="">Ingredient</label><input className="bg-slate-300 rounded-md flex-grow" type="text" name="" id="" /></div>
                <button className="shadow-[0_10px_20px_-10px_rgb(20,184,166)]  text-white font-bold  hover:scale-105 px-5 py-2 text-sm bg-teal-500 rounded">Add Recipe</button>
            </div>
        </div>
    )
}

export default NewRecipeModal 