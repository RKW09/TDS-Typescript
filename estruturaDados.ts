//Exercício sobre Estruturas de Dados em TypeScript

console.clear();

interface IList<T>
{
    add(item: T): void;
    remove(index: number): void;
    get(index: number): void;
    set(index: number, item: T): void;
    contains(item: T): boolean;
    size(): number;
    isEmpty(): boolean;
}

class List<T> implements IList<T>
{
    protected array: Array<T> = new Array<T>();

    add(item: T): void
    {
        this.array.push(item);
    }

    remove(index: number): void
    {
        this.array.splice(index, 1);
    }

    get(index: number): void
    {
        console.log(this.array[index]);
    }

    set(index: number, item: T): void
    {
        this.array[index] = item;
    }
    
    contains(item: T): boolean
    {
        return this.array.includes(item);
    }

    size(): number
    {
        return this.array.length;
    }

    isEmpty(): boolean
    {
        return this.size() == 0;
    }

    imprimir(): void
    {
        console.log("Imprimindo a Lista:");

        for(const item of this.array)
        {
            console.log(item);
        }
    }
}

//Testando Lista Tipo Number
console.log("***TESTES DA LISTA***");
let listNum: List<number> = new List<number>();

console.log("A Lista está Vazia? -> " + listNum.isEmpty());
listNum.add(1);
listNum.add(2);
listNum.add(3);
listNum.add(4);
listNum.add(5);
listNum.imprimir();
console.log("A Lista está Vazia? -> " + listNum.isEmpty());

listNum.remove(2);
listNum.imprimir();

console.log("Usando o get():");
listNum.get(1);

console.log("A Lista contém o número 4? -> " + listNum.contains(4));

listNum.set(2, 6);

console.log("A Lista contém o número 4? -> " + listNum.contains(4));

listNum.imprimir();

console.log("O Tamanho da Lista é: " + listNum.size());

//Testando Lista Tipo String
let listStr: List<string> = new List();

console.log("A Lista está Vazia? -> " + listStr.isEmpty());
listStr.add("Catar");
listStr.add("Equador");
listStr.add("Holanda");
listStr.add("Dinamarca");
listStr.imprimir();
console.log("A Lista está Vazia? -> " + listStr.isEmpty());

listStr.remove(3);
listStr.imprimir();

console.log("Usando o get():");
listStr.get(2);

console.log("A Lista contém 'Senegal' ? -> " + listStr.contains("Senegal"));

listStr.set(3, "Senegal");

console.log("A Lista contém 'Senegal' ? -> " + listStr.contains("Senegal"));

listStr.imprimir();

console.log("O Tamanho da Lista é: " + listStr.size());


interface IQueue<T>
{
    enqueue(item: T): void;
    dequeue(): T;
    size(): number;
    isFull(): boolean;
}

class Queue<T> implements IQueue<T>
{
    private maxSize: number = 10;
    protected array: Array<T> = new Array<T>();

    enqueue(item: T) : void
    {
        if(!this.isFull()) 
        {
            this.array.push(item);
        }
        else
        {
            //mostrar erro
        }
    }

    dequeue(): T
    {
        //return this.array.shift();

        let item: T = this.array[0];
        this.array.splice(0, 1)
        return item;
    }

    size(): number
    {
        return this.array.length;
    }

    isFull(): boolean
    {
        return this.size() == this.maxSize;
    }

        imprimir(): void
    {
        console.log("Imprimindo a Fila:");

        for(const item of this.array)
        {
            console.log(item);
        }
    }
}

//Testando Fila Tipo Number
console.log("***TESTES DA FILA***");
let queueNum: Queue<number> = new Queue();

console.log("A Fila está Cheia? -> " + queueNum.isFull());
queueNum.enqueue(0);
queueNum.enqueue(1);
queueNum.enqueue(2);
queueNum.enqueue(3);
queueNum.enqueue(4);

console.log("O Tamanho da Fila é: " + queueNum.size());

queueNum.enqueue(5);
queueNum.enqueue(6);
queueNum.enqueue(7);
queueNum.enqueue(8);
queueNum.enqueue(9);
queueNum.imprimir();
//aqui tem que dar o erro
queueNum.dequeue();
queueNum.imprimir();
queueNum.enqueue(10);
queueNum.enqueue(11);
console.log("O Tamanho da Fila é: " + queueNum.size());
console.log("A Fila está Cheia? -> " + queueNum.isFull());
queueNum.imprimir();


console.log("**Fila Tipo String**");
let queueStr: Queue<string> = new Queue();

console.log("A Fila está Cheia? -> " + queueStr.isFull());
queueStr.enqueue("País de Gales");
queueStr.enqueue("Irã");
queueStr.enqueue("Inglaterra");
queueStr.enqueue("Estados Unidos");
queueStr.enqueue("Polônia");
queueStr.imprimir();
console.log("O Tamanho da Fila é: " + queueStr.size());

queueStr.enqueue("México");
queueStr.enqueue("Arábia Saudita");
queueStr.imprimir();
console.log("O Tamanho da Fila é: " + queueStr.size());

