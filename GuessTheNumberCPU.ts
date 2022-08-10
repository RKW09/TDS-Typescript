//script para rodar no Typescript Playground usando o prompt!
//https://www.typescriptlang.org/play?#code/MYewdgziA2CmB0w4EMBOAKAlAbgLACgCBzAV1gggBUALWAORIFsAjWDHAggMxLGABcAluAAEpclVoMWbEVhEAuEQDcQggCYEA3gRF6RcfiLBM2IAAqoQjAA5GAvCJtXb-dACIAIoKKD+sESYRaTMRWDB+VACARjCRaIAGBKc0ZBEQEVBbEn5kdRBUEX8ItBE8wWVBMGo0BXcOfH0DWCMTRjNzVIBBdQqqmtQlNtZCx2kR9DaOlzsGpsNjUytKcNyhZWQIIaYRkUcEvEb9BfawApCrbZlR+MP5lpFGZGFUC5Ar3cdEg84jvVBIDAENAQEQPAA1ZCMEAQEQAKVBaAAhAAdMD1X73VpLEAAYWoOTy70W1z2Ih+hD+IgA7tRBHBJjj8YT8iIkY4plZOqhkD0+tU0JhdPodFSmpy8QTcqzHABZZD8ajwLgggroeWK+A8sD5RjyABUcieLzeIgAtI9wuccSIANTxTB2y1nV44uZNfQSlYldabW22w7Cj2ZcBQODwEFg9wAeRJoWAUqJIi4aiU7idEuZ0pADSDHsEXEZ7SsWaT9g5OO5vN6lQFqCFYpFeeD-1DQIjoI8XWAbH4IBISKR9TuLaaALDwM7MbjVhE6gCxTWFU2ydTInT9q9qwVy4g7uDAF9m-pYNAILBj3pRaOmgWi2ZS6yAHwzizdGv9QWXj3Xm-B8ftpGHgAKKoGB4Fgf2AA0IgAJfOgUw7fqOxrWsWGQVuhj4ZBa0Qjn+R6NsGp7nshTZETeAHhkB7igRB4HQXBjzPIhDZ-sGpxoaEmEPomrL2nhZF6IRo4ifohEHkAA
console.clear();

guessTheNumber();

function guessTheNumber () : void
{
    let numeroPrompt = prompt("Digite um Numero entre 1 e 100 para o computador tentar adivinhar:");
    let numeroParaAdivinhar: number = Number(numeroPrompt);
    let numeroTentativas: number = 0;
    let menorNumero: number = 1;
    let maiorNumero: number = 100;

    console.log("Vamos Jogar!\n")

    let numeroChutado: number = 0;

    while(numeroChutado != numeroParaAdivinhar)
    {
        numeroChutado = Math.floor(Math.random() * (maiorNumero - menorNumero + 1) + menorNumero);
        numeroTentativas++;

        console.log("O numero chutado foi: " + numeroChutado);

        if(numeroChutado == numeroParaAdivinhar)
        {
            console.log("Acertou!!");
            console.log("O numero de tentativas foi: " + numeroTentativas);
        }
        else
        {
            if(numeroChutado > numeroParaAdivinhar)
            {
                console.log("Errrrrrrrou, é menor");
                maiorNumero = numeroChutado - 1;
            }
            else
            {
                console.log("Errrrrrrrou, é maior")
                menorNumero = numeroChutado + 1;
            }
        }
    }
}