
//arguments
function showArgs(){
    return arguments;
}

console.log(showArgs(1,2,3,4,5,6))

function testeRest(...args){
    console.log(args);
}

testeRest(1,2,3,4,5);


//Object Destructuring
const user = {
    id: 33,
    displayName: 'Jhon',
    fullName:{
        firstName: 'Jhon',
        lastName: 'Wick'
    }
};

function userId({id}){
    console.log(id)
};

function getFullName({fullName: {firstName: first, lastName: last}}){
    console.log(`${first} ${last}`)
}

userId(user);

getFullName(user);