console.log("Dequeue: " + queueStr.dequeue());
console.log("Dequeue: " + queueStr.dequeue());
console.log("Dequeue: " + queueStr.dequeue());
console.log("Dequeue: " + queueStr.dequeue());
console.log("O Tamanho da Fila é: " + queueStr.size());
queueStr.enqueue("Argentina");
queueStr.enqueue("Tunísia");
queueStr.enqueue("França");
queueStr.enqueue("Dinamarca");
queueStr.enqueue("Austrália");
queueStr.imprimir();
console.log("O Tamanho da Fila é: " + queueStr.size());
console.log("A Fila está Cheia? -> " + queueStr.isFull());

queueStr.enqueue("Japão");
queueStr.enqueue("Espanha");
queueStr.enqueue("Costa Rica");
//erro
queueStr.imprimir();
console.log("O Tamanho da Fila é: " + queueStr.size());
console.log("A Fila está Cheia? -> " + queueStr.isFull());


interface IStack<T>
{
    push(item: T): void;
    pop(): T;
    size(): number;
    isFull(): boolean;
}

class Stack<T> implements IStack<T>
{
    private maxSize: number = 10;
    protected array: Array<T> = new Array<T>();

    push(item: T) : void
    {
        if(!this.isFull()) 
        {
            this.array.push(item);
        }
        else
        {
            //mostrar erro
        }
    }

    pop(): T
    {
        //return this.array.shift();

        let item: T = this.array[this.size() - 1];
        this.array.pop();
        return item;
    }

    size(): number
    {
        return this.array.length;
    }

    isFull(): boolean
    {
        return this.size() == this.maxSize;
    }

    imprimir(): void
    {
        console.log("Imprimindo a Pilha:");

        for(const item of this.array)
        {
            console.log(item);
        }
    }   
}

//Testando Pilha Tipo Number
console.log("***TESTES DA PILHA***");

let stackNum: Stack<number> = new Stack();

console.log("O Tamanho da Pilha é: " + stackNum.size());
stackNum.push(17);
stackNum.push(4);
stackNum.push(19);
stackNum.push(87);

console.log("A Pilha está Cheia? -> " + stackNum.isFull());
console.log("O Tamanho da Pilha é: " + stackNum.size());
stackNum.imprimir();

stackNum.push(14);
stackNum.push(11);
stackNum.push(20);
stackNum.push(22);
stackNum.push(25);
stackNum.push(12);


console.log("A Pilha está Cheia? -> " + stackNum.isFull());
console.log("O Tamanho da Pilha é: " + stackNum.size());
stackNum.imprimir();

console.log("Pop: " + stackNum.pop());
console.log("Pop: " + stackNum.pop());
console.log("A Pilha está Cheia? -> " + stackNum.isFull());
console.log("O Tamanho da Pilha é: " + stackNum.size());
stackNum.imprimir();


//Testando Pilha Tipo String
console.log("**Pilha Tipo String**");

let stackStr: Stack<string> = new Stack();

console.log("O Tamanho da Pilha é: " + stackStr.size());
stackStr.push("Costa Rica");
stackStr.push("Alemanha");
stackStr.push("Marrocos");
stackStr.push("Croácia");

console.log("A Pilha está Cheia? -> " + stackStr.isFull());
console.log("O Tamanho da Pilha é: " + stackStr.size());
stackStr.imprimir();

stackStr.push("Canadá");
stackStr.push("Bélgica");
stackStr.push("Sérvia");
stackStr.push("Suíça");
stackStr.push("Brasil");
stackStr.push("Uruguai");


console.log("A Pilha está Cheia? -> " + stackStr.isFull());
console.log("O Tamanho da Pilha é: " + stackStr.size());
stackStr.imprimir();

console.log("Pop: " + stackStr.pop());
console.log("Pop: " + stackStr.pop());
console.log("A Pilha está Cheia? -> " + stackStr.isFull());
console.log("O Tamanho da Pilha é: " + stackStr.size());
stackStr.imprimir();


interface IPair<T,E>
{
    left(): T;
    right(): E;
}

class Pair<T,E> implements IPair<T,E>
{
    protected lefty: T;
    protected righty: E;

    constructor(lefty: T, righty: E)
    {
        this.lefty = lefty;
        this.righty = righty;
    }

    left(): T
    {
        return this.lefty;
    }

    right(): E
    {
        return this.righty;
    }

    imprimir(): void
    {
        console.log("Imprimindo o Pair:");

        console.log("Left: " + this.left() + " Right: " + this.right());
    }  
}


//Testando Par
console.log("***TESTES DO PAIR***");

let pairNumStr: Pair<number, string> = new Pair(123456, "Senha");

console.log(pairNumStr.left());
console.log(pairNumStr.right());

let pairs: Array<Pair<number,string>> = new Array();
pairs = [new Pair(0, "Zero"), new Pair(1, "Um"), new Pair(2, "Dois"), new Pair(3, "Três")];

for(let par of pairs)
{
    par.imprimir();
}
