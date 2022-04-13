import React from "react";
//icons
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
//styles
import styled from "styled-components";
//router
import { NavLink } from "react-router-dom";

function Category() {
    return (
        <List>
            <SLink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={"/cuisine/American"}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={"/cuisine/Thai"}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={"/cuisine/Japanese"}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0rem;
`;

// styling the NavLink from react router dom with styled components
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);
    text-decoration: none;
    transition: all 0.5s ease-out;

    h4 {
        color: #ffff;
        font-size: 0.8rem;
        line-height: 2.5rem;
    }

    svg {
        color: #ffff;
        font-size: 1.5rem;
    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
        svg {
            color: #ffff;
        }
        h4 {
            color: #ffff;
        }
    }
    &:hover {
        transform: scale(1);
    }
`;

export default Category;
