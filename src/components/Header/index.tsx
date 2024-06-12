import { HeaderContainer, HeaderContent, TransactionButton } from "./styles";

import logo from "../../assets/logo.svg"

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />
                <TransactionButton>Nova Transação</TransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}