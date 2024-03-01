import styled from "styled-components";

interface ContainerProps{
    showCart: boolean
}

export const Container = styled.aside<ContainerProps>`
    background-color: #fff;
    position: fixed;
    right: ${(props) => props.showCart ? "-400px" : "0"};
    top: 60px;

    width: 400px;
    padding: 2rem;
    height: 100vw;

    box-shadow: -5px 0 15px rgba(0,0,0, .25);
    transition: right .5s;
`

export const Title = styled.h1`

`

export const CartProductsList = styled.ul`
    list-style: none;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CartProductItem = styled.li`
`

export const CartTotal = styled.div`

`