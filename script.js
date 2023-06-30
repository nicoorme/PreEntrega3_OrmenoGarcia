let usuarios = [
    {
        legajo: 1,
        nombre: 'Cecilia',
        apellido: 'Lorusso',
        login: 'lorusso',
        contrasena: 'prueba',
        dni: 45234442,
        rutaImagen: 'profesora.jpg',
        sexo: 'Femenino',
    },
    {
        legajo: 2,
        nombre: 'Maria',
        apellido: 'Farisello',
        login: 'farisello',
        contrasena: 'prueba',
        dni: 42330393,
        rutaImagen: 'profesora.jpg',
        sexo: 'Femenino',
    },
    {
        legajo: 3,
        nombre: 'Guillermo',
        apellido: 'Laito',
        login: 'laito',
        contrasena: 'prueba',
        dni: 43982710,
        rutaImagen: 'profesor.jpg',
        sexo: 'Masculino',
    },
    {
        legajo: 4,
        nombre: 'Cristina',
        apellido: 'Perez',
        login: 'perez',
        contrasena: 'prueba',
        dni: 44992692,
        rutaImagen: 'profesora.jpg',
        sexo: 'Femenino',
    },
    {
        legajo: 5,
        nombre: 'Juan Carlos',
        apellido: 'Torres',
        login: 'torres',
        contrasena: 'prueba',
        dni: 45927433,
        rutaImagen: 'profesor.jpg',
        sexo: 'Masculino',
    },
];

let alumnos = [
    {
        legajo: 1001,
        nombre: 'Ana',
        apellido: 'Vivas',
        dni: 45234442,
        tp1: '-',
        tp2: '-',
        tp3: '-',
        tp4: '-',
        primerParcial: '-',
        segundoParcial: '-',
        estado: '-',
    },
    {
        legajo: 1002,
        nombre: 'Manuel',
        apellido: 'Ordoñez',
        dni: 42330393,
        tp1: '-',
        tp2: '-',
        tp3: '-',
        tp4: '-',
        primerParcial: '-',
        segundoParcial: '-',
        estado: '-',
    },
    {
        legajo: 1003,
        nombre: 'Alejandro',
        apellido: 'Moran',
        dni: 43982710,
        tp1: '-',
        tp2: '-',
        tp3: '-',
        tp4: '-',
        primerParcial: '-',
        segundoParcial: '-',
        estado: '-',
    },
    {
        legajo: 1004,
        nombre: 'Eugenio',
        apellido: 'Islas',
        dni: 44992692,
        tp1: '-',
        tp2: '-',
        tp3: '-',
        tp4: '-',
        primerParcial: '-',
        segundoParcial: '-',
        estado: '-',
    },
    {
        legajo: 1005,
        nombre: 'Carla',
        apellido: 'Gomez',
        dni: 45927433,
        tp1: '-',
        tp2: '-',
        tp3: '-',
        tp4: '-',
        primerParcial: '-',
        segundoParcial: '-',
        estado: '-',
    },
    {
        legajo: 1006,
        nombre: 'Natalia',
        apellido: 'Acosta',
        dni: 44229018,
        tp1: '-',
        tp2: '-',
        tp3: '-',
        tp4: '-',
        primerParcial: '-',
        segundoParcial: '-',
        estado: '-',
    },
    {
        legajo: 1007,
        nombre: 'Federico',
        apellido: 'Rivas',
        dni: 43847993,
        tp1: '-',
        tp2: '-',
        tp3: '-',
        tp4: '-',
        primerParcial: '-',
        segundoParcial: '-',
        estado: '-',
    },
    {
        legajo: 1008,
        nombre: 'Laura',
        apellido: 'Giordano',
        dni: 45929111,
        tp1: '-',
        tp2: '-',
        tp3: '-',
        tp4: '-',
        primerParcial: '-',
        segundoParcial: '-',
        estado: '-',
    },
    {
        legajo: 1009,
        nombre: 'Micaela',
        apellido: 'Martinez',
        dni: 46301112,
        primerParcial: '-',
        segundoParcial: '-',
        tp1: '-',
        tp2: '-',
        tp3: '-',
        tp4: '-',
        estado: '-',
    },
    {
        legajo: 1010,
        nombre: 'Joaquin',
        apellido: 'Garcia',
        dni: 46321234,
        tp1: '-',
        tp2: '-',
        tp3: '-',
        tp4: '-',
        primerParcial: '-',
        segundoParcial: '-',
        estado: '-',
    },
];

