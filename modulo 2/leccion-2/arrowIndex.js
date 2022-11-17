//Ejercicio 1. Calcular doble

const  calcularDoble = numero =>  numero * 2;
console.log(calcularDoble(2));


//Ejercicio 2. Calcular cuadrado
const calcularCuadrado = num => Math.pow(num, 2);
    console.log(calcularCuadrado(4));




//Ejercicio 3. Calcular area rectangulo
const calcularArea = (base, altura) => {
    let area = base * altura;
    console.log(area);
}

calcularArea(2, 4);

//Ejercicio 4. Calcular Par e Impar
const calcularPar_Impar = (num1) => {
    if (num1 % 2 === 0) {
        console.log('El numero es par');
    } else {
        console.log('El numero es impar');
    }
}

calcularPar_Impar();


const personas = [

    { nombre: 'Juan', edad: 18 },

    { nombre: 'María', edad: 16 },

    { nombre: 'Pedro', edad: 20 },

    { nombre: 'Pablo', edad: 15 },

    { nombre: 'Laura', edad: 19 },

];

//Ejercicio 5. Mostrar los mayores de edad
const mayorDeEdad = () => {
    personas.forEach(function (persona){
        if(persona.edad >= 18){
            console.log(persona.nombre +' Es mayor porque tiene '+ persona.edad +' años.' );
        }
    });


}

mayorDeEdad();



//Mostrar el menor de todo el arreglo
const menorEdad = () =>{
    let cont_menor = 100000;
    let nombre = '';
    for(i=0; i<personas.length; i++){
        if(personas[i].edad < cont_menor){
            cont_menor = personas[i].edad;
            nombre = personas[i].nombre;
        }
        

    }

    console.log(`El menor es ${nombre} y tiene ${cont_menor} años.`);
}



menorEdad();
//Mostrar el mayor de todo el arreglo
const edadMayor = ()=>{
    let cont_mayor = 0;
    let nombre = '';
    for(i=0; i<personas.length; i++){
        if(personas[i].edad > cont_mayor){
            cont_mayor = personas[i].edad;
            nombre = personas[i].nombre;
        }

    }

    console.log(`El mayor es ${nombre} y tiene ${cont_mayor} años.`);
}

edadMayor();

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
},
{
    nombre:'Ponyta',
    tipoDePokemon:'Fuego'
}];

//Ejercicio 6. Mostrar el nombre de cada pokemon
const recibirPokemons = () =>{
    pokemones.forEach(function(pokemon){
        console.log(pokemon.nombre);
    });
}

recibirPokemons();

//Mostrar los pokemones de tipo fuego
const mostrarTipoFuego = () =>{
    pokemones.forEach(function(pokemon){
        if(pokemon.tipoDePokemon === 'Fuego'){
            console.log(`El pokemon ${pokemon.nombre} es de tipo ${pokemon.tipoDePokemon}`);
        }
    });
}

mostrarTipoFuego();


