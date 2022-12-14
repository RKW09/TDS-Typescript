/* Exercício 2f - Criar uma Função para Procurar Valor no Array não importando a ordem em que os elementos estão distribuídos. 
Deve retornar o índice do elemento ou -1 caso não o encontre */

let arrayNumeros: Array<number> = [1, 2, 20, 17, 4, 87, 1, 8, 9, 35, 1, 15, 14, 90, 85, 34, 37, 27, 1]
let valor: number = 1;

console.log("Numero para Pesquisar: " + valor + " " + procurarValorNoVetor(valor, arrayNumeros));

function procurarValorNoVetor(valor: number, arrayProcurar: Array<number>) : Array<string>
{
    let encontrou: boolean = false;
    let indicesEncontrados: Array<string> = [];

    for(let i = 0; i < arrayProcurar.length; i++)
    {
        if(valor == arrayProcurar[i])
        {
            indicesEncontrados.push("Encontrei o valor no indice: " + i + " ");
            encontrou = true;
        }
    }
    if(encontrou == false)
    {
        indicesEncontrados.push(" -1, Não Encontrei");
    }

    return indicesEncontrados;
}
