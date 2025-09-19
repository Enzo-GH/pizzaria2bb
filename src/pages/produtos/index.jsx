// importação da ferramenta de busca de rotas
import axios from 'axios'
// importação das hooks do react - estado e renderização
import { useEffect, useState } from 'react';

const Produtos = () => {

    // estado com a lista de pizzas
    const [pizzas, setPizzas] = useState(['calabresa', 'peperoni', 'quatro queijos'])

    // consulta das pizzas via rota de consumo
    axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
    .then(response=>setPizzas(response.data.data))

    // Mapeamento das pizzas da lista (iteração)
    const listaPizzas = pizzas.map(pizza =><li>{pizza.nome}</li>);
    return(
    <>
        <h3>Listagem de Produtos</h3>
        <ul>
            {listaPizzas}
        </ul>
    </>
    )
}
export default Produtos