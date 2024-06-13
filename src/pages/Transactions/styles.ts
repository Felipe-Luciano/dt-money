import styled from "styled-components";

export const TransactionsContainer = styled.main`
    max-width: 1120px;
    margin: 0 auto; 
    padding: 0 1.5rem;
    margin-top: 4rem;
`

export const SearchForm = styled.form`
    display: flex;
    gap: 1rem;
    align-items: center;

    input {
        flex: 1;
        height: 3.375rem;
        padding: 1rem;
        border: 0;
        background: ${props => props.theme["gray-900"]};
        border-radius: 6px;
        color: ${props => props.theme["gray-300"]};

        &::placeholder {
            color: ${props => props.theme["gray-500"]};  
        }
    }

    button {
        height: 3.375rem;
        background: transparent;
        border: 1px solid ${props => props.theme["green-300"]};
        color: ${props => props.theme["green-300"]};
        padding: 0.875rem 2rem;
        border-radius: 6px;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;

        &:hover {
            border-color: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            background: ${props => props.theme["green-500"]};
            transition: all 0.2s
        }
    }
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    tr {
        background: ${props => props.theme["gray-700"]};
    }

    td {
        padding: 1.25rem 2rem;

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`

interface PriceHighlightProps {
    variant: 'income' | 'outcome'
} 

export const PriceHighlight = styled.td<PriceHighlightProps>`
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
`