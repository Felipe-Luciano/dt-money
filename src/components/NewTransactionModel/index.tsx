import * as Dialog from '@radix-ui/react-dialog';
import { CloseModal, Content, Overlay } from './styles';
import { X } from 'phosphor-react';

export function NewTransactionModl() {
    return(
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <form>
                    <input type="text" placeholder='Descrição' required/>
                    <input type="number" placeholder='Preço' required/>
                    <input type="text" placeholder='Categoria' required/>
                    <button type="submit">Cadastrar</button>
                </form>
                <CloseModal>
                    <X size={24}/>
                </CloseModal>
            </Content>
        </Dialog.Portal>
    )
}