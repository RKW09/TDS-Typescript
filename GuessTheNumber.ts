//script para rodar no Typescript Playground usando o prompt!
//https://www.typescriptlang.org/play?#code/DYUwLgBAdgrgtiATgewAoENHoIIBMCWAbvlABaYBc08ARkhALwQCMAbANwBQoksCKAFRBQw6MEXQBnKnzqJGEAAxce1fsgDCpGKNzIZtek2Wdu4NUk3bdaFHAAOkJvbuOAFACIAaujjJJEABWyADmmACEEFo6IBDwFigUHgCUXJwhMCCSkgKkIAByhohuqaYAZjBQAMbiyFAQGVk5eYVwchAlEFSEyPi4nADenBAjCVY66HoKrXJufJbRNqiuYKXDo-OCwqLihFIA1PtpoxBVeVUA1gDimdkguDNIJVwAvuWVNfh1p+fXt5L3R7yTrdXr9IYnfBlObwBbWSbIRhMTZoTA4AjEMiYZLrEYQk6jFzIBxgTwAeTGPwmUzKvSoHgg+zGiwRjIgDOwVSQYGQMHCkQpKIguFiYG2YgkAVp+HpbJRQhEEr2klKJzeJxAwABuIg+IJEChMPULKmAD4xhgsHgiCRyIgcfq8TrHcz4XplsTHAoiSTyZSztTEdLZUyUSbEUyGQBRRCxuOx3kAGggAEuIAgoMhEJFFrFeWAUGMkqrHerHZrtS69S7XYGPSTvSs-UKAzYIMH2XLYShw2zo-H40nU+n0F9s1FrHmdIWUcXnaMy-rGtlcgUis8dW8XkA

let numeroParaAdivinhar: number = Math.floor(Math.random() * 100) + 1;
let numeroTentativas: number = 0;
let numeroChutado: number = 0;

let numeroChutadoPrompt = prompt("Vamos jogar! Chute um numero entre 1 e 100:");

guessTheNumber();

function guessTheNumber () : void
{
    numeroChutado = Number(numeroChutadoPrompt);

    numeroTentativas++;

    checkGuessedNumber();
}

function checkGuessedNumber () : void
{
    if(numeroChutado == numeroParaAdivinhar)
    {
        prompt("O numero chutado foi: " + numeroChutado + " Acertou!! O numero de tentativas foi: " + numeroTentativas);
    }
    else
    {
        if(numeroChutado > numeroParaAdivinhar)
        {
            numeroChutadoPrompt = prompt("O numero chutado foi: " + numeroChutado + " Errrrrrrrou, é menor! Chute outro numero:");
        }
        else
        {
            numeroChutadoPrompt = prompt("O numero chutado foi: " + numeroChutado + " Errrrrrrrou, é maior! Chute outro numero:")
        }
        guessTheNumber();
    }
}