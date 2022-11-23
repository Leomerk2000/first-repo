//Ejercicio 1. 

const array = ["Ana", "Maria", "Alexa", "Hola", "alfabeto", "Texto", "string", "JavaScript", "PHP", "Atomizer"];

let nuevoArray = [];
array.forEach((e) => {
    if (e[0] === 'a' || e[0] === 'A') {
        nuevoArray.push(e);
    }
});

console.log(nuevoArray);





const adivinarPin = () =>{
    for(i = 0; i < 4; i++){
        const pin = prompt('Introduce el PIN de 4 dígitos: ');
        if(pin == 'salir' || pin == 'Salir'){
            alert('saliendo...');
            break;
        }
        if(parseInt(pin) === 2345){
            alert(`El pin es correcto`);
            break;
        }else{
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


    const arrayFrase = ["rever","eye","oro","hola","lucha","salir","Luis","Javier","ara"];


    function palindromo(){
      arrayFrase.forEach((e)=>{
        let frase = e.toLowerCase().replace(/\s/g,"");
      let fraseAlReves = e.split("").reverse().toString();
        for (var i = 0; i < ((fraseAlReves.length)-1); i++) {
          fraseAlReves=fraseAlReves.replace(",","");
        };

        if(frase == fraseAlReves){
          console.log(`${e} Es palindromo`);
        }else{
          console.log('No es un palindromo');
        }
      })
      
    }

    palindromo();





    
const users = [
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
];

let madrid = [];
const viveEnMadrid = users.filter((user) => {
  if(user.city === 'Madrid'){
    madrid.push(user.name)
  }
});
    console.log(madrid);


let mayor25 = [];
const masDe25 = users.filter((user)=>{
  if(user.age > 25){
  mayor25.push(`${user.name}: ${user.age}`);
  }
});

console.log(mayor25);

let mayor25Madrid = [];
const masDe25Madrid = users.filter((user)=>{
  if(user.age > 25 && user.city === 'Madrid'){
    mayor25Madrid.push(`${user.name}: ${user.age}: ${user.city}`);
  }
});

console.log(mayor25Madrid);

const encontrar = array.find((persona)=> persona == 'Ana');
console.log(encontrar);




