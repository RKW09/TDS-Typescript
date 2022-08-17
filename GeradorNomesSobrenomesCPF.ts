console.clear();

//Nomes e Sobrenomes Mais Comuns do Brasil
let nomes: Array<string> = ["Maria", "José", "Antônio", "João", "Francisco", "Ana", "Luiz", "Paulo", "Carlos", "Manoel", "Pedro", "Francisca", "Marcos", "Raimundo", "Sebastião", "Antônia", "Marcelo", "Jorge", "Márcia", "Geraldo", "Adriana", "Sandra", "Luis", "Fernando", "Fabio", "Roberto", "Márcio", "Edson", "André", "Sérgio"];
let sobrenomes: Array<string> = ["da Silva", "dos Santos", "Oliveira", "de Souza", "Rodrigues", "Ferreira", "Alves", "Pereira", "Lima", "Gomes", "Costa", "Ribeiro", "Martins", "Carvalho", "Almeida", "Lopes", "Soares", "Fernandes", "Vieira", "Barbosa", "Rocha", "Dias", "Nascimento", "Andrade", "Moreira", "Nunes", "Marques", "Machado", "Mendes", "Freitas"];

class Pessoa
{
    private nome: string;
    private cpf: string;
    
    constructor(nome: string = "", cpf: string = "")
    {
        this.nome = nome;
        this.cpf = cpf;
    }

    private gerarNomeSobrenome () : string
    {
        let nome = nomes[Math.floor(Math.random() * (nomes.length - 0) + 0)];
        let sobrenome = sobrenomes[Math.floor(Math.random() * (sobrenomes.length - 0) + 0)];

        return nome + " " + sobrenome;
    }

    private gerarCPF(): string
    {
        let multiplicador: number = 10;
        let soma: number = 0;
        let cpf: string = "";

        for(let i: number = 0; i < 9; i++)
        {
            let numero: number = Math.floor(Math.random() * (9 - 0 + 1));
            cpf += numero.toString();
            soma += numero * multiplicador;
            multiplicador--;
        }

        let primeiroDigitoVerificador = soma % 11;
        primeiroDigitoVerificador = 11 - primeiroDigitoVerificador;

        if(primeiroDigitoVerificador >= 10)
        {
            primeiroDigitoVerificador = 0;
        }
        cpf += primeiroDigitoVerificador;

        multiplicador = 11;
        soma = 0;

        for(let i: number = 0; i < 10; i++)
        {
            let numero: number = Number(cpf[i]);
            soma += numero * multiplicador;
            multiplicador--;
        }

        let segundoDigitoVerificador = soma % 11;
        segundoDigitoVerificador = 11 - segundoDigitoVerificador;

        if(segundoDigitoVerificador >= 10)
        {
            segundoDigitoVerificador = 0;
        }
        cpf += segundoDigitoVerificador;

        //Verificar se por acaso o CPF tem todos os dígitos iguais: (por ex: 111.111.111-11) CPFs com todos os dígitos iguais não são válidos
        //Começei o for no 0 e inicializei a variavel digitosIguais em 0 para checar se o resultado final é 11(quantidade de dígitos do CPF)
        let digitosIguais: number = 0;

        for(let i: number = 0; i < cpf.length; i++) 
        {
           if(cpf[0] == cpf[i])
           {
               digitosIguais++;
           }
        }

        if(digitosIguais == 11)
        {
            //console.log(digitosIguais);
            return this.gerarCPF();
        }
        else
        {
            let cpfMascarado: string = cpf.slice(0, 3);
            cpfMascarado += ".";
            cpfMascarado += cpf.slice(3, 6);
            cpfMascarado += ".";
            cpfMascarado += cpf.slice(6, 9);
            cpfMascarado += "-";
            cpfMascarado += cpf.slice(9, cpf.length);

            return cpfMascarado;
        }
    }
    
    public criarPessoa(quantidade: number): void
    {
        for(let i: number = 0; i < quantidade; i++)
        {
            pessoas.push(new Pessoa(this.gerarNomeSobrenome(), this.gerarCPF()));
        }
    }

    public exibirPessoasCriadas () : void
    {
        console.log("Pessoas Criadas:")
        for(let i: number = 0; i < pessoas.length; i++)
        {
        console.log("Nome: " + pessoas[i].nome + "\nCPF: " + pessoas[i].cpf)
        }
    }
}

//Criar Instância da Classe Pessoa
let pessoa = new Pessoa();

//Criar Array de Objetos Pessoa
let pessoas: Array<Pessoa> = [];

//Quantidade de Objetos Para Criar
let quantidadePessoasParaCriar: number = 10;

pessoa.criarPessoa(quantidadePessoasParaCriar);
pessoa.exibirPessoasCriadas();







