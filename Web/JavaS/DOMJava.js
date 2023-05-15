//Funcion 1
function mostrarPosicion(event) {
    let mousePositionElement = document.getElementById("mousePosition");
    mousePositionElement.textContent = "Posición del mouse: " + event.clientX + ", " + event.clientY;
  }

  document.addEventListener("mousemove", mostrarPosicion);

//Funcion 2
function obtenerNombreCompleto(event) {
    event.preventDefault(); // Evitar el envío del formulario

    let firstNameInput = document.getElementById("form-fname");
    let lastNameInput = document.getElementById("form-lname");
    let fullName = firstNameInput.value + " " + lastNameInput.value;

    let fullNameElement = document.createElement("p");
    fullNameElement.textContent = "Nombre completo: " + fullName;

    let form1 = document.getElementById("form1");
    form1.insertAdjacentElement("afterend", fullNameElement);
  }

  let submitButton = document.getElementById("form1-submit");
  submitButton.addEventListener("click", obtenerNombreCompleto);

//Funcion 3 DebuguearCodigo
function insertarFila() {
    let sampleTable = document.getElementById("sampleTable");
    let newRow = sampleTable.insertRow();

    let cell1 = newRow.insertCell();
    let cell2 = newRow.insertCell();

    cell1.textContent = "New row column 1";
    cell2.textContent = "New row column 2";
  }

function insertarColumna() {
    let sampleTable = document.getElementById("sampleTable");

    for (let i = 0; i < sampleTable.rows.length; i++) {
      let newRowCell = sampleTable.rows[i].insertCell();
      newRowCell.textContent = "New column";
    }
  }

  let btnInsertRow = document.getElementById("btn-insert-r");
  btnInsertRow.addEventListener("click", insertarFila);

  let btnInsertColumn = document.getElementById("btn-insert-c");
  btnInsertColumn.addEventListener("click", insertarColumna)

//Funcion 4
function cambiarContenido() {
    let rowIndexInput = document.getElementById("rowIndex");
    let colIndexInput = document.getElementById("colIndex");
    let newValueInput = document.getElementById("newValue");

    let rowIndex = parseInt(rowIndexInput.value) - 1; // Restamos 1 para que sea el índice correcto
    let colIndex = parseInt(colIndexInput.value) - 1; // Restamos 1 para que sea el índice correcto
    let newValue = newValueInput.value;

    let table = document.getElementById("myTable");
    let row = table.rows[rowIndex];

    if (row) {
      let cell = row.cells[colIndex];

      if (cell) {
        cell.textContent = newValue;
      } else {
        alert("La columna especificada no existe.");
      }
    } else {
      alert("La fila especificada no existe.");
    }
  }

  let btnChange = document.getElementById("btn-change");
  btnChange.addEventListener("click", cambiarContenido);

//Funcion 5 Debuguear
function agregarColor() {
    let colorSelect = document.getElementById("colorSelect");
    let newColorInput = prompt("Ingrese un nuevo color:");

    if (newColorInput) {
      let option = document.createElement("option");
      option.textContent = newColorInput;
      colorSelect.appendChild(option);
    }
  }

  function quitarColor() {
    let colorSelect = document.getElementById("colorSelect");
    let selectedIndex = colorSelect.selectedIndex;

    if (selectedIndex !== -1) {
      colorSelect.remove(selectedIndex);
    }
  }

  let btnAddColor = document.getElementById("btn-add-color");
  btnAddColor.addEventListener("click", agregarColor);

  let btnRmvColor = document.getElementById("btn-rmv-color");
  btnRmvColor.addEventListener("click", quitarColor);

//Funcion 6
function generarTamanioAleatorio() {
    let imagenGato = document.getElementById("imagenGato");
    let width = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    let height = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    let nuevaURL = "http://placekitten.com/" + width + "/" + height;
    imagenGato.src = nuevaURL;
  }

  let imagenGato = document.getElementById("imagenGato");
  imagenGato.addEventListener("mouseenter", generarTamanioAleatorio);