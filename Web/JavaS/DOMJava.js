//Función 1: Mostrar la posición del mouse en el documento
function mostrarPosicion(event) {
  let mousePositionElement = document.getElementById("mousePosition"); // Obtener el elemento con el ID "mousePosition"
  mousePositionElement.textContent = "Posición del mouse: " + event.clientX + ", " + event.clientY;
  // Asignar el texto "Posición del mouse: " concatenado con las coordenadas X e Y del evento al contenido del elemento
}

// Agregar el evento "mousemove" al documento y llamar a la función mostrarPosicion
document.addEventListener("mousemove", mostrarPosicion);
// Cuando el mouse se mueve en el documento, se dispara el evento "mousemove" y se ejecuta la función mostrarPosicion


//Función 2: Obtener el nombre completo y agregarlo al formulario
function obtenerNombreCompleto(event) {
  event.preventDefault(); // Evitar el envío del formulario al hacer click en el botón de submit

  let firstNameInput = document.getElementById("form-fname"); // Obtener el elemento del input del nombre
  let lastNameInput = document.getElementById("form-lname"); // Obtener el elemento del input del apellido
  let fullName = firstNameInput.value + " " + lastNameInput.value; // Obtener el valor del nombre y apellido y concatenarlos

  let fullNameElement = document.createElement("p"); // Crear un nuevo elemento de párrafo
  fullNameElement.textContent = "Nombre completo: " + fullName; // Asignar el texto "Nombre completo: " concatenado con el nombre completo al contenido del elemento

  let form1 = document.getElementById("form1"); // Obtener el formulario con el ID "form1"
  form1.insertAdjacentElement("afterend", fullNameElement); // Insertar el elemento de nombre completo después del formulario en el DOM
}

let submitButton = document.getElementById("form1-submit"); // Obtener el botón de submit del formulario
submitButton.addEventListener("click", obtenerNombreCompleto); // Agregar un evento de click al botón de submit que llame a la función obtenerNombreCompleto cuando se haga click en el botón

// Función 3: Insertar una fila en la tabla al hacer clic en el botón correspondiente
function insertarFila() {
  let sampleTable = document.getElementById("sampleTable"); // Obtener la tabla con el ID "sampleTable"
  let newRow = sampleTable.insertRow(); // Insertar una nueva fila en la tabla

  // Recorrer las celdas de la primera fila de la tabla
  for (let i = 0; i < sampleTable.rows[0].cells.length; i++) {
    let newCell = newRow.insertCell(); // Insertar una nueva celda en la fila
    newCell.textContent = "New Element"; // Asignar el texto "New Element" al contenido de la celda
  }
}

// Función 3: Insertar una columna en la tabla al hacer clic en el botón correspondiente
function insertarColumna() {
  let sampleTable = document.getElementById("sampleTable"); // Obtener la tabla con el ID "sampleTable"

  // Recorrer las filas de la tabla
  for (let i = 0; i < sampleTable.rows.length; i++) {
    let newRowCell = sampleTable.rows[i].insertCell(); // Insertar una nueva celda en la fila actual
    newRowCell.textContent = "New Element"; // Asignar el texto "New Element" al contenido de la celda
  }
}

let btnInsertRow = document.getElementById("btn-insert-r"); // Obtener el botón con el ID "btn-insert-r"
btnInsertRow.addEventListener("click", insertarFila); // Agregar un evento "click" al botón y llamar a la función insertarFila

let btnInsertColumn = document.getElementById("btn-insert-c"); // Obtener el botón con el ID "btn-insert-c"
btnInsertColumn.addEventListener("click", insertarColumna); // Agregar un evento "click" al botón y llamar a la función insertarColumna


