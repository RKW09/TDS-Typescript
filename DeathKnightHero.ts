console.clear();

let qtdeBatalhas: number = 3;
let numeroVitorias: number = 0;

let regExp: RegExp = /^[C-D-O]*$/;


for(let i: number = 0; i < qtdeBatalhas; i++)
{
    digitarBatalhas();
}

console.log(numeroVitorias);

function digitarBatalhas()
{
    let inputs = prompt("Digite as Habilidades: ");

    if(inputs != null && regExp.test(inputs))
    {
        if(heroiVenceu(inputs))
        {
            numeroVitorias++;
        }
    }
    else
    {
        digitarBatalhas();
    }
}

function heroiVenceu(habilidades: string): boolean
{
    for(let i: number = 0; i < habilidades.length; i++)
    {
        if(habilidades[i] == "C" && habilidades[i+1] == "D")
        {
            return false;
        }
    }
    return true;
}

/*Link do Playground:
https://www.typescriptlang.org/play?#code/MYewdgziA2CmB0w4EMBOAKAlAbgFC7gBcACAR0IBNYAhZQ5aAC2QgC5iwBXAWwCNZUxALzEAzHiIceAkADUAloRCp5Ldlz4DhxAAx4CsEqlgBzAKIAPAA7sASqctXtAegB6AbQDCAWgAi3gHkAXQAqABJnfVwAM2V0SXl1Hn5BET1ieWIAHjJKGjoGZghsDIBqUsxcAG9cYjriCnkTRTRaeiYWLDwAX3xQSBgEaBATdA0ZBSUVFhx8aM4wYEJ5cAamltQ2ws7KmvriBLArTkIIbStUEG4rQnQAIl91wlhiFmIACWReeWh5CmQqGxiHdZrV6vJouh5EcTmcAIQiLjQaDEABkqOIxnM1ngzwgt2hx1OmEq+z2+3BkMYMnkslgi1gnChMOJpIpdXJ7P240uk2Uqgg5TwXOIvX2YvqsGgEFgYI5copjWa9E2BQ6EC6Ct6vRiCyWKzAxGpl1p9OAjPQzG+v3+gPY+JUYBMmHYvBAg2QYGqCtiGASSU0qV0JUyOStPz+ANgEHgcCdhEYIfKbPlIohlq+Edt0fc8iCwhEd08dzRGPDNqjEFzpQAjPmhIXfCCFWSW1zjIROKhDdEGDLhVyJXUh5jDF3DYRUJxYD0gA
*/
