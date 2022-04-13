import React, { useEffect, useState } from "react";
//fetch data
import axios from "axios";
//styles
import styled from "styled-components";
import { devices } from "../breakpoints";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
// react router
import { Link } from "react-router-dom";

function Veggie() {
    const [veggies, setVeggies] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        const check = localStorage.getItem("veggie");
        if (check) {
            setVeggies(JSON.parse(check));
        } else {
            const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
            let api = await axios.get(
                `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10&tags=vegetarian`
            );
            console.log(api.data.recipes);
            localStorage.setItem("veggie", JSON.stringify(api.data.recipes));
            setVeggies(api.data.recipes);
        }
    };

    return (
        <>
            <Wrapper>
                <h3>Vegetarian Recipes</h3>
                <Splide
                    options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {veggies.map((veggie) => (
                        <SplideSlide key={veggie.id}>
                            <Card>
                                <Link to={`/recipe/${veggie.id}`}>
                                    <p>{veggie.title}</p>
                                    <img
                                        src={veggie.image}
                                        alt={veggie.title}
                                    />
                                    <Gradient />
                                </Link>
                            </Card>
                        </SplideSlide>
                    ))}
                </Splide>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.div`
    /* border: 1px solid red; */
    margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
    overflow: hidden;
    position: relative;

    p {
        /* border: 1px solid red; */
        position: absolute;
        z-index: 10;
        bottom: 0%;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 100%;
        color: #fff;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2rem;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
