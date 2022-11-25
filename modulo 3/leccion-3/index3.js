//Ejercicio 1. 

const array = ["Ana", "Maria", "Alexa", "Hola", "alfabeto", "Texto", "string", "JavaScript", "PHP", "Atomizer"];

let nuevoArray = [];
array.forEach((e) => {
  if (e[0] === 'a' || e[0] === 'A') {
    nuevoArray.push(e);
  }
});

console.log(nuevoArray);





const adivinarPin = () => {
  for (i = 0; i < 4; i++) {
    const pin = prompt('Introduce el PIN de 4 dígitos: ');
    if (pin == 'salir' || pin == 'Salir') {
      alert('saliendo...');
      break;
    }
    if (parseInt(pin) === 2345) {
      alert(`El pin es correcto`);
      break;
    } else {
      alert(`Es incorrecto, sigue intentando`);
    }

  }
  alert('Límite de intentos permitidos');
}



// var fraseUser = prompt("Escribe una frase y sabrás si es un Palindromo","Se van sus naves");
// Funcion de comparación
// function frasePalindromo(fraseUser){
// Paso la fraseUser a minusculas y quito espacios
//   fraseUser=fraseUser.toLowerCase().replace(/\s/g,"");
/* Creo otra frase partiendo de la de userFrase pero
la convierto en array, le doy la vuelta al array, lo paso a string*/
//  fraserReverse=fraseUser.split("").reverse().toString();
// Le quito las "," con un remplace dentro del for
// Lo igualo a -1 ya que tiene una coma menos que el número total de letras
// for (var i = 0; i < ((fraserReverse.length)-1); i++) {
//  fraserReverse=fraserReverse.replace(",","");
//  };
// Comparo las dos frases.
//  if(fraseUser==fraserReverse){
// Si el resultado es positivo
//  alert("es un Palindromo");
// }
// else{
// Si el resultado es negativo
//  alert("no es un Palindromo");
// }
// }
// Llamo a la función comparación con el parámetro del user
//  frasePalindromo(fraseUser);


const arrayFrase = ["rever", "eye", "oro", "hola", "lucha", "salir", "Luis", "Javier", "ara"];


function palindromo() {
  arrayFrase.forEach((e) => {
    let frase = e.toLowerCase().replace(/\s/g, "");
    let fraseAlReves = e.split("").reverse().toString();
    for (var i = 0; i < ((fraseAlReves.length) - 1); i++) {
      fraseAlReves = fraseAlReves.replace(",", "");
    };

    if (frase == fraseAlReves) {
      console.log(`${e} Es palindromo`);
    } else {
      console.log('No es un palindromo');
    }
  })

}

palindromo();

function whoLikes2(names) {
  if (names.length === 0) {
    return 'Nadie ha dado like';
  } else if (names.length === 1) {
    return `${names[0]} ha dado like`;
  } else if (names.length === 2) {
    return `${names[0]} y ${names[1]} han dado like`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} y ${names[2]} han dado like`;
  } else {
    return `${names[0]}, ${names[1]} y ${
      names.length - 2
    } personas más han dado like`;
  }
}

console.log(whoLikes2([]));
console.log(whoLikes2(['Juan']));
console.log(whoLikes2(['Juan', 'María']));
console.log(whoLikes2(['Juan', 'María', 'Pedro']));
console.log(whoLikes2(['Juan', 'María', 'Pedro', 'Pablo', 'Laura']));




const users = [{
    name: 'Juan',
    age: 25,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
  {
    name: 'María',
    age: 30,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pedro',
    age: 20,
    city: 'Madrid',
    hobbies: ['fútbol', 'programar'],
  },
  {
    name: 'Laura',
    age: 35,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pablo',
    age: 27,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
];

let madrid = [];
const viveEnMadrid = users.filter((user) => {
  if (user.city === 'Madrid') {
    madrid.push(user.name)
  }
});
console.log(madrid);


let mayor25 = [];
const masDe25 = users.filter((user) => {
  if (user.age > 25) {
    mayor25.push(`${user.name}: ${user.age}`);
  }
});

console.log(mayor25);

const mayorA25 = users.filter((user) => user.age > 25).map((user) => user.name);
console.log(mayorA25); //!UNA ALTERNATIVA USANDO .MAP (CREDITOS A NAVIS 😜)*/

let mayor25Madrid = [];
const masDe25Madrid = users.filter((user) => {
  if (user.age > 25 && user.city === 'Madrid') {
    mayor25Madrid.push(`${user.name}: ${user.age}: ${user.city}`);
  }
});

console.log(mayor25Madrid);


const primerProgramador = users.find((user)=> user.hobbies.includes('programar'));
console.log(primerProgramador);


function sumarEdades (acumulador,{age}){
  return acumulador + age;  
}
const mostrarSuma = users.reduce(sumarEdades,0);
console.log(`La suma de las edades es igual a ${mostrarSuma}`);


const transformArray = users.map((user)=>{
  return ({ciudad: user.city, hobbie: user.hobbies[0]});
});

console.log(transformArray);

const arrayLetras = ['D','F','K','M','A','C','B','G','E','I','H','L','J','O','N'];

console.log(arrayLetras.sort()); 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/*const sinDuplicar = [...new Set(numbers)];

console.log(sinDuplicar);*/

const sinDuplicar = numbers.filter((numero,index,array)=>{
  return index === array.indexOf(numero);
});

console.log(sinDuplicar);


//-----------------------------------------------------------
const users1 = [
  {
    name: 'Juan',
    age: 25,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
  {
    name: 'María',
    age: 30,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pedro',
    age: 20,
    city: 'Madrid',
    hobbies: ['fútbol', 'programar'],
  },
  {
    name: 'Laura',
    age: 35,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pablo',
    age: 27,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
  {
    name: 'Juan',
    age: 25,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
  {
    name: 'María',
    age: 30,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pedro',
    age: 20,
    city: 'Madrid',
    hobbies: ['fútbol', 'programar'],
  },
  {
    name: 'Laura',
    age: 35,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pablo',
    age: 35,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
];

/*const duplicadoObjetos = ufilter((e,i,a)=>{ return i == a.indexOf(e); 
}));

console.log(duplicadoObjetos);
*/

const objetos = [...new Set(users1.map((user)=> JSON.stringify(user)))];
function sinDuplicarObjetos(){
  return objetos.map((user) => JSON.parse(user));
} 

console.log(sinDuplicarObjetos())


