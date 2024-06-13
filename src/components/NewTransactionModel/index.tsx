import * as Dialog from '@radix-ui/react-dialog';

import { CloseButton, Content, Overlay, TrasactionType, TrasactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModl() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <form>
                    <input type="text" placeholder='Descrição' required />
                    <input type="number" placeholder='Preço' required />
                    <input type="text" placeholder='Categoria' required />
                    <TrasactionType>
                        <TrasactionTypeButton variant='income' value='income'>
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TrasactionTypeButton>
                        <TrasactionTypeButton variant='outcome' value='outcome'>
                            <ArrowCircleDown size={24} />
                            Saída
                        </TrasactionTypeButton>
                    </TrasactionType>
                    <button type="submit">Cadastrar</button>
                </form>
                <CloseButton>
                    <X size={24} />
                </CloseButton>
            </Content>
        </Dialog.Portal>
    )
}