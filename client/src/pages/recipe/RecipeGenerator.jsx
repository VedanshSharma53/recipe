import React, { useState } from "react";
import { useGenerateRecipeMutation } from "../../features/recipe/recipeApiSlice";
import Button from "../../components/button/Button";

const RecipeGenerator = () => {
    const [ingredients, setIngredients] = useState("");
    const [recipes, setRecipes] = useState([]); // Store multiple recipes
    const [error, setError] = useState(null); // Store errors
    const [generateRecipe, { isLoading }] = useGenerateRecipeMutation();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form from reloading the page

        const apiKey = "4f7012bc95b84510a955a8d48626b23c";
        const query = ingredients.trim(); // Remove extra spaces

        if (!query) {
            setError("Please enter at least one ingredient.");
            return;
        }

        setError(null); // Clear previous errors

        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&number=5&addRecipeInformation=true`);
            
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }

            const data = await response.json();

            if (data.results.length === 0) {
                setRecipes([]);
                setError("No recipes found for the given ingredients.");
            } else {
                setRecipes(data.results); // Store multiple recipes
            }
        } catch (error) {
            console.error(error);
            setError("Failed to fetch recipes. Please try again.");
        }
    };

    return (
        <section className="box flex flex-col gap-6 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="font-bold text-2xl text-center">AI Recipe Generator</h2>
            <hr />
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <textarea
                    placeholder="Enter ingredients (e.g., Tomato, Cheese, Bread)..."
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="p-2 border bg-gray-100 rounded resize-none"
                    rows="3"
                />
                <Button content={"Generate Recipe"} type={"submit"} loading={isLoading} />
            </form>

            {/* Error Message */}
            {error && <p className="text-red-500 text-center">{error}</p>}

            {/* Display Recipes */}
            {recipes.length > 0 && (
                <div className="bg-gray-50 p-4 rounded mt-4">
                    <h3 className="font-bold text-lg text-center">Generated Recipes</h3>
                    <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recipes.map((recipe) => (
                            <li key={recipe.id} className="border p-4 rounded-lg shadow-md bg-white flex flex-col items-center">
                                <img 
                                    src={recipe.image} 
                                    alt={recipe.title} 
                                    className="w-32 h-32 object-cover rounded-md mb-2 shadow-sm"
                                />
                                <h4 className="font-semibold text-center text-lg">{recipe.title}</h4>
                                <a 
                                    href={recipe.sourceUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-blue-500 underline mt-2"
                                >
                                    View Full Recipe
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default RecipeGenerator;
