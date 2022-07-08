//MAP
//retorna um novo array

let arr1 = [1,2,4,5,6,6,7];
//array.map(callback,thiarg(opcional));
//callback(item,index,array) 
//callback - funcao a ser executada em cada elemento
//nao precisa passar todos os parametros do callback, pode ser apenas o item
console.log(arr1.map((item) => item *2));

console.log(arr1)

//FILTER
//retorna um novo array
console.log(arr1.filter((n) => n == 6 )) ;

//REDUCE
//NÂO retorna um novo array
//retorna um valor UNICO
//array.reduce(callbackFn, initialValue(opcional))
// const callbackFn = function(accumulator, currentValue,index,array){
//     TODO
// }


//ATV MAP SEM THIS
const array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * 2));

console.log(array);
//ATV MAP COM THIS
const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.price;
	}, apple);
}

console.log(mapArray());

//ATV FILTER
function filtraPares(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);

	return filteredArr;
}

console.log(filtraPares([1, 2, 3, 4]));

//ATV REDUCE SOMA NUMERO
function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}

console.log(somaNumeros([1, 1, 1, 3]));

//ATV REDUCE CALCULA SALDO
function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));

