/* =========================================
   CONECTA FUTURO
   JavaScript - V1
========================================= */


/* CAMBIO DE SECCIONES */

function mostrarSeccion(id) {

    const secciones = document.querySelectorAll(".seccion");

    secciones.forEach(seccion => {
        seccion.classList.remove("activa");
    });

    const seccionSeleccionada = document.getElementById(id);

    if (seccionSeleccionada) {
        seccionSeleccionada.classList.add("activa");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ORIENTACIÓN VOCACIONAL */

function calcularVocacion() {

    const respuestas = document.querySelectorAll(
        'input[type="radio"]:checked'
    );

    if (respuestas.length < 3) {

        document.getElementById("resultadoVocacional").innerHTML = `
            <div class="aviso">
                ⚠️ Responde las 3 preguntas para obtener tu orientación.
            </div>
        `;

        return;
    }


    let resultados = {
        tecnologia: 0,
        salud: 0,
        negocios: 0,
        arte: 0
    };


    respuestas.forEach(respuesta => {
        resultados[respuesta.value]++;
    });


    let area = Object.keys(resultados).reduce((a, b) =>
        resultados[a] > resultados[b] ? a : b
    );


    const recomendaciones = {

        tecnologia: {
            titulo: "Tecnología e ingeniería",
            texto: "Tus respuestas muestran interés por resolver problemas, crear y utilizar tecnología. Podrías explorar áreas como Ingeniería de Sistemas, Computación, Electrónica, Ciencia de Datos o carreras relacionadas."
        },

        salud: {
            titulo: "Salud y ciencias humanas",
            texto: "Tus respuestas muestran interés por ayudar a las personas y comprender temas relacionados con la salud. Podrías explorar Medicina, Enfermería, Psicología, Nutrición u otras áreas relacionadas."
        },

        negocios: {
            titulo: "Negocios y gestión",
            texto: "Tus respuestas muestran interés por organizar proyectos, liderar y crear soluciones. Podrías explorar Administración, Economía, Marketing, Contabilidad o emprendimiento."
        },

        arte: {
            titulo: "Creatividad y comunicación",
            texto: "Tus respuestas muestran interés por crear, diseñar y comunicar. Podrías explorar Diseño, Arquitectura, Comunicación, Publicidad, Audiovisuales u otras áreas creativas."
        }

    };


    document.getElementById("resultadoVocacional").innerHTML = `

        <div class="resultado">

            <h2>${recomendaciones[area].titulo}</h2>

            <p>
                ${recomendaciones[area].texto}
            </p>

            <br>

            <small>
                Esta orientación es informativa y no reemplaza una
                evaluación vocacional profesional.
            </small>

        </div>
    `;
}


/* BUSCADOR */

function buscarUniversidades() {

    const texto = document
        .getElementById("buscadorUniversidades")
        .value
        .toLowerCase();

    const universidades =
        document.querySelectorAll(".universidad");


    universidades.forEach(universidad => {

        const contenido =
            universidad.textContent.toLowerCase();

        if (contenido.includes(texto)) {

            universidad.style.display = "block";

        } else {

            universidad.style.display = "none";

        }

    });
}


/* MODAL DE INFORMACIÓN */

function mostrarInfo(tipo) {

    const modal = document.getElementById("modal");

    const titulo = document.getElementById("modalTitulo");

    const texto = document.getElementById("modalTexto");


    titulo.textContent = tipo;


    if (tipo === "Beca 18") {

        texto.textContent =
            "Beca 18 es un programa de apoyo educativo. En una versión posterior de Conecta Futuro se incorporarán los requisitos, convocatorias y enlaces oficiales actualizados.";

    }

    else if (tipo === "Beca Permanencia") {

        texto.textContent =
            "Beca Permanencia brinda apoyo a estudiantes que cumplen los criterios establecidos en cada convocatoria. La aplicación podrá mostrar sus requisitos y enlaces oficiales.";

    }

    else {

        texto.textContent =
            "Aquí podrás encontrar oportunidades educativas nacionales e internacionales. La información deberá verificarse siempre en la fuente oficial.";

    }


    modal.classList.add("activo");
}


/* CERRAR MODAL */

function cerrarModal() {

    document
        .getElementById("modal")
        .classList.remove("activo");

}


/* CERRAR MODAL AL HACER CLICK AFUERA */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {
        cerrarModal();
    }

});