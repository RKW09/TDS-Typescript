console.clear();

let feedback = "";

function inserirTexto()
{
    let entrada = prompt(feedback + "Insira o Texto:");

    let regExp: RegExp = /[^a-z\s]/;

    if(entrada == null || entrada == "" || regExp.test(entrada) || entrada.length > 50)
    {
        feedback = "ERRO! A mensagem somente pode conter letras de a-z e ter até 50 caracteres.\n\n"
        inserirTexto();
    }
    else
    {
        decifrarMensagem(entrada);
    }
}

function decifrarMensagem(texto: string)
{
    let saida: string = "";

    texto = texto.trim();

    saida += texto[0];

    for(let i: number = 0; i < texto.length; i++)
    {
        if(texto[i] == " " && texto[i+1] != " ")
        {
            saida += texto[i+1];
        } 
    }
    console.log(saida);
}

inserirTexto();

/*Link do Playground:
https://www.typescriptlang.org/play?#code/MYewdgziA2CmB0w4EMBOAKAlAbgFC7gBcACAM1lgBMAjZYAa2IF5iAiVvXUgVzGEICW4YgMixUA1ABVYAD0IgsuAN65i64kWKwwhVMkrJmxAA6oQAWxOF05KrQbEA1GwCSkSUZDEZ8kAC5WHHwNTVgSVFgAcwBRWRN-YgAlaLiTYwB6AG0APWQAWgAvAB0IAF0MzlCBUnQdPQMjJhYwbmhoYgAfTu1dfUNmFnYunsjY+PhCWAgbev7kTBHehsN4ODAowgALYgA+YgBWAAZMNQ1VUNC7GjpGIZikpIB5AEJiAEFiCx0IZCjYCzEKDfXSwUwgShg0Cg1BhBoQYiQ4gFQraYhTWHIQgAS8OR2IwDQdAx03gxTA5NYZ0uIjEEmkcgUWDwoQAvtTtNAILAORcaYjYMAavpUABZH5-AF1PqNYJs3Dsri8fhCMACoWkEXiyCSizoKZ+RIzCQbU589RaX4CQxGvSiKLGdhVDQGhTGV0gSYSPXBDlWgZOFgerJHMrO9SkEAYLQCRKtCzUcTGI7YETEAA86MZnvWmy2qYETicp1C5suNX12ayAjKgzY9YAZA2s35q04AIy1l5DNgl-ll-lA5DWoyBlsKNudln81nEDns0LQqBwNYgKLof0LPCK0Tc+m+Jk4IA
*/
