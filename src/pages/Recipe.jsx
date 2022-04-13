import React, { useEffect, useState } from "react";
//styles
import styled from "styled-components";
// react router
import { useParams } from "react-router-dom";
//axios
import axios from "axios";

function Recipe() {
    const [activeTab, setActiveTab] = useState("instructions");
    const [recipe, setRecipe] = useState({});
    let params = useParams();

    const getDetails = async () => {
        const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
        const api = await axios.get(
            `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`
        );

        setRecipe(api.data);
        console.log(api.data);
    };

    useEffect(() => {
        getDetails();
    }, [params.id]);

    return (
        <DetailsWrapper>
            <div>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} />
            </div>
            <Info>
                <Button
                    className={activeTab === "instructions" ? "active" : ""}
                    onClick={() => setActiveTab("instructions")}
                >
                    Instructions
                </Button>
                <Button
                    className={activeTab === "ingredients" ? "active" : ""}
                    onClick={() => setActiveTab("ingredients")}
                >
                    Ingredients
                </Button>
                {activeTab === "instructions" && (
                    <div>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: recipe.summary,
                            }}
                        ></h3>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: recipe.instructions,
                            }}
                        ></h3>
                    </div>
                )}
                {activeTab === "ingredients" && (
                    <ul>
                        <div>
                            {recipe.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>
                                    {ingredient.original}
                                </li>
                            ))}
                        </div>
                    </ul>
                )}
            </Info>
        </DetailsWrapper>
    );
}

const DetailsWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: #ffff;
    }

    h3 {
        margin-top: 2rem;
        line-height: 2rem;
    }

    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: #ffff;
    border: 2px solid #000;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;

export default Recipe;
