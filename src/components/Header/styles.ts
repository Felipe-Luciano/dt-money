import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TransactionButton = styled.button`
    height: 3.125rem;
    border: 0;
    border-radius: 6px;
    background: ${props => props.theme["green-500"]};
    padding: 0 1.25rem;
    font-weight: bold;
    cursor: pointer;
    color: ${props => props.theme.white};
    
    &:hover {
        background: ${props => props.theme["green-700"]};
        transition: background-color 0.2s;
    }
`