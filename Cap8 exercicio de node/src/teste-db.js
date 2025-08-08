const db = require('./database/connection');

async function testarBancoDeDados() {
  try {
    // Inserir alguns livros
  const livrosInseridos = await db('livros').insert([
      {
        titulo: 'Dom Casmurro',
        autor: 'Machado de Assis',
        isbn: '9788535910682',
        ano_publicacao: 1899,
        preco: 29.9,
        descricao: 'Um clássico da literatura brasileira'
      },
      {
        titulo: 'O Pequeno Príncipe',
        autor: 'Antoine de Saint-Exupéry',
        isbn: '9788574063578',
        ano_publicacao: 1943,
        preco: 24.9,
        descricao: 'Uma história atemporal sobre amizade'
      }
    ]);
    console.log('Livros inseridos com sucesso!');

    // Consultar todos os livros
    const livros = await db('livros').select('*');
    console.log('\nLivros cadastrados:');
    console.log(livros);

    // Consultar um livro específico
    const livro = await db('livros').where('titulo', 'Dom Casmurro').first();
    console.log('\nLivro específico:');
    console.log(livro);
  } catch (error) {
    console.error('Erro:', error);
  } finally {
    // Fechar a conexão com o banco de dados
    await db.destroy();
  }
}

// Executar o teste
testarBancoDeDados();
