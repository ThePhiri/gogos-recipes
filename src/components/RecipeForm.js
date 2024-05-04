import React, { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { addRecipe } from '../redux_actions/recipeAction';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'


const RecipeForm = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.userID.userID.token);
    const userID = useSelector((state) => state.userID.userID.ID);
    const [recipeData, setRecipeData] = useState({
        title: '',
        userId: '',
        description: '',
        culture: '',
        country: '',
        image: '',
        ingredients: [''],
        steps: [{ step: '' }],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRecipeData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleIngredientChange = (e, index) => {
        const { value } = e.target;
        setRecipeData((prevState) => {
            const updatedIngredients = [...prevState.ingredients];
            updatedIngredients[index] = value;
            return {
                ...prevState,
                ingredients: updatedIngredients,
            };
        });
    };

    const handleStepChange = (e, index) => {
        const { value } = e.target;
        setRecipeData((prevState) => {
            const updatedSteps = [...prevState.steps];
            updatedSteps[index] = { step: value };
            return {
                ...prevState,
                steps: updatedSteps,
            };
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const img = new Image();

            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 800; // Maximum width for the resized image
                const MAX_HEIGHT = 800; // Maximum height for the resized image
                let width = img.width;
                let height = img.height;

                // Calculate the new width and height while maintaining aspect ratio
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                const resizedImage = canvas.toDataURL('image/jpeg', 0.8); // Convert the canvas to a data URL (JPEG format)

                setRecipeData((prevState) => ({
                    ...prevState,
                    image: resizedImage,
                }));
            };

            img.src = event.target.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    const handleAddIngredient = () => {
        setRecipeData((prevState) => ({
            ...prevState,
            ingredients: [...prevState.ingredients, ''],
        }));
    };

    const handleAddStep = () => {
        setRecipeData((prevState) => ({
            ...prevState,
            steps: [...prevState.steps, { step: '' }],
        }));
    };
    const handleRemoveIngredient = (index) => {
        setRecipeData((prevState) => {
            const updatedIngredients = [...prevState.ingredients];
            updatedIngredients.splice(index, 1);
            return {
                ...prevState,
                ingredients: updatedIngredients,
            };
        });
    };

    const handleRemoveStep = (index) => {
        setRecipeData((prevState) => {
            const updatedSteps = [...prevState.steps];
            updatedSteps.splice(index, 1);
            return {
                ...prevState,
                steps: updatedSteps,
            };
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("userid is", userID)
        recipeData.userId = userID;
        // Handle form submission with the recipeData
        dispatch(addRecipe(recipeData, navigate, token))
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Add Recipe</h2>
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={recipeData.title}
                    onChange={handleInputChange}
                    className="border-gray-300 border w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={recipeData.description}
                    onChange={handleInputChange}
                    className="border-gray-300 border w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="culture" className="block text-sm font-medium">
                    Culture
                </label>
                <input
                    type="text"
                    id="culture"
                    name="culture"
                    value={recipeData.culture}
                    onChange={handleInputChange}
                    className="border-gray-300 border w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium">
                    Country
                </label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={recipeData.country}
                    onChange={handleInputChange}
                    className="border-gray-300 border w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-medium">
                    Image
                </label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="border-gray-300 border w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>
            {recipeData.image && (
                <div className="mb-4">
                    <img src={recipeData.image} alt="Recipe" className="w-full h-auto" />
                </div>
            )}
            <div className="mb-4">
                <label htmlFor="ingredients" className="block text-sm font-medium">
                    Ingredients
                </label>
                {recipeData.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex mb-2">
                        <input
                            type="text"
                            name="ingredient"
                            value={ingredient}
                            onChange={(e) => handleIngredientChange(e, index)}
                            className="border-gray-300 border w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        {index !== 0 && (
                            <FaMinusCircle
                                className="text-red-500 ml-2 cursor-pointer"
                                onClick={() => handleRemoveIngredient(index)}
                            />
                        )}
                    </div>
                ))}
                <FaPlusCircle
                    className="text-blue-500 ml-2 cursor-pointer"
                    onClick={handleAddIngredient}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="steps" className="block text-sm font-medium">
                    Steps
                </label>
                {recipeData.steps.map((step, index) => (
                    <div key={index} className="flex mb-2">
                        <input
                            type="text"
                            name="step"
                            value={step.step}
                            onChange={(e) => handleStepChange(e, index)}
                            className="border-gray-300 border w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        {index !== 0 && (
                            <FaMinusCircle
                                className="text-red-500 ml-2 cursor-pointer"
                                onClick={() => handleRemoveStep(index)}
                            />
                        )}
                    </div>
                ))}
                <FaPlusCircle
                    className="text-blue-500 ml-2 cursor-pointer"
                    onClick={handleAddStep}
                />
            </div>

            <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-md focus:outline-none "
            >
                Submit
            </button>
        </form>
    );
};

export default RecipeForm;
