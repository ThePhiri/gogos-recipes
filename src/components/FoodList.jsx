import React from 'react'
import {useEffect, useState} from "react";

const FoodList = () => {
    const [foodList, setFoodList] = useState([])

    useEffect(() => {
        getFoodList();
         console.log("what", foodList);
    }, []);

    const getFoodList = async () => {
        const check = localStorage.getItem("foodList");
       

        if (check) {
            setFoodList(JSON.parse(check));
        } else {
            const api = await fetch (`https://gogos-recipes-backend.herokuapp.com/api/recipes`);
            const data = await api.json();
            localStorage.setItem("foodList", JSON.stringify(data));
            setFoodList(data);
           
        }
    }
  return (
    <div>FoodList</div>
  )
}

export default FoodList