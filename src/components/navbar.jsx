import React from 'react'
import { useRecipe } from '../context/RecipeContext'



function Navbar() {


    const { setsearchTerm, setFilterModee, filterMode } = useRecipe()
    return (
        <header className="App-header">
            <nav className="main__nav flex bg-slate-300 px-6 py-2 gap-8 items-center">
                <input type="text" onChange={(event) => setsearchTerm(event.target.value)} className='px-2 py-1 w-[30rem]' placeholder='Search Recipe' />
                <div className="spacer flex-grow"></div>
                <p className="font-bold text-md">Filters:</p>
                <div className="checkbox__group flex gap-4">
                    <div className="checkbox flex items-center justify-center gap-1 text-sm">
                        <label className={`${filterMode === "name" ? "text-slate-800" : "text-slate-500"} transition-all`} htmlFor="name">Name</label>
                        <input onClick={() => setFilterModee("name")} checked={filterMode === "name" ? true : false} type="checkbox" name="name" id="name" />
                    </div>
                    <div className="checkbox flex items-center justify-center gap-1 text-sm">
                        <label className={`${filterMode === "ingredients" ? "text-slate-800" : "text-slate-500"} transition-all`} htmlFor="ingredients">Ingredients</label>
                        <input onClick={() => setFilterModee("ingredients")} checked={filterMode === "ingredients" ? true : false} type="checkbox" name="ingredients" id="ingredients" />
                    </div>
                    <div className="checkbox flex items-center justify-center gap-1 text-sm">
                        <label className={`${filterMode === "cuisine" ? "text-slate-800" : "text-slate-500"} transition-all`} htmlFor="cuisine">Cuisine</label>
                        <input onClick={() => setFilterModee("cuisine")} checked={filterMode === "cuisine" ? true : false} type="checkbox" name="cuisine" id="cuisine" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar