//Ejercicio 1. Hola mundo ✔
console.log('Hola Mundo ✌');
//Ejercicio 2. Variable nombre, edad y mayorEdad ✔

let nombre = "Leonardo", edad = 22, mayorEdad = false;

//Variable dirección
const direccion = {
    carrera:'26',
    letra: 'C',
    numero: '142',
    complemento:'51'
};

//Variable colores favoritos
coloresFavoritos = ['Blue','Darkblue','ligthgray','green'];
//Variable lenguajes favoritos
lenguajesFavoritos = ['Java','PHP','python'];
//Variable mejor lenguaje con la primera posición del array lenguajes favoritos
mejorLenguaje = lenguajesFavoritos[0];
//Variable peor lenguaje con la ultima posición del array lenguajes favoritos
peorLenguaje = lenguajesFavoritos[2];
//Una forma más optima de mostrarlo en caso de que el array sea muy grande es:
peorLenguaje = lenguajesFavoritos[lenguajesFavoritos.length - 1];


//Ejercicio 3. Variables declaradas, Operaciones matemáticas y resultado por consola. ✔
let num1 = 10, num2 = 15, num3 = 5, num4 = 8, num5 = 2;

let suma = num1 + num2;
let resta = num4 - num1;
let multiplicacion = num5 * num2;
let division = num3 / num2;

console.log(`El resultado de la suma es: ${suma}
El resultado de la resta es: ${resta}
El resultado de la multiplicación es ${multiplicacion}
El resultado de la division es: ${division} `);


//Ejercicio 4. Variable saludo y condicional. ✔
const saludo = 'Hola!!';

if(saludo === 'Hola!!'){
    console.log('Ha saludado');
}

//Ejercicio 5. Pokemons y mostrarlos cada uno y en una linea. ✔ 
let pokemons = ['Bulbasur','Charizard','Charmander'];

console.log(`El primero se llama: ${pokemons[0]}
El segundo se llama: ${pokemons[1]} 
El ultimo se llama: ${pokemons[pokemons.length - 1]}`);

console.log(`Los pokemons son: ${pokemons}`);

for(i = 0; i < pokemons.length; i++){
    console.log(pokemons[i]);
}

//Ejercicio 6. ✔

const pokemones = [{
    nombre:'Garchomp',
    tipoDePokemon:'Tierra'
},
{
    nombre:'Kyogre',
    tipoDePokemon:'Agua'
},
{
    nombre:'Charmander',
    tipoDePokemon:'Fuego'
}];


for(i = 0; i < pokemones.length; i++){
    if (pokemones[i].tipoDePokemon === 'Fuego') {
        console.log(`El pokemón ${pokemones[i].nombre} es de Fuego`);
    }
}
