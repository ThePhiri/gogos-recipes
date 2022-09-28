import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MyRecipes = () => {
    const [recipesList, setMyRecipes] = useState([])
    const params = useParams();

    useEffect(() => {
        getMyRecipes();
    }, []);

    const getMyRecipes = async () => {
        const token = localStorage.getItem("token")


        var myHeaders = new Headers();
        myHeaders.append("token", token);


        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const api = await fetch("https://gogos-recipes-backend.herokuapp.com/api/recipes/user/" + params.id + "?" + token, requestOptions);
        const data = await api.json();
        setMyRecipes(data.data);

    }
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>My Recipes</h1>



            {recipesList ? recipesList.map((item, index) => (
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold capitalize'>{item.name}</p>
                            <Link to={"/recipe/" + item._id}><button>View</button></Link>
                        </div>
                    </div>
                </div>
            )) : <div className='flex justify-center '><p>No recipes. Add some now </p><img src="https://miro.medium.com/max/1600/1*XWuUx3XuZHJDbyzE8Muysw.gif" alt="no image" /></div>}


        </div >
    )
}

export default MyRecipes