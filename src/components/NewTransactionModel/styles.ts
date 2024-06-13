import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgb(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
    position: fixed;
    min-width: 35rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme["gray-800"]};
    padding: 2.5rem 3rem;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;

        input {
            background: ${props => props.theme["gray-900"]};
            padding: 1rem;
            border-radius: 6px;
            border: 0;
            color: ${props => props.theme["gray-300"]};

            &::placeholder {
                color: ${props => props.theme["gray-500"]};
            }
        }

        button[type="submit"] {
            border: 0;
            background: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            padding: 1rem;
            border-radius: 6px;
            font-weight: bold;
            cursor: pointer;
            margin-top: 2.5rem;
            height: 3.625rem;

            &:hover {
                background: ${props => props.theme["green-300"]};
                transition: background-color 0.2s;
            }
        }
    }
`

export const CloseModal = styled(Dialog.Close)`
    border: 0;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    line-height: 0;
    cursor: pointer;

    svg {
        color: ${props => props.theme["gray-500"]};
    }
` 