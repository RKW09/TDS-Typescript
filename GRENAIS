console.clear();

let qtdeGrenais: number = 0;
let vitoriasDoInter: number = 0;
let vitoriasDoGremio: number = 0;
let empates: number = 0;
let golsDoInter: number = 0;
let golsDoGremio: number = 0;


function informarPlacar()
{
    let placar = prompt("Digite os gols do Inter e os gols do Grêmio:");

    let regExp: RegExp = /\b^[0-9\s]*$/;

    if(placar == null || !regExp.test(placar) || placar.length < 3)
    {
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

        informarNovoGrenal();
    }
}

function informarNovoGrenal()
{
    let novoGrenal = prompt("Novo grenal (1-sim 2-nao)\n");

    if(novoGrenal == "1")
    {
        informarPlacar();
    }
    else if(novoGrenal == "2")
    {
        mostrarResultados();
        //return;
    }
    else
    {
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


/*link do playground:
https://www.typescriptlang.org/play?#code/MYewdgziA2CmB0w4EMBOAKAlAbgFC7gBcACAR0IBNYBxVWMZASwgC5iwBXAWwCNZViAXmIAGPEWIA3RoRCpGyCABEQASTCF+bTr35DR42CWmz5ilbVhdGIbdz4DhYgkeJWADsk2t29vU8MSAHMYZTUNLV9dRwMXYNCLOmtbKId9Z3wAMw4wYEIbMGJGMEy5LjQABWhkYDQsXABvXGIW4gl3atqY91QQLndCdAAiJUYgmVhiEAhiEOgZihBidU0BSenZ0OJF4loAK+SWIZx8VrbXOiCAUQAPdzYAJVhru-0AegAdHgA9AG0RAC0AE4PhAALoAKgAJG88M1WoxMugOjU0EJhJxoNBiAAfHHEACEl1u7ng3kGKK6mFx+MpaHgcDAQUIAAtiAAeYgAZkw8JaTTOZ2KpVQ5VQVVRGBOZwAvny3PNYPKBYKWhJilQbvo6ah4BrYDcAPJI4hDU3EHDEN5vSR6cBUNwQQgAQ6mjs8AHOQAAaYi1KDEZDQILcYj5LiTTRgFnITbzYgAPmEAEYRKdVXGwit-MRPKgILAVsjOvSINBGMBYOgRL79TdMCd5Wc5mFLMltWgC0WdfAyxWq3XiABqYjJ309xnMlkNuEZsiUGh0BjMIdD2cZxHoFsqbMCBOZxJWGy8ucquctExyBRZiKoVd4OdyuewRVFJHbkBtmyJg-hVYnjMz3PS8zFbJIbHvJtWifDMXwLKD+QQwUPC8WAIEgx901VYUyjQAA5EBJE-JcgywB9oNwOVcGyXJ8nAIoSlw1ACKIywGGgeogIkMBCOI+gg21Xp+kGIYWKWIISOxdBkwBCBGC4YgACYAQYEBMA+MBjnXFpNx41jJPRU1k2OZUkJw0VKhLKVyJaGCWjgyZdN4tiBMEYQhkUkyziAs4uGmQhUDQJ4IA4aBCGQRYIDIpDrToQgOFQMAbOIOyFXg7yzMYizmOcyTotlSishyPICmIPynUC1BgtC8LIs4+UJAgJgKGQNgKuKIJ9CGIZtLfdByCoFzmEM5MAMQucmsYFquo0jSzRHAbF344aRzNCT+OgHr5VShzTIm5rY3c2bNOHedBpIlbzXW5cICGbasOISbpqHI6wF3I5TpA68d1vZKntjF7TQ0r9bHmqQZCvcw+OSP6DuHV6rn6VDWDBlDvDheVNy+qHdx-bGwKPNS9ozf74aBt7bykehKw4MqmAgY6toKs4HL6-HD3bfd2b-fgxuIHzWlJwGhmB8ClltXJYFp8pmEZ5KdsVYnVSF168OQJYWRADhbSpyXFlQOX7vlUBIBgBBoBAIJ0H+k4qPMsUJS6aLcCAA
*/
