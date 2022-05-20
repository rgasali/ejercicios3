let divMostrarArreglos = <HTMLDivElement>(
  document.getElementById("divMostrarArreglos")
);
let arregloA: number[] = new Array(0, 1, 2, 3, 4, 5);
let arregloB: number[] = new Array(0, 1, 2, 3, 4, 5);
let concatenacionDeArreglos = "";

for (let i = 0; i < arregloA.length; i++) {
  concatenacionDeArreglos =
    concatenacionDeArreglos + ` A${arregloA[i]} B${arregloB[i]} , `;
}

divMostrarArreglos.innerHTML = String(
  `los valores de los arrelos son: ${concatenacionDeArreglos}`
);
