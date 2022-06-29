var verificaBtn = document.getElementById('verifica');

verificaBtn.addEventListener('click',comparaNumeros);


function comparaNumeros(){
    var num1 = parseInt(document.getElementById('primeiro-numero').value);
    var num2 = parseInt(document.getElementById('segundo-numero').value);

    console.log(num1)
    var pResultado = document.getElementById("resultado");

    var span1 = document.createElement('span');
    span1.innerHTML = (num1===num2) ? 'Os números ' +num1+ ' e '+num2+ ' são iguais.' : 'Os números ' +num1+ ' e '+num2+ ' não são iguais.';

    pResultado.appendChild(span1);

    var span2 =  document.createElement('span');
    var soma = somar(num1,num2);
    span2.innerHTML =  ' Sua soma é '+soma;
    pResultado.appendChild(span2);

    var span3 =  document.createElement('span');
    span3.innerHTML = (soma>10) ? ', que é maior que 10' : ', que é menor que 10';
    pResultado.appendChild(span3);

    var span4 =  document.createElement('span');
    span4.innerHTML = (soma<20) ? ' e menor que 20.' :  ' e maior que 20.'
    pResultado.appendChild(span4);

    var br = document.createElement('br')
    pResultado.appendChild(br);
}

function somar(num1,num2){
    return num1+num2;
}

var teste = 0;

console.log(teste++);