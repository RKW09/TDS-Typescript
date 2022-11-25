console.clear();

let qtdeBatalhas: number = 0;
let numeroVitorias: number = 0;
let feedback: string = "";

let regExp: RegExp = /^[0-9]*$/;


function digitarBatalhas(): number
{
    let input = prompt(feedback + "Digite a Quantidade de Batalhas:");

    if(input != null && regExp.test(input))
    {
        qtdeBatalhas = parseInt(input);

        feedback = "";

        regExp = /^[C-D-O]*$/;

        for(let i: number = 0; i < qtdeBatalhas; i++)
        {
            digitarHabilidades();
        }
    }
    else
    {
        feedback = "ERRO! Digite apenas Números.\n\n";
        digitarBatalhas();
    }
    return numeroVitorias;
}

function digitarHabilidades()
{
    let inputs = prompt(feedback + "Digite as Habilidades:");

    if(inputs != null && regExp.test(inputs))
    {
        if(heroiVenceu(inputs))
        {
            numeroVitorias++;
        }
    }
    else
    {
        feedback = "ERRO! Digite apenas 'C', 'D' ou 'O'.\n\n";
        digitarHabilidades();
    }

    feedback = "";
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

console.log(digitarBatalhas());

/*Link do Playground:
https://www.typescriptlang.org/play?#code/MYewdgziA2CmB0w4EMBOAKAlAbgFC7gBcACAR0IBNYAhZQ5aAC2QgC5iwBXAWwCNZUxALzEADHiIceAkADUAloRCp5Ldlz4DhYibBIAzWLAq9kwANbsIhFWADm2gESO8BPcVSw7AUQAeAB3YAJS8-f20AegA9AG1RAFoATgBdACoAEgjXXH1OMGBCeXBiCnk7RTRaeiYWLHUeflRcAG9cYnbiSXkwf04SEX9UEG5-QnRDY1MLYgBqYkcAETLFWGJkYgBFTmQwQopkKhLVqoZmNkccfA7ieX10bt6SAEIRLmhoYgAyT49QgPhCLBrPcen1MJg2h1WtdruQqCcahBtP40BBYABJXYgx6XSEw4gTExmcxOFxXfG-HwBSKxADC8QW8QA8mlMq4KQTlOguvVNIIROIbsQADxkSg0OinFjYG4zGYQjnQjkdUrleioAASyF48mg8n2VAgWDwHIAvnjiObrrBoGiLUr8YSpiSRI5vEEgkynsQlmrVsh-LAwCxiAA5ABf3BkEHgAB0wPGyRzVRVUAizsaLVaOp5CJxUGApFGhgolCppbhzTk8gUioWU+qtTq9QagVgWhauqDCEiBkMRmMncTZvNfSs1kim7r9QcgawLuyOrdsX0kS8pO8vj9PFT-ACgWMHqvwfaLddl4wZPJZEHgLBOCueyfFWeKRoZKXlKoIHKTRTs+0AHEDadrXA6MJDtMrrup63pjoCayBsGSIAOS0ihAA0xAoQsKHECAnDYUyKFxgmYBJhSDZoFOLazkalzXFW1yQS68xklWuT5IUxSXkM163ve6DMM2M6GlYNjdHYmDsLwIAwLAOwdsxXI8kWjTaIK8gisQwnTq2MZwPYhCMDK8hygqUKvu0F7anpdExPIyTCK6tKOFuOm2bRhoOTMACMTlCK6CwXFZxDgRyub5oW+gMGif74kBQGRQWxA2JwsB4FWoCQPJ8DQCAdjoFRaaSoiWA4EAA
*/
