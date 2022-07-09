// PROMISE

// const myPromise = new Promise()((resolve,reject) =>{
//     window.setTimeout(()=>{
//         resolve(console.log("Resolvida"))
//     },2000);
// });

// resolve = callback

//Manipulação Promise
// await myPromise
//     .then((result) => result + " passando pelo then")
//     .then((result)  => result + " e  agora acabou!")
//     .catch((err) => console.log(err.message));

//Apos 2 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou!"

//ASYNC/AWAIT 
//UMA PROMISE RETORNA OUTRA PROMISE
async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("RESOLVIDA");
        }, 500);
    });

    const resolved = await myPromise
        .then((result) => result + " passando pelo then")
        .then((result) => result + " e agora acabou!")
        .catch((err) => console.log(err.message));

    return resolved;
}

// ACESSAR PROMISE RESULT COM ARROW FUNCTION
const a = () => {
    resolvePromise().then((a) => {
        console.log(a);
    })
}

a();

// ACESSAR PROMISE RESULT SEM ARROW FUNCTION
const printaResolve = function () {
    resolvePromise().then(function (response) {
        console.log(response);
    })
}

printaResolve();

//EXEMPLO SIMPLES ASYNC AWAIT
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
}

f();



//EXEMPLO FETCH VIACEP API
const buscaCepBtn = document.getElementById('busca-cep');
const cepInput = document.getElementById('cep');
const cepText = document.getElementById('info-cep');

const getCep = async () => {
    var cep = cepInput.value;
    try {
        const data = await fetch("https://viacep.com.br/ws/"+cep+"/json/");
        const json = await data.json();
        return json;
    } catch (error) {
        console.log(error.message);
    }

};

const printaInfoCep = () =>{
    getCep().then((cepInfo) => {
        cepText.innerText = cepInfo.logradouro + ", " +cepInfo.bairro+ ", " +
        cepInfo.localidade + " - " + cepInfo.uf;
        console.log(cepInfo);
    })
}

buscaCepBtn.addEventListener('click',printaInfoCep);