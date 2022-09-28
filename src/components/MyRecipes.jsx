import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MyRecipes = () => {
    const [foodList, setMyRecipes] = useState([])
    const params = useParams();

    useEffect(() => {
        getMyRecipes();
        console.log("foods", foodList);
    }, []);

    const getMyRecipes = async () => {
        const token = localStorage.getItem("token")
        console.log("toekn", "https://gogos-recipes-backend.herokuapp.com/api/recipes/user/" + params.id + "?" + token);

        var myHeaders = new Headers();
        myHeaders.append("token", token);
        var raw = "";

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

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>

                {foodList.map((item, index) => (
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold capitalize'>{item.name}</p>
                            <Link to={"/recipe/" + item._id}><button>View</button></Link>
                        </div>
                    </div>
                ))}

            </div>


        </div>
    )
}

export default MyRecipes