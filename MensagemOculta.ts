console.clear();

let feedback = "";

function inserirTexto()
{
    let entrada = prompt(feedback + "Insira o Texto:");

    let regExp: RegExp = /[^a-z\s]/;

    if(entrada == null || entrada == "" || regExp.test(entrada) || entrada.length > 50)
    {
        feedback = "ERRO! A mensagem somente pode conter espaços, letras de a-z e ter até 50 caracteres.\n\n"
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
https://www.typescriptlang.org/play?#code/MYewdgziA2CmB0w4EMBOAKAlAbgFC7gBcACAM1lgBMAjZYAa2IF5iAiVvXUgVzGEICW4YgMixUA1ABVYAD0IgsuAN65i64kWKwwhVMkrJmxAA6oQAWxOF05KrQbEA1GwCSkSUZDEZ8kAC5WHHwNTVgSVFgAcwBRWRN-YgAlaLiTYwB6AG0APWQAWgAvAB0IAF0MzlCBUnQdPQMjJhYwbmhoYgAfTu1dfUNmFnYunsjY+PhCWAgbev7kTBHehsN4ODAowgALYgA+YgBWAAZMNQ1VUNC7GjpGIZikpIB5AEJiAEFiCx0IZCjYCzEKDfXSwUwgShg0Cg1DaCAmZAAc5AEAANGEGhBiJDiAVCtpiFNYchCABLw5HYjANB0InTeDFMCM1hnS4iMQSaRyBRYPChAC+rO00AgsCFFzZ2NgwBq+lQAFkfn8AXU+o1ggLcIKuLx+EIwFKZaQ5YrIMqLOgpn5EjMJBtThL1FpfgJDDa9KIosZ2FUNFaFMZ-SBJhILcEhS6Bk4WEGskcyr71KQQBgtAJEq0LNRxMYjtgRMQADyE7nB9abLb5gROJynUKOy41S2lrICMqDNidgBkXZLflbTgAjO2XkM2HXJQ3JUDkK6jNG+woB8O+ZL+cQhYLQtCoHA1iAouhIws8NrRKLOb4eTggA
*/
