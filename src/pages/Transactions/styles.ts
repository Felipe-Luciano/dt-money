import styled from "styled-components";

export const TransactionsContainer = styled.main`
    max-width: 1120px;
    margin: 0 auto; 
    padding: 0 1.5rem;
    margin-top: 4rem;
`
export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

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