import { MagnifyingGlass } from "phosphor-react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, SearchForm, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm>
                    <input type="text" placeholder="Busque por transações"/>
                    <button>
                        <MagnifyingGlass size={20}/>
                        <strong>Buscar</strong>
                    </button>
                </SearchForm>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%" >Desenvolvimento de site</td>
                            <PriceHighlight variant='income' >R$ 12.000,00</PriceHighlight>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td>Hamburguer</td>
                            <PriceHighlight variant='outcome'>- R$ 59,00</PriceHighlight>
                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
            
        </div>
    )
}