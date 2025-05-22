const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        const inicialInicio = arr[inicio][0];
        const inicialSiguiente = arr[siguiente][0];

        if (inicialInicio === inicialSiguiente) {
            return [arr[inicio], arr[siguiente]];
        }

        inicio++;
        siguiente++;
    }

    return null;
}

function mostrarResultado() {
    const pareja = encontrarPareja(invitados);
    const resultadoDiv = document.getElementById("resultado");

    if (pareja) {
        resultadoDiv.textContent = `💖 ¡Pareja encontrada!: ${pareja[0]} y ${pareja[1]}`;
    } else {
        resultadoDiv.textContent = "😢 No se encontró ninguna pareja con la misma inicial.";
    }
}
