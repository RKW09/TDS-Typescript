console.clear();

let qtdeGrenais: number = 0;
let vitoriasDoInter: number = 0;
let vitoriasDoGremio: number = 0;
let empates: number = 0;
let golsDoInter: number = 0;
let golsDoGremio: number = 0;

let feedback: string = "";


function informarPlacar()
{
    let placar = prompt(feedback + "Digite os gols do Inter e os gols do Grêmio:");

    let regExp: RegExp = /\b^[0-9\s]*$/;

    if(placar == null || !regExp.test(placar) || placar.length < 3)
    {
        feedback = "ERRO! Digite apenas números, use espaço para separar os gols.\n\n"
        informarPlacar();
    }
    else
    {
        let index = placar.indexOf( " " ); //ver onde está o espaço, caso algum time tenha gols >= 10

        golsDoInter = parseInt(placar.slice(0, index));

        golsDoGremio = parseInt(placar.slice(index + 1, placar.length));

        qtdeGrenais++;

        if(golsDoInter > golsDoGremio)
        {
            vitoriasDoInter++;
        }
        else if(golsDoGremio > golsDoInter)
        {
            vitoriasDoGremio++;
        }
        else
        {
            empates++;
        }

        feedback = "";

        informarNovoGrenal();
    }
}

function informarNovoGrenal()
{
    let novoGrenal = prompt(feedback + "Novo grenal (1-sim 2-nao)\n");

    if(novoGrenal == "1")
    {
        feedback = "";
        informarPlacar();
    }
    else if(novoGrenal == "2")
    {
        mostrarResultados();
        //return;
    }
    else
    {
        feedback = "ERRO! Digite apenas números.\n\n"
        informarNovoGrenal();
    }
}

function mostrarResultados()
{
    let saida: string = "";

    if(qtdeGrenais == 1)
    {
        saida = "\n\n" + qtdeGrenais + " grenal";
    }
    else
    {
        saida = "\n\n" + qtdeGrenais + " grenais"
    }

    saida += "\nInter:" + vitoriasDoInter;
    saida += "\nGremio:" + vitoriasDoGremio;
    saida += "\nEmpates:" + empates;


    if(vitoriasDoInter > vitoriasDoGremio)
    {
        saida += "\nInter venceu mais\n\n";
    }
    else if(vitoriasDoGremio > vitoriasDoInter)
    {
        saida += "\nGremio venceu mais\n\n";
    }
    else
    {
        saida += "\nNao houve vencedor\n\n";
    }

    console.log(saida);
}

informarPlacar();


