const myMap = new Map();

myMap.set('apple','fruit');

console.log(myMap)
myMap.get('apple');
console.log(myMap)
myMap.delete('apple');
console.log(myMap)

//SET

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(5);

mySet.has(1);
//true

mySet.has(3);
//false

mySet.delete(2);

console.log(mySet)

//ATV PRATICA MAP:
// Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
// Crie uma função getAdmins que recebe um Map;
// Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
// Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes 
// dos usuarios que são administradores.

function getAdmins(membersMap){
    const adminsList = [];
    for (const [membro,role] of membersMap) {
        if(role === "Admin"){
            adminsList.push(membro);
        }
    }

    return adminsList;
}

const myMap2 = new Map();
myMap2.set("Luiz","Admin");
myMap2.set("Joao","User");
myMap2.set("Pedro","Admin");
myMap2.set("Jota","User");
myMap2.set("Wellington","Admin");

console.log(getAdmins(myMap2));

//ATV SET
// Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], 
// retorne outro ARRAY apenas com valores únicos.

let arr = [30, 30, 40, 5, 223, 2049, 3034,3034,3034, 5];

function retornaUnicos(arr){
    const mySet2 = new Set(arr);
    return [...mySet2];
}

console.log(retornaUnicos(arr));