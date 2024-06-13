import styled from "styled-components";

export const SummaryContainer = styled.section`
    max-width: 1120px;
    margin: 0 auto; 
    margin-top: -5rem;
    padding: 0 1.5rem;

    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
`
interface SummaryCardProps {
    variant?: "green"
}

export const SummaryCard = styled.div<SummaryCardProps>`
    background: ${props => props.variant === "green" ? props.theme["green-700"] : props.theme["gray-600"]};
    width: 100%;
    border-radius: 6px;
    height: 8.5625rem;
    padding: 1.5rem 1.5rem 1.5rem 2rem;
    
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${props => props.theme["gray-300"]};
    }

    strong {
        font-size: 2rem;
        display: block;
        margin-top: 0.75rem;
    }
`