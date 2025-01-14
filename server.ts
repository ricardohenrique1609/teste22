import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Habilita o CORS para permitir requisições de qualquer origem
app.use(cors());

// Permite que o servidor processe dados em formato JSON
app.use(express.json());

// Rota para buscar as recomendações
app.get('/recommendations', (req, res) => {
  console.log('Requisição recebida em /recommendations');

  // Array de recomendações (substitua pelos seus dados)
  const recommendations = [
    { id: 1, name: 'Laptop Gamer', description: 'Alto desempenho para jogos.' },
    { id: 2, name: 'Smart TV 4K', description: 'Qualidade de imagem excepcional.' },
    { id: 3, name: 'Fone Bluetooth', description: 'Som incrível e liberdade sem fio.' },
  ];

  // Envia as recomendações em formato JSON
  res.json(recommendations);
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});