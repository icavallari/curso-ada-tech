import styled from 'styled-components'

export const Card = styled.article`
    width: 100%;
    padding: 2rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProductImage = styled.img`
    width: 250px;
    height: 400px;

    object-fit: contain;
`

export const ProductTitle = styled.h2`
    font-weight: 500;
    font-size: 1rem;
    margin-top: 1rem;
    height: 5rem;
`

export const ReviewPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
`

export const Review = styled.span`
    display: flex;
    align-items: center;
    svg{
        font-size: 1rem;
    }
`

export const Price = styled.strong`

`

export const AddoToCartWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
`

export const AddToCart = styled.button`
    border: none;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    padding: 0 10px;        
        
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.8rem;
    color: #fff;
    background-color: blue;
`

export const RemoveFromCart = styled.button`
    border: none;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    padding: 0 10px;        
        
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.8rem;
    color: #000;
    background-color: violet;
`