/*Link do Playground:
https://www.typescriptlang.org/play?#code/MYewdgziA2CmB0w4EMBOAKAlAbgFC7gBcACAR0IBNYBxVWMZASwgC5iwBXAWwCNZViAXmIAGPEWIA3RoRCpGyCABEQASTCF+bTr35DR42CWmz5ilbVhdGIbdz4DhYgkeJWADsk2t29vU8MSAHMYZTUNLV9dRwMXYNCLOmtbKId9ZzjiADNYWAoeZGAAazYIQnkwIP0AImq8fCyOMGBCGzBiRjAsuS40AAVoQrQsXABvXGJJ4gl3QeA0fXdUEC53QnQcvILi4gBqYmqlRiCZWGIQCGIQ6EuKEGJ1TQEzi6vQ4jviWgAr5JZqnD4KbTVx0IIAUQAHu42AAlWAQ6H6AD0AB0eAA9ADaIgAtABOVEQAC6ACoACTI+rAxhZdCzIaOYScaDQYgAH3ZxAAhGCoe54N51gz5qhMByuSK0PA4JVCAALYgAHmIAGZMBMpuNgcDNvlCkUauDYbCAPLc4hHE6aYjIdz0RTsABfXH4FwANMQOBAzrAIJ4AOf3TyoZDEH0hhava4QeCosDx6qanUdLo9fpzYaA4EAX2TbhusHz2pTIJInSokMWmdQ8ArsEhprpBxbOGIyORkj04CobjKAEPzn3AyBPfMoLboEFuMRWq7Z-R5WGY8QAHzCACMIiBpZjKke-mIIZ9j3pNfgEGgjGAsHQIk99chmEB+eBe5AlmSizQJ40Z8ZF5Xje6CPnsxAbp6Uq1rKQQKs+1KluQVCWAwzC7LsCEprS6DvgeAirm8NyJFYNgaqWxAluRkwmHIChhHh6F4ORebkbAhYdHS76fjYa6EfRERiq+WpCSmNFmGE3EgIxInECxpZsT6MmUVRHheH60nMTuKZ6tshrCLUmE6p03SoL0qAAHIgJIH50Aw0BYExUx5nmuCNM0rTgKmJlmZZ1kocg9kaspEhgFZNkOmywhLCsawbLk+o7Ps1S+fcQS2QFxDoBuuIQIwXDEAATLiDAgJgiYvjSdKhX56WRfpG4AsWMk6QaNR1DJxnpqgAyMg5+ZyZMClnNh1XhXZQj6QVjXAspwJcBc5RoPCEAcNAhDIHcEB9eRHZ0IQHCoGAjmTANBaKTNzXxbpRomualrHKctr2gwlxgC6bqxvGiYdWmploCl-mBcdsm4C5bktG0xDzWUoaoMtq3rZtIzBa4EBMBQyClOUnRVPp7X5thSE0OlzATeBZHCeRaOMBjNRfWA1RgUT-mk0lVy1e1ub5kNTVU+jYb6fTjP7MzJOXGzaUOswSZc-m1O07sgtgHh-xgWJdH7gJwPy2GisHPGkmq-s6vmOFyTa-zexK+CqxqawwtuLb3j1ATdIm-xTy8e7xHJBTkyzVMOtW-rysCVI9A3hwUNMBAQvA6dQ0ceg3tmzxBEp3hfsUTJQd69UBtJDxXbNLAUe9Mwcf9dzha86WudK+ZyD3PKIAcF24cl3cqCV7LwKgJAMAINAIBBOgOuAi5nV-d1NZ9fgyKkgAMp0hqfD1ACeaWt2AFAsLg8qEIQ7isB2ADu5+Cuv9oQMA8hrIMlTwHIQTIgy68APwAMSgFQyIALIAE1YCnwoEEAAXowAAggVAAwlwAAQiIU+AAWcEf94GmkgQAaUgdASBPAggADEYEAHYgjwOAJAmBkDYQiFUPA8yAD4GQgAGoAHU-4AC1IEAGVT5BBgQAVkYKfeBAANSBbDT4wPMpwlhUCxFcFUJA6gfRwRsOUaqWEIBYQwPcNQde1D4HggAIq8IACowMIbsHg5jUCqkEUoWEyDYFsK4GA4R0AeAsPlBQagqgeAUDAcgpQ8oAFBCKLAAAUmwyBSgIBFAKoQAq+JJAAFUAAcf8eGQIABKAM4eYtJ5lF4sPxBQWEp8-5iIAeZGBi9TRcEIDwLBqgKD4k4aqU+kC-4oNPgA8EAS-7UCidQP+4J16CMXgAKzMfAth8oigAKUCYiAEj4GSDEf4thyCgjQFVF4UgAD8QbhMSYxeO8YEUEgZAxgUS0nhK4D4xg4JIHyheaaIInDGDyngTTNJIh4E8PoJwkQpoomEOQcPbBuweEaM4ZCDJLDUA8DEaaRg1C0lmL6EEgBkCok+NQBwXEIhIEIkgRQXJQRIH4hUSIWEVDSXgmQX0eUNzF4gGwdS0ZGSskbjYSASEf8OBBFNNMgF4IonyiiZCEA5k-k3KyLk3JryYHgmgBuDgJDKiqiKNQLBWCABsXBCGQl2H-TwVLgBKEgSYtJyjIGtBubAcJkDOFFFPhkqJyBzHmNNJwgqWD3AsJMYIkNLCWGwmoBgzh3TJBgHXqqPojC+hYPgQArBCyomMGgCYng1lDXIHlMg+BqBlmUL6FE1QyD5RKDSaqcEuSlDgnMoIyQPDYSGuAPA4pp8znUpMca6ZEAMl5NNGYyByAAGMA3Fg5tnCVmqEXsAAB0ypmMF9bCIhytzE8DAa6voXBXnggAbCLBFAWFbNPjIXEf9YSpqCEuyBLCIDTNNO21Q8qxnps+bCReJD8TmIoH-K5gi2HAEESaxef81psIESINhFAsiQPXpCNhpBVRiKgfAo50yomqhEPiSEYAYNFHMhwcEnDcppOoPKQF0y-5tKUAVYACLckgEIRAUgPAQMxshDEgxGSODAFIMJwgUJ17wNhN8rBIAWEUGQaaCg68ODANhCwwhUTck8CKPAwgXB15RKCLieULCAFgAY2ApNPCMlgMITwKtPBcmSCiYQNhtIlDVNPovOduwzmnzSX0GBGTYmqHBEESE+IRAbjM2k9esybmCPBPAqJ4JcRROAEEdeoj8RytPqaFhwADFiKiRksAkDVAgB4dAU+G4qGtOy9QagQRYAj1UEUdBMDTSqF2EEIIBUNxiPcLsPVqgAFsMzaoVQPDTSQgoPAj18CYHwOoDA5BrqYF4pMQM+Bf9IHmvgdMsAYjCHuHMpCZBG48N9FhGkjciT-VpKKFE0+IgWFYPlD5lhhnkCrbYdMrLnCKDmWQa0XbJ6TGLKe+vCBkCIDII4NQLgkO0krKicg5RyDkBLeoCY2EADVBKFUO4JQqBzEgBMaKwhJi9s8G66adehCxFBBITDwBjAwFcFNMAde5PCDQB4cweU68+iqDgaoPo68wBpJgRueBsFguL1UPD3YaSomQKCEZrBuPzJBCwRwVpUT8QwP8Zwwgi8sjzcMRxznaDBF7b-iY4TXAIAAMIaJkAIhpk8LAbCXJ+DCGqmQVj2EYC6nmN2J83JqAw08PlGA8xqguCCLLaqYABUeDmVNLkvI8D3CqC8WAsRbDBHADF9QAoEBus8J4O4UguTVCGtPoH1QgjzHuEgYajJFANySE4VgjQ0zCEkPMSYkQqB8ROa4KQExnCYGSGAKfSPPC+iGqUBwXJLDDWHUNSwpQbClDwOgEoSQoTYAsPMuvXY9eKCQlxDwagp8sHJp4blsBWQSFY70yQng69InyiwRQT-lIC4A1wAUNVkCwXh1yUXkNVxCbVVB4Etwz1xCyAiw4FUFyTATYWgBe1owQQyRgVZEIBKzd3cAyXcCPU4UEXPQgDMzABYR4UIQ3C73HSiXGwZVCR4B4XcHXhO1zVNDERIUkGgDSXgXoXIXgRAHgQqyiREFyRG2QVID6D-ggDVx4ULWXWoUgVwFJGRCAA
*/
