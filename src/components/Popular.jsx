import React, { useEffect } from "react";
import axios from "axios";

function Popular() {
    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
        const api = await axios.get(
            `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`
        );
        console.log(api.data);
    };

    return (
        <div>
            <h1>Popular</h1>
        </div>
    );
}

export default Popular;
