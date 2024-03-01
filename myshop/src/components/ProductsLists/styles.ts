import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;

    max-width: 1240px;
    height: 100%;
    margin: 4rem auto;
    padding: 0 2rem;
    gap: 2rem;

    & > * {
        flex: 1 300px;
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 0 0px 3px #ccc;
    }

`