let notasPosibles = ['AUSENTE', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//-------------------------------------------------------------------------
//* INICIO

let contenedorInfo = document.getElementById('contenedorInfo');

let user = document.getElementById('usuario');
function usuarioNavBar() {
    let usuarioEncontrado = usuarios.find(({ login }) => login == inputUsuario.value.toLowerCase());
    if (usuarioEncontrado) {
        user.innerHTML = `
                <img class="fotoUsuario" src="multimedia/img/${usuarioEncontrado.rutaImagen}" alt="">
                <div id="datosUsuario">
                <p id="textoUsuario"></p>
                <p id="legajoUsuario"></p>
                </div>
            `;
        let textoUsuario = document.getElementById('textoUsuario');
        let legajoUsuario = document.getElementById('legajoUsuario');
        textoUsuario.innerText = `${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}`;
        legajoUsuario.innerText = `Legajo: ${usuarioEncontrado.legajo}`;
    } else {
        user.innerHTML = `
                        <img class="fotoUsuario" src="multimedia/img/invitado.jpeg" alt="">
                        <div id="datosUsuario">
                        <p id="textoUsuario"></p>
                        <p id="legajoUsuario"></p>
                        </div>
                    `;
        let textoUsuario = document.getElementById('textoUsuario');
        let legajoUsuario = document.getElementById('legajoUsuario');
        textoUsuario.innerText = `INVITADO`;
        legajoUsuario.innerText = `Legajo: -`;
    }
}

let inputUsuario = document.getElementById('inputUsuario');
let botonInicioUsuario = document.getElementById('botonInicioUsuario');
botonInicioUsuario.addEventListener('click', bienvenida);

function bienvenida() {
    usuarioNavBar();
    let usuarioEncontrado = usuarios.find(({ login }) => login.toLowerCase() === inputUsuario.value.toLowerCase());
    if (usuarioEncontrado) {
        if (usuarioEncontrado.sexo == 'Femenino') {
            contenedorInfo.innerHTML = `
                    <h1 class="inicio">Bienvenida ${usuarioEncontrado.nombre}</h1>
                `;
        } else {
            contenedorInfo.innerHTML = `
                    <h1 class="inicio">Bienvenido ${usuarioEncontrado.nombre}</h1>
                `;
        }
    } else if (!usuarioEncontrado) {
        contenedorInfo.innerHTML = `
                    <h1 class="inicio">HOLA ${inputUsuario.value.toUpperCase()}</h1>
                `;
    } else if (inputUsuario.value == '') {
        contenedorInfo.innerHTML = `
                    <h1 class="inicio">HOLA INVITADO</h1>
                `;
    }
}

let botonInicio = document.getElementById('botonInicio');
botonInicio.addEventListener('click', bienvenida);

botonInicio.addEventListener('click', ocultarBuscador);

function ocultarBuscador() {
    let contenedorFiltros = document.getElementById('barraFiltros');
    contenedorFiltros.classList.add('oculto');
}

//-------------------------------------------------------------------------
//* LISTA ALUMNOS

let botonLista = document.getElementById('botonLista');
let alumnosJSON = JSON.parse(localStorage.getItem('alumnosLocal'));

if (alumnosJSON) {
    alumnos = alumnosJSON;
}
botonLista.addEventListener('click', () => listaAlumnos(alumnos));

function listaAlumnos(array) {
    contenedorInfo.innerHTML = `
        <div class="contenedorLista">
            <div id="linea1">
                <h4 class = "cabecera">LEGAJO</h4>
                <h4 class = "cabecera">NOMBRE</h4>
                <h4 class = "cabecera">APELLIDO</h4>
                <h4 class = "cabecera">TP1</h4>
                <h4 class = "cabecera">TP2</h4>
                <h4 class = "cabecera">TP3</h4>
                <h4 class = "cabecera">TP4</h4>
                <h4 class = "cabecera">PARCIAL 1</h4>
                <h4 class = "cabecera">PARCIAL 2</h4>
                <h4 class = "cabecera">ESTADO</h4>
            </div>
            <div id="lista"></div>
        </div>
        `;

    array.forEach(({ legajo, nombre, apellido, tp1, tp2, tp3, tp4, primerParcial, segundoParcial, estado }) => {
        let tarjetaAlumno = document.createElement('div');

        tarjetaAlumno.classList.add('tarjetaAlumno');
        tarjetaAlumno.innerHTML = `
            <p class = 'p1'>${legajo}</p>
            <p class = 'p2'>${nombre}</p>
            <p class = 'p3'>${apellido}</p>
            <p class = 'p4'>${tp1}</p>
            <p class = 'p5'>${tp2}</p>
            <p class = 'p6'>${tp3}</p>
            <p class = 'p7'>${tp4}</p>
            <p class = 'p8'>${primerParcial}</p>
            <p class = 'p9'>${segundoParcial}</p>
            <p class = 'p10'>${estado}</p>
        `;
        lista.appendChild(tarjetaAlumno);
    });
}

botonLista.addEventListener('click', mostrarBuscador);

function mostrarBuscador() {
    let contenedorFiltros = document.getElementById('barraFiltros');
    contenedorFiltros.classList.remove('oculto');
}

let buscador = document.getElementById('buscador');
buscador.addEventListener('input', () => filtrarYRenderizar(alumnos, buscador.value));

function filtrarYRenderizar(arrayIngresado, input) {
    let alumnosFiltrados = arrayIngresado.filter(
        ({ legajo, nombre, apellido, estado }) =>
            legajo.toString().includes(input) ||
            nombre.toLowerCase().includes(input.toLowerCase()) ||
            apellido.toLowerCase().includes(input.toLowerCase()) ||
            estado.toLowerCase().includes(input.toLowerCase())
    );
    listaAlumnos(alumnosFiltrados);
}

//------------------------------------------------------------------------------------
//* CARGAR ALUMNO NUEVO

let botonNuevoAlumno = document.getElementById('botonNuevoAlumno');
let legajoNuevo = alumnos[alumnos.length - 1].legajo;
let nombre;
let apellido;
let dni;

botonNuevoAlumno.addEventListener('click', contenedorNuevosAlumnos);

function contenedorNuevosAlumnos() {
    contenedorInfo.innerHTML = `
        <div class="datosNuevoAlumno">
            <input type="text" class="input" id="nombreNuevoAlumno" placeholder="Ingresá el nombre del alumno">
            <input type="text" class="input" id="apellidoNuevoAlumno" placeholder="Ingresá el apellido del alumno">
            <input type="number" class="input" id="dniNuevoAlumno" placeholder="Ingresá el DNI del alumno">
            <button class="botonCargar" id="botonCargarNuevoAlumno">CARGAR</button>
        </div>
    `;
    let botonCargarNuevoAlumno = document.getElementById('botonCargarNuevoAlumno');
    botonCargarNuevoAlumno.addEventListener('click', nuevoAlumno);
    botonCargarNuevoAlumno.addEventListener('click', mostrarBuscador);

    function nuevoAlumno() {
        nombre = document.getElementById('nombreNuevoAlumno').value;
        apellido = document.getElementById('apellidoNuevoAlumno').value;
        dni = document.getElementById('dniNuevoAlumno').value;
        let legajo = ++legajoNuevo;
        let tp1 = '-';
        let tp2 = '-';
        let tp3 = '-';
        let tp4 = '-';
        let primerParcial = '-';
        let segundoParcial = '-';
        let estado = '-';
        legajoNuevo = legajo;

        alumnos.push({ legajo, nombre, apellido, dni, tp1, tp2, tp3, tp4, primerParcial, segundoParcial, estado });
        listaAlumnos(alumnos);

        localStorage.setItem('alumnosLocal', JSON.stringify(alumnos));
    }
}

botonNuevoAlumno.addEventListener('click', ocultarBuscador);

function ocultarBuscador() {
    let contenedorFiltros = document.getElementById('barraFiltros');
    contenedorFiltros.classList.add('oculto');
}

//----------------------------------------------------------------------
//* CARGAR NOTAS

let botonCargarNotas = document.getElementById('botonCargarNotas');

botonCargarNotas.addEventListener('click', cargarNota);

function cargarNota() {
    contenedorInfo.innerHTML = `
        <div class="datosNuevoAlumno">
        <select class="input" id="inputAlumnos"><option>Seleccioná un alumno</option></select>
        <select class="input inputNotas" id="inputTP1"><option>Seleccioná la nota del TP1</option></select>
        <select class="input inputNotas" id="inputTP2"><option>Seleccioná la nota del TP2</option></select>
        <select class="input inputNotas" id="inputTP3"><option>Seleccioná la nota del TP3</option></select>
        <select class="input inputNotas" id="inputTP4"><option>Seleccioná la nota del TP4</option></select>
        <select class="input inputNotas" id="inputPrimerParcial"><option>Seleccioná la nota del Primer Parcial</option></select>
        <select class="input inputNotas" id="inputSegundoParcial"><option>Seleccioná la nota del Segundo Parcial</option></select>
        <button class="botonCargar" id="botonCargarNota">CARGAR</button>
        </div>
        `;

    let inputAlumnos = document.getElementById('inputAlumnos');
    alumnos.forEach(({ legajo, nombre, apellido }) => {
        let elementosListaAlumnos = document.createElement('option');
        elementosListaAlumnos.innerText = `
        ${legajo} - ${nombre} ${apellido}
        `;
        elementosListaAlumnos.value = `${legajo}`;

        inputAlumnos.appendChild(elementosListaAlumnos);

        inputAlumnos.addEventListener('change', datoControlAlumno);
    });

    let inputNotas = document.querySelectorAll('.inputNotas');

    inputNotas.forEach((input) => {
        const fragment = document.createDocumentFragment();
        notasPosibles.forEach((elemento) => {
            let valorNota = document.createElement('option');
            valorNota.innerText = `
            ${elemento}
            `;
            fragment.appendChild(valorNota);
        });
        input.appendChild(fragment);
    });

    let inputLegajo;
    function datoControlAlumno(e) {
        inputLegajo = e.target.value;
    }

    let inputTP1 = document.getElementById('inputTP1');
    let inputTP2 = document.getElementById('inputTP2');
    let inputTP3 = document.getElementById('inputTP3');
    let inputTP4 = document.getElementById('inputTP4');
    let inputPrimerParcial = document.getElementById('inputPrimerParcial');
    let inputSegundoParcial = document.getElementById('inputSegundoParcial');

    let botonCargarNotas = document.getElementById('botonCargarNota');
    botonCargarNotas.addEventListener('click', nuevaNota);
    botonCargarNotas.addEventListener('click', mostrarBuscador);

    function nuevaNota() {
        let alumnoNotas = alumnos.find(({ legajo }) => legajo == inputLegajo);
        let tp1;
        let dato1 = inputTP1.value;
        if (!dato1) {
            tp3 = '-';
        } else if (dato1 == 'ausente') {
            tp1 = 1;
        } else {
            tp1 = dato1;
        }

        let tp2;
        let dato2 = inputTP2.value;
        if (!dato2) {
            tp3 = '-';
        } else if (dato2 == 'ausente') {
            tp2 = 1;
        } else {
            tp2 = dato2;
        }

        let tp3;
        let dato3 = inputTP3.value;
        if (!dato3) {
            tp3 = '-';
        } else if (dato3 == 'ausente') {
            tp3 = 1;
        } else {
            tp3 = dato3;
        }

        let tp4;
        let dato4 = inputTP4.value;
        if (!dato4) {
            tp4 = '-';
        } else if (dato4 == 'ausente') {
            tp4 = 1;
        } else {
            tp4 = dato4;
        }

        let primerParcial;
        let dato5 = inputPrimerParcial.value;
        if (!dato5) {
            primerParcial = '-';
        } else if (dato5 == 'ausente') {
            primerParcial = 1;
        } else {
            primerParcial = dato5;
        }

        let segundoParcial;
        let dato6 = inputSegundoParcial.value;
        if (!dato6) {
            segundoParcial = '-';
        } else if (dato6 == 'ausente') {
            segundoParcial = 1;
        } else {
            segundoParcial = dato6;
        }

        alumnoNotas.tp1 = tp1;
        alumnoNotas.tp2 = tp2;
        alumnoNotas.tp3 = tp3;
        alumnoNotas.tp4 = tp4;
        alumnoNotas.primerParcial = primerParcial;
        alumnoNotas.segundoParcial = segundoParcial;

        let condicion1;
        if (tp1 >= 7) {
            condicion1 = 1;
        } else {
            condicion1 = 0;
        }

        let condicion2;
        if (tp2 >= 7) {
            condicion2 = 1;
        } else {
            condicion2 = 0;
        }

        let condicion3;
        if (tp3 >= 7) {
            condicion3 = 1;
        } else {
            condicion3 = 0;
        }

        let condicion4;
        if (tp4 >= 7) {
            condicion4 = 1;
        } else {
            condicion4 = 0;
        }

        let sumaTP = condicion1 + condicion2 + condicion3 + condicion4;
        let condicionTP;

        if (sumaTP == 4) {
            condicionTP = 2;
        } else if (sumaTP == 3) {
            condicionTP = 1;
        } else {
            condicionTP = 0;
        }

        if (alumnoNotas.primerParcial >= 7 && alumnoNotas.segundoParcial >= 7) {
            alumnoNotas.estado = 'APROBADO';
        } else if (condicionTP == 2 && alumnoNotas.primerParcial >= 5 && alumnoNotas.segundoParcial >= 5) {
            alumnoNotas.estado = 'APROBADO';
        } else if (alumnoNotas.primerParcial < 5 || alumnoNotas.segundoParcial < 5) {
            alumnoNotas.estado = 'LIBRE';
        } else {
            alumnoNotas.estado = 'REGULAR';
        }
        localStorage.setItem('alumnosLocal', JSON.stringify(alumnos));
        listaAlumnos(alumnos);
    }
}

botonCargarNotas.addEventListener('click', ocultarBuscador);

function ocultarBuscador() {
    let contenedorFiltros = document.getElementById('barraFiltros');
    contenedorFiltros.classList.add('oculto');
}
