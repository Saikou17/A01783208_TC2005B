//Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'

function firstCharacterNoRep(cadena){
    for (let i=0; i<cadena.length; i++){
        total=0;
        for(let j=0; j<cadena.length; j++){
            if(cadena.charAt(i)==cadena.charAt(j)){
                total += 1;
            }
        }
        if(total==1){
            console.log(`El primer caracter que no se repite es: ${cadena.charAt(i)}`);
            return cadena.charAt(i);
        }
    }
    console.log("No se encontro ningun elemento no repetido")
    return 0
}

let ejercicio1 = firstCharacterNoRep("abbca");
console.log(ejercicio1);

//Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números

function BubbleSort(lista) {
    let recorrido = lista.length;
    for (let i = 0; i < recorrido; i++) { 
      for (let j = 0; j < (recorrido - i - 1); j++) { 
        if(lista[j] > lista[j+1]) {
          var tmp = lista[j];
          lista[j] = lista[j+1];
          lista[j+1] = tmp;
        }
      }        
    }
    return lista;
  }



let ejercicio2 = BubbleSort([3,1,2]);
console.log(ejercicio2);

//Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.

function reversa_lista(lista){
    if(lista == []){
        return [];
    }
    else{
        if(lista.length==1){
            return lista;
        }
        else{
            return [lista[lista.length-1]].concat(reversa_lista(lista.slice(0,-1)));
        }
    }
}

//No se espicifica el uso de la segunda funcion
//No se espicifica el uso de la segunda funcion
//No se espicifica el uso de la segunda funcion
//No se espicifica el uso de la segunda funcion


let ejercicio3 = reversa_lista([1,2,3]);
console.log(ejercicio3);

//Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.

function primera_letra(cadena){
    let mayus = cadena[0].toUpperCase();
    let i = 1;
    while(i<=cadena.length){
        if(cadena.charAt(i)==" " && i!=cadena.length-1){
            cadena=cadena.replace(cadena[i+1],cadena[i+1].toUpperCase())
        }
        mayus += cadena[i];
        i++;
    }
    return mayus;
}

let ejercicio4 = primera_letra("hola mundo como estas ");
console.log(ejercicio4);

//Escribe una función que calcule el máximo común divisor de dos números.

function maximo_comun_divisor(n1,n2){
    let Max = 1;
    let divisor = 2;
    while(n1 > 1 && n2 > 1){
        if(n1%divisor==0&&n2%divisor==0){
            n1 /= divisor;
            n2 /= divisor;
            Max *= divisor;
        }
        else if(n1%divisor==0){
            n1 /= divisor;
        }
        else if(n2%divisor==0){
            n2 /= divisor;
        }
        else{
            divisor++;
        }
    }
    return Max;
}

let ejercicio5 = maximo_comun_divisor(10,5);
console.log(ejercicio5);

//Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

function LeetSpeakVOcabulario() {
  const abecedario = new Map([
    ['a', '4'],
    ['b', '13'],
    ['c', '('],
    ['d', '[)'],
    ['e', '3'],
    ['f', '|='],
    ['g', '6'],
    ['h', '#'],
    ['i', '|'],
    ['j', '_|'],
    ['k', '|<'],
    ['l', '1'],
    ['m', '|V|'],
    ['n', '|\\|'],
    ['o', '0'],
    ['p', '|2'],
    ['q', '9'],
    ['r', '|2'],
    ['s', '5'],
    ['t', '7'],
    ['u', '|_|'],
    ['v', '\\/'],
    ['w', '\\/\\/'],
    ['x', '><'],
    ['y', '`/'],
    ['z', '2']
  ]);
  
  return abecedario;
}

function Hacker_speak(cadena, vocabulario) {
    let C4d3n4 = "";
    for (let i = 0; i < cadena.length; i++) {
      if (vocabulario.has(cadena[i])) {
        C4d3n4 += vocabulario.get(cadena[i]);
      } else {
        C4d3n4 += cadena[i];
      }
    }
    return C4d3n4;
  }

let ejercicio6 = Hacker_speak("Javascript es genial",LeetSpeakVOcabulario());
console.log(ejercicio6);

//Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].


//Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
function firstCharacter(cadena){
    console.log(cadena[0]);
    return cadena[0];
}

//Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números

function bubbleSort(lista){
    const index = 0
    let mayor = lista[index];
    while (index <= lista.lenght){
        if(mayor>lista[++index]){
            mayor = lista[index];
        }
    }
}
