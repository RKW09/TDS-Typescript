console.clear();

function inserirTexto()
{
    let entrada = prompt("Insira o Texto:");

    let regExp: RegExp = /[^a-z\s]/;

    if(entrada == null || entrada == "" || regExp.test(entrada) || entrada.length > 50)
    {
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
https://www.typescriptlang.org/play?#code/MYewdgziA2CmB0w4EMBOAKAlAbgLACgCAzAVzGABcBLcAAisllStQBVYAPCkLAgbwK0htOBVqwwFVMgAmyWgF5aAB1QgAtsoroARAElILeSFrsuIAFw6cBQcNG1UsAOYBRDsou0ASi-fLFWgB6AG0APWQAWgAvAB0IAF0gvEJ8YXoidAkpWXkFJTASaGhaAB9S8UlpOUUlHR0yiqc3D3gKWAhtbOrkTEbKnLl4ODBnCgALWgA+WgBWAAZMOyEBNPThBggmFjNuLBT0gF9l8Wgtk9X14RlYYCoiaVQAWQkIZGdYdSyq3Js1oWO+EBxDIlBoYFoNzuDzQL0g70+6Ha5i8nWYoyW+Eu9lgYjeVDkqKkDGcgXqKROyO4gSpIDazC+fxO+JqAGolLSQvMEhT-rQiCAMA4qF5CuoAEZMQLzbD0WgAHlotOGEjG41lVFZrMx6WxV3uSM43BCVAStVoDQaADIrUqjSATayAIxmgCEdQtOqutD13qELPk7Lt5kdLoO3sOtBOgPSoEgMAQ0BAznQAb+wPwm22bHt+yAA
*/
