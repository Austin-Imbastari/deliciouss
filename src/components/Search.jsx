import React, { useState } from "react";
//react icons
import { FaSearch } from "react-icons/fa";
//styles
import styled from "styled-components";
//react router dom
import { useNavigate } from "react-router-dom";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`);
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <input
                    onChange={inputHandler}
                    type='text'
                    placeholder='favorite food :)'
                    value={input}
                />
                <FaSearch />
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    width: 50%;
    margin: 0rem 20rem;
    position: relative;
    margin-top: 2rem;

    input {
        background: linear-gradient(35deg, #494949, #313131);
        border: none;
        font-size: 1rem;
        color: #fff;
        padding: 1rem 3rem;
        outline: none;
        border-radius: 1rem;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #fff;
    }
`;

export default Search;
