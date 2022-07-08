//FOR IN

function forInExample(obj){
    for(propriedade in obj){
        console.log(propriedade); 
    }
}

const meuObj = {
    nome: 'Joao',
    idade: '13',
    cidade: 'SLZ'
};

forInExample(meuObj); //nome, idade, cidade


function forInExample2(obj){
    for(propriedade in obj){
        console.log(obj[propriedade]);
    }
}

forInExample2(meuObj); //Joao, 13, SLZ

//FOR OF 

function forOfExample(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = "abacaxi";

forOfExample(palavra); // a,b,a,c,a,x,i



