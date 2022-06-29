var contador = document.getElementById("contador");
console.log(contador)
function aumentarContador(){
    contador.innerHTML = parseInt(contador.innerHTML)+1;
}

function diminuirContador(){
    contador.innerHTML = parseInt(contador.innerHTML)-1;
}