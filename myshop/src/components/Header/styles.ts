import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: navy;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 60px;
`

export const HeaderTitle = styled.h1`
    color: #fff;
` 

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 1rem;

    button{
        border: none;
        border-radius: 5px;
        height: 40px;
        padding: 0 10px;        
        width: 120px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        font-size: 0.8rem;
    }

`

interface AuthButtonProps{
    isLogged: boolean
}

export const AuthButton = styled.button<AuthButtonProps>`
    background-color: ${(props) => props.isLogged ?  "red": "green"};
    color: #fff;
`

export const CartButton = styled.button`
    background-color: violet;
    color: black;
`