//Función 4: Cambiar el contenido de una celda en una tabla
function cambiarContenido() {
  // Obtener los elementos de entrada del índice de fila, índice de columna y nuevo valor
  let rowIndexInput = document.getElementById("rowIndex");
  let colIndexInput = document.getElementById("colIndex");
  let newValueInput = document.getElementById("newValue");

  // Obtener los valores de los elementos de entrada y restar 1 para ajustar el índice
  let rowIndex = parseInt(rowIndexInput.value) - 1; // Restamos 1 para que sea el índice correcto
  let colIndex = parseInt(colIndexInput.value) - 1; // Restamos 1 para que sea el índice correcto
  let newValue = newValueInput.value;

  // Obtener la tabla por su ID
  let table = document.getElementById("myTable");

  // Obtener la fila correspondiente al índice de fila
  let row = table.rows[rowIndex];

  // Verificar si la fila existe
  if (row) {
    // Obtener la celda correspondiente al índice de columna
    let cell = row.cells[colIndex];

    // Verificar si la celda existe
    if (cell) {
      // Asignar el nuevo valor al contenido de la celda
      cell.textContent = newValue;
    } else {
      // Mostrar un mensaje de alerta si la columna especificada no existe
      alert("La columna especificada no existe.");
    }
  } else {
    // Mostrar un mensaje de alerta si la fila especificada no existe
    alert("La fila especificada no existe.");
  }
}

// Obtener el botón de cambio por su ID
let btnChange = document.getElementById("btn-change");
// Agregar un evento de clic al botón de cambio y llamar a la función cambiarContenido
btnChange.addEventListener("click", cambiarContenido);


//Función 5: Agregar un color aleatorio a la lista de opciones
function agregarColor() {
  // Definir un array de colores
  let colores = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Grey", "Black"];
  // Generar un índice aleatorio dentro del rango del array de colores
  let indiceAleatorio = Math.floor(Math.random() * colores.length);
  // Obtener el color aleatorio utilizando el índice generado
  let colorAleatorio = colores[indiceAleatorio];

  // Obtener el elemento select con el ID "colorSelect"
  let colorSelect = document.getElementById("colorSelect");
  // Crear un nuevo elemento option
  let option = document.createElement("option");
  // Asignar el color aleatorio como el contenido del elemento option
  option.textContent = colorAleatorio;
  // Agregar el elemento option como hijo del elemento select
  colorSelect.appendChild(option);
}

// Función para quitar un color de la lista de opciones
function quitarColor() {
  // Obtener el elemento select con el ID "colorSelect"
  let colorSelect = document.getElementById("colorSelect");
  // Obtener el índice del color seleccionado actualmente
  let selectedIndex = colorSelect.selectedIndex;

  // Verificar si se ha seleccionado un color
  if (selectedIndex !== -1) {
    // Eliminar el color seleccionado de la lista de opciones
    colorSelect.remove(selectedIndex);
  }
}

// Obtener el botón "btn-add-color" y agregar un evento "click" para llamar a la función agregarColor
let btnAddColor = document.getElementById("btn-add-color");
btnAddColor.addEventListener("click", agregarColor);

// Obtener el botón "btn-rmv-color" y agregar un evento "click" para llamar a la función quitarColor
let btnRmvColor = document.getElementById("btn-rmv-color");
btnRmvColor.addEventListener("click", quitarColor);


//Función 6: Generar tamaño aleatorio para la imagen
function generarTamanioAleatorio() {
  let imagenGato = document.getElementById("imagenGato"); // Obtener el elemento de imagen con el ID "imagenGato"
  let width = Math.floor(Math.random() * (600 - 300 + 1)) + 300; // Generar un ancho aleatorio entre 300 y 600
  let height = Math.floor(Math.random() * (600 - 300 + 1)) + 300; // Generar una altura aleatoria entre 300 y 600
  let nuevaURL = "http://placekitten.com/" + width + "/" + height; // Construir la URL de la nueva imagen con el tamaño aleatorio
  imagenGato.src = nuevaURL; // Asignar la nueva URL a la propiedad src de la imagen, lo que carga la nueva imagen
}

let imagenGato = document.getElementById("imagenGato"); // Obtener el elemento de imagen con el ID "imagenGato"
imagenGato.addEventListener("mouseenter", generarTamanioAleatorio);
// Agregar un evento "mouseenter" a la imagen para que cuando el mouse entre en la imagen, se llame a la función generarTamanioAleatorio
