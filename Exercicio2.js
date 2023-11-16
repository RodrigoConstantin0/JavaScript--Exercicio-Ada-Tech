// ## Exercício 2

// Temos a lista de empregados com seus respectivos nomes e salários:
// const empregados = [
//   { nome: 'João', salario: 1200 },
//   { nome: 'Maria', salario: 1500 },
//   { nome: 'Pedro', salario: 1800 },
//   { nome: 'Ana', salario: 1400 },
//   { nome: 'Carlos', salario: 2000 }
// ]
// Utilize o método `some` para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.
// Utilize o método `some` novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.
// Obs: Pode utilizar o `for`


const empregados = [
    { nome: 'João', salario: 1200 },
    { nome: 'Maria', salario: 1500 },
    { nome: 'Pedro', salario: 1800 },
    { nome: 'Ana', salario: 1400 },
    { nome: 'Carlos', salario: 2000 }
  ];  
  
  let PossuiSalario1500 = null;
  for (let i = 0; i < empregados.length; i++) {
    if (empregados[i].salario === 1500) {
      PossuiSalario1500 = empregados[i].nome;
      break;
    }
  }
  console.log('Nome do empregado com salário de R$ 1.500,00:', PossuiSalario1500 || 'Nenhum empregado possui esse salário.');
    
  const possuiSalario1000 = empregados.some(empregado => empregado.salario === 1000);
  const nomeEmpregadoComSalario1000 = empregados.find(empregado => empregado.salario === 1000)?.nome;
  
  if (nomeEmpregadoComSalario1000) {
    console.log('Nome do empregado com salário de R$ 1.000,00:', nomeEmpregadoComSalario1000);
  } else {
    console.log('Nenhum dos empregados possui o salário de R$ 1.000,00.');
  }
  
/*Nesse exercicio inciei a respostas utilzando uma variavel recebendo null, Recebendo um valor não definido e assim o 
Loop for vai fazer o processo até identificar o salario de 1500 assim identificando o null será substituido pelo
valor encontrado no Loop for.

Para podermos identificar o Salario de:1000 foi utilizado 2 metodos o metodo .some .find, na primeira const foi 
utilizado o .some pra verificar se possui o Salario de 1000 e o find pra identificar o nome de quem possui o Salario*/