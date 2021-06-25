import express from 'express';
import ContatoController from './src/controllers/ContatoController';
import EstoqueController from './src/controllers/EstoqueController';
import PedidoController from './src/controllers/PedidoController';
import ProdutoController from './src/controllers/ProdutoController';

const app = express();
const PORT = 3000;

app.get('/contatos', async (req, res) => {    
    const result = await ContatoController.getContatos(req.query);
    res.send(result);
});

app.get('/pedidos', async (req, res) => {    
    const result = await PedidoController.getPedidos(req.query);
    res.send(result);
});

app.get('/produtos', async (req, res) => {    
    const result = await ProdutoController.getProdutos(req.query);
    res.send(result);
});

app.get('/estoque', async (req, res) => {    
    const result = await EstoqueController.getEstoques(req.query);
    res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});