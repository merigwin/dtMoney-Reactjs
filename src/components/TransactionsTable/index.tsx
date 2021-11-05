import {Container} from './styles';

export function TransactionsTable(){
    return (
    <Container>
        <table>
            <thead>
                <th>Título</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
            </thead>
            <tbody>
                <tr>
                    <td contentEditable="true">Desenvolvimento de Website</td>
                    <td className="deposit">R$ 12.000,00</td>
                    <td>Desenvolvimento</td>
                    <td>05/11/2021</td>
                </tr>

                <tr>
                    <td>Lanche</td>
                    <td className="withdraw">- R$ 50,00</td>
                    <td>Comida</td>
                    <td>11/11/2021</td>
                </tr>

                <tr>
                    <td>Meu Presente de Aniversário</td>
                    <td className="withdraw">- R$ 100,00</td>
                    <td>Lazer</td>
                    <td>20/11/2021</td>
                </tr>
            </tbody>
        </table>
    </Container>
    );
}