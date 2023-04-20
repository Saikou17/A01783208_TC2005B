/*Usamos use strict para que el codigo viejo se mantenga al moderno.
Siempre va al puro inicio de cada documento */
"use strict";

//Funciones 
function suma(x,y){
    return x + y;
}

//La funcion alert muestra un mensaje en pantalla
alert("Hello World");
alert("My name is Juan Pablo");

//Comentarios de una linea
/* Comentarios de
una o mas lineas en 
javascript*/

//Variables
let variable;
variable="COntengo un string";
alert(variable);
let mensaje = "Hola";
alert(mensaje);

//Constantes
const constante = "12.1234";

//Tipos de datos
let string="soy un string";
let string20=`el resultado es ${1 + 7}` //COn los baxksticks podemos agregar dentro del string otros tipos de datos
let int = 123;
let float = 1.689;
let booleanT = true;
let booleanF = false;
let age = null;//Valor que representada la nada
let age2; //Variable indefinida
alert(1/0); alert(Infinity);//Infinito
alert("not a number"/2); alert(NaN+1); alert(3 * NaN);//NaN
let BigInt = 1264749826658273n;//Agregando una n al final de cada numerom es un big int
typeof string20;

//Interacciones
alert("hola");
let resultado=prompt(titulo,"esto es un prompt");//Es como un tipo input
let eresMenor=confirm("Eres menor de edad?");
alert(eresMenor);

//Conversiones
let valor=true;
valor=String(valor);//Valor a string
alert("12"/"4");//Strigns o expresiones matematicas
alert(Number("123"));
alert(Boolean(1));//Valores booleanos
alert(Boolean(0));

//Operadores
alert(2 + 2)//Los operand son los numeros
alert(-8);//El unary es el signo aplicado a un operand
alert(7-2);//El binary es el signo aplicado a dos operands 
alert("Hola"+"soy"+"Juan PAblo");//Concatenacion de strings
alert(2+"9");//Esto es una concatenacion
alert(+true);//EL mas en unary funciona como el number
alert(+"");
let x = 10;
alert(5*(x=2+3));
let y=5;
y += 2;//Se puede hacer el cambio con juntar dos operadores
y *= 2;
let z = 5;
z++;//Incremento
z--;//Desincremento
let a=(1+2,3+4)//Esto retorna 7
let (b= 1 + 2), 3 + 4 ;//Esto retorna 3

//Comparaciones
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
