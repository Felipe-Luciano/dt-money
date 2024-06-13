import { HeaderContainer, HeaderContent, TransactionButton } from "./styles";

import * as Dialog from '@radix-ui/react-dialog';

import logo from "../../assets/logo.svg"
import { NewTransactionModl } from "../NewTransactionModel";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <TransactionButton>Nova Transação</TransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModl />
                </Dialog.Root>  
            </HeaderContent>
        </HeaderContainer>
    )
}