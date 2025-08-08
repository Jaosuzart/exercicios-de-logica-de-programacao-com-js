exports.seed = function (knex) {
  return knex('livros')
    .del()
    .then(function () {
      return knex('livros').insert([
        {
          titulo: 'biografia do abismo',
          autor: 'Thomas Trauman e Felipe Nunes',
          ano_publicacao: 2023,
          preco: 34.9,
          descricao: 'Uma análise profunda da sociedade contemporânea'
        },
        {
          titulo: 'Proteção Moderna de Dados',
          autor: 'W. Curtis Preston',
          ano_publicacao: 2021,
          preco: 97.0,
          descricao: 'Guia completo sobre proteção de dados'
        },
        {
          titulo: 'SQL em 10 Minutos por Dia',
          autor: 'Ben Forta',
          ano_publicacao: 2021,
          preco: 79.0,
          descricao: 'Aprenda SQL de forma prática e eficiente'
        }
      ]);
    });
};
