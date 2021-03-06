import React, { useEffect, useState } from "react";
//styles
import styled from "styled-components";
// react router
import { Link, useParams } from "react-router-dom";
//axios
import axios from "axios";

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
    console.log(params);

    const getSearchedRecipes = async (name) => {
        const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
        const api = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`
        );
        console.log(api.data.results);
        setSearchedRecipes(api.data.results);
    };

    useEffect(() => {
        getSearchedRecipes(params.search);
    }, [params.search]);

    return (
        <Grid>
            {searchedRecipes.map((item) => (
                <Card key={item.id}>
                    <Link to={`/recipe/${item.id}`}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            ))}
        </Grid>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Searched;
