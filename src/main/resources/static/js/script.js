const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let filtro = searchInput.value.toLowerCase();

    let filas = document.querySelectorAll("#tablaPlantas tbody tr");

    filas.forEach(fila => {

        let texto = fila.textContent.toLowerCase();

        fila.style.display = texto.includes(filtro)
            ? ""
            : "none";

    });

});