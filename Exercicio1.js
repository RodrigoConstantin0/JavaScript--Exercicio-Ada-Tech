// ## Exercício 1
// Crie uma função que receba como parâmetro a lista de hotifrutis abaixo que tem três tipos: `frutas`, `legumes` e `verduras`, faça com que essa função retorne o número de itens de cada um desses tipos.
// Sendo que:
// fruta → banana, maçã, abacaxi, melancia, laranja, limão.
// legume → cenoura, batata, brócolis, abóbora, tomate, alho-poró.
// verdura → alface, espinafre, rúcula, couve, agrião, acelga.

function variedades(item) {
    const frutas = ['banana','maçã','abacaxi','melancia','laranja','limão'];
    const legumes = ['cenoura', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró'];
    const verduras = ['alface', 'espinafre', 'rúcula', 'couve', 'agrião', 'acelga'];

    const ListaHortfruit = {
        frutas: item.filter(elementos => frutas.includes(elementos)),
        legumes: item.filter(elementos => legumes.includes(elementos)),
        verduras: item.filter(elementos => verduras.includes(elementos))
    };

    const contagem = {
        frutas: ListaHortfruit.frutas.length,
        legumes: ListaHortfruit.legumes.length,
        verduras: ListaHortfruit.verduras.length
    };

    return { ListaHortfruit, contagem };
}

const hotifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão', 'cenoura', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata'];
const ListaHortfruitEContagem = variedades(hotifrutis);
console.log(ListaHortfruitEContagem);


// Usei function variedades dos itens, Separei cada item em sua variavel frutas, legumes, verduras, E pedi pra retornar utilizando <br/>
// o metodo filter pra poder filtrar os elementos e ver se realmente existe, e em seguida usei o metodo includes, como o proprio nome diz <br>
// incluir os elementos dentro das variaves, Adicionei uma contagem no final para mostrar quantos itens tem em cada variedade 


