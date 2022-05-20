//declaracion de variables
let divMostrarArreglos = <HTMLDivElement>(
  document.getElementById("divMostrarArreglos")
);
let btnCargaArregloA = <HTMLButtonElement>(
  document.getElementById("btnCargaArregloA")
);
let btnCargaArregloB = <HTMLButtonElement>(
  document.getElementById("btnCargaArregloB")
);
let arregloA: number[] = new Array(5);
let arregloB: number[] = new Array(5);
let concatenacionDeArreglos = "";

//declaracion de funciones
function generarArreglo(arreglo: Array<number>) {
  for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = Number(prompt("ingrese un valor al arreglo"));
  }
}

function concatenarDosArreglos(
  arreglo1: Array<number>,
  arreglo2: Array<number>
) {
  for (let i = 0; i < arreglo1.length; i++) {
    concatenacionDeArreglos =
      concatenacionDeArreglos + ` A${arreglo1[i]} B${arreglo2[i]} , `;
  }
}

//resto del codigo

btnCargaArregloA.addEventListener("click", () => {
  generarArreglo(arregloA);
});

btnCargaArregloB.addEventListener("click", () => {
  generarArreglo(arregloB);
  concatenarDosArreglos(arregloA, arregloB);
  divMostrarArreglos.innerHTML = String(
    `los valores de los arrelos son: ${concatenacionDeArreglos}`
  );
});
