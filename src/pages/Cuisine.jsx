import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams } from 'react-router-dom';


function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipies = await data.json();

        setCuisine(recipies.results);

    };

    useEffect(() => {
      getCuisine(params.type);
    
    }, [params.type])
    
  return (
    <Grid>
        {cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </Card>
            )
        }
        )}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
    `

    const Card = styled(motion.div)`
    img {
        border-radius: 2rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    a {
        text-decoration: none;
    }

    h4 {
        text-align: center;
      //  padding: 1rem;
    }
    `;
export default Cuisine

