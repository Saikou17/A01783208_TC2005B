//Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'

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