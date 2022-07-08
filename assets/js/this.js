
//CALL
const pessoa = {
 nome: 'Miguel'
}

const animal = {
    nome: 'Bidu'
}

function getSomething(){
    console.log(this.nome)
}

getSomething.call(pessoa);
getSomething.call(animal);

const myObj = {
    num1 : 2,
    num2: 3
}

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj,1,6);

//APPLY

soma.apply(myObj,[1,5]); // exemplo aplly

//BIND

const retornaNomes = function (){
    return this.nome;
}

let bruno = retornaNomes.bind({ nome: 'Bruno'});

bruno(); // Bruno