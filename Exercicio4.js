// ## Exercício 4
// Temos a lista de alunos com suas notas:

// const alunos = [
//   { nome: 'Ana', notas: [7, 8, 9] },
//   { nome: 'Pedro', notas: [5, 6, 7] },
//   { nome: 'Maria', notas: [9, 8, 10] },
//   { nome: 'João', notas: [6, 7, 8] },
//   { nome: 'Lucas', notas: [8, 9, 7] },
//   { nome: 'Julia', notas: [10, 8, 9] }
// ]

// Utilize o método `map` para criar um novo objeto com o nome e a média de cada aluno.
// A média deve ser calculada utilizando o método `reduce` para somar as notas e dividi-las pelo número de notas.
// Obs: Utilize `for` ou algum método de array.

const alunos = [
    { nome: 'Ana', notas: [7, 8, 9] },
    { nome: 'Pedro', notas: [5, 6, 7] },
    { nome: 'Maria', notas: [9, 8, 10] },
    { nome: 'João', notas: [6, 7, 8] },
    { nome: 'Lucas', notas: [8, 9, 7] },
    { nome: 'Julia', notas: [10, 8, 9] }
  ];
  
const MediaDosAlunos = alunos.map(aluno => {
    const media = aluno.notas.reduce((total, nota) => total + nota, 0) / aluno.notas.length;
    return {nome: aluno.nome, media: media.toFixed(1)};
})
console.log('Alunos e suas medias:');
console.log(MediaDosAlunos);
/*Nesse exercicio utilizei o .map para itera sobre a array alunos e .reduce realizar a soma das notas para calcular a media,
 e um Return pra gerar um novo objeto com nome e media dos alunos, tofixed arredondando o valor para duas casas decimais */