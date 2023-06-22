let usuarios = [
    {
        legajo: 1,
        nombre: 'Cecilia',
        apellido: 'Lorusso',
        usuario: 'lorusso',
        contrasena: 'prueba',
        dni: 45234442,
        rutaImagen: 'profesora.jpg',
    },
    {
        legajo: 2,
        nombre: 'Maria',
        apellido: 'Farisello',
        usuario: 'farisello',
        contrasena: 'prueba',
        dni: 42330393,
        rutaImagen: 'profesora.jpg',
    },
    {
        legajo: 3,
        nombre: 'Guillermo',
        apellido: 'Laito',
        usuario: 'laito',
        contrasena: 'prueba',
        dni: 43982710,
        rutaImagen: 'profesor.jpg',
    },
    {
        legajo: 4,
        nombre: 'Cristina',
        apellido: 'Perez',
        usuario: 'perez',
        contrasena: 'prueba',
        dni: 44992692,
        rutaImagen: 'profesora.jpg',
    },
    {
        legajo: 5,
        nombre: 'Juan Carlos',
        apellido: 'Torres',
        usuario: 'torres',
        contrasena: 'prueba',
        dni: 45927433,
        rutaImagen: 'profesor.jpg',
    },
];

let alumnos = [
    {
        legajo: 1001,
        nombre: 'Ana',
        apellido: 'Vivas',
        dni: 45234442,
        primerParcial: null,
        segundoParcial: null,
        tp1: null,
        tp2: null,
        tp3: null,
        tp4: null,
        estado: null,
    },
    {
        legajo: 1002,
        nombre: 'Manuel',
        apellido: 'Ordoñez',
        dni: 42330393,
        primerParcial: null,
        segundoParcial: null,
        tp1: null,
        tp2: null,
        tp3: null,
        tp4: null,
        estado: null,
    },
    {
        legajo: 1003,
        nombre: 'Alejandro',
        apellido: 'Moran',
        dni: 43982710,
        primerParcial: null,
        segundoParcial: null,
        tp1: null,
        tp2: null,
        tp3: null,
        tp4: null,
        estado: null,
    },
    {
        legajo: 1004,
        nombre: 'Eugenio',
        apellido: 'Islas',
        dni: 44992692,
        primerParcial: null,
        segundoParcial: null,
        tp1: null,
        tp2: null,
        tp3: null,
        tp4: null,
        estado: null,
    },
    {
        legajo: 1005,
        nombre: 'Carla',
        apellido: 'Gomez',
        dni: 45927433,
        primerParcial: null,
        segundoParcial: null,
        tp1: null,
        tp2: null,
        tp3: null,
        tp4: null,
        estado: null,
    },
    {
        legajo: 1006,
        nombre: 'Natalia',
        apellido: 'Acosta',
        dni: 44229018,
        primerParcial: null,
        segundoParcial: null,
        tp1: null,
        tp2: null,
        tp3: null,
        tp4: null,
        estado: null,
    },
    {
        legajo: 1007,
        nombre: 'Federico',
        apellido: 'Rivas',
        dni: 43847993,
        primerParcial: null,
        segundoParcial: null,
        tp1: null,
        tp2: null,
        tp3: null,
        tp4: null,
        estado: null,
    },
    {
        legajo: 1008,
        nombre: 'Laura',
        apellido: 'Giordano',
        dni: 45929111,
        primerParcial: null,
        segundoParcial: null,
        tp1: null,
        tp2: null,
        tp3: null,
        tp4: null,
        estado: null,
    },
    {
        legajo: 1009,
        nombre: 'Micaela',
        apellido: 'Martinez',
        dni: 46301112,
        primerParcial: null,
        segundoParcial: null,
        tp1: null,
        tp2: null,
        tp3: null,
        tp4: null,
        estado: null,
    },
    {
        legajo: 1010,
        nombre: 'Joaquin',
        apellido: 'Garcia',
        dni: 46321234,
        primerParcial: null,
        segundoParcial: null,
        tp1: null,
        tp2: null,
        tp3: null,
        tp4: null,
        estado: null,
    },
];

let navBar = document.getElementById('nav');
let user = document.getElementById('usuario');
let usuarioIngresado = prompt('Ingrese su apellido Ej.: Perez o Torres');

usuarios.forEach((usuario) => {
    if (usuario.usuario.toLowerCase() === usuarioIngresado.toLowerCase()) {
        user.innerHTML = `
        <img class="fotoUsuario" src="multimedia/img/${usuario.rutaImagen}" alt="">
        <div id="datosUsuario">
        <p id="textoUsuario"></p>
        <p id="legajoUsuario"></p>
        </div>
        `;
        let textoUsuario = document.getElementById('textoUsuario');
        let legajoUsuario = document.getElementById('legajoUsuario');
        textoUsuario.innerText = `${usuario.nombre} ${usuario.apellido}`;
        legajoUsuario.innerText = `Legajo: ${usuario.legajo}`;
    }
});

let contenedor = document.getElementById('contenedor');
contenedor.innerHTML = '';

let botonLista = document.getElementById('botonLista');
botonLista.addEventListener('click', listaAlumnos);

function listaAlumnos() {
    contenedor.innerHTML = '';
    alumnos.forEach((alumno) => {
        let tarjetaAlumno = document.createElement('div');

        tarjetaAlumno.classList.add('tarjetaAlumno');
        tarjetaAlumno.innerHTML = `
            <p>${alumno.legajo}</p>
            <p>${alumno.nombre}</p>
            <p>${alumno.apellido}</p>
            <p>${alumno.tp1}</p>
            <p>${alumno.tp2}</p>
            <p>${alumno.tp3}</p>
            <p>${alumno.tp4}</p>
            <p>${alumno.primerParcial}</p>
            <p>${alumno.segundoParcial}</p>
        `;
        contenedor.appendChild(tarjetaAlumno);
    });
}

let botonNuevoAlumno = document.getElementById('botonNuevoAlumno');
let legajoNuevo = 1010;

botonNuevoAlumno.addEventListener('click', nuevoAlumno);

function nuevoAlumno() {
    let legajo = legajoNuevo + 1;
    let nombre;
    do {
        nombre = prompt('Ingrese nombre del alumno');
    } while (!isNaN(nombre) || !nombre);
    let apellido;
    do {
        apellido = prompt('Ingrese apellido del alumno');
    } while (!isNaN(apellido) || !apellido);
    let dni;
    do {
        dni = prompt('Ingrese DNI del alumno');
    } while (isNaN(dni) || !dni);
    let tp1 = null;
    let tp2 = null;
    let tp3 = null;
    let tp4 = null;
    let primerParcial = null;
    let segundoParcial = null;

    legajoNuevo = legajo;

    alumnos.push({ legajo, nombre, apellido, dni, tp1, tp2, tp3, tp4, primerParcial, segundoParcial });
    listaAlumnos();
}

let botonCargarNotas = document.getElementById('botonCargarNotas');

botonCargarNotas.addEventListener('click', cargarNota);

function cargarNota() {
    let legajoElegido = prompt('Elegi nro de legajo:');
    const alumnoNotas = alumnos.find((alumno) => alumno.legajo == legajoElegido);

    let tp1;
    do {
        tp1 = Number(prompt('Ingrese nota de tp1'));
    } while (isNaN(tp1) || !tp1);

    let tp2;
    do {
        tp2 = Number(prompt('Ingrese nota de tp2'));
    } while (isNaN(tp2) || !tp2);

    let tp3;
    do {
        tp3 = Number(prompt('Ingrese nota de tp3'));
    } while (isNaN(tp3) || !tp3);

    let tp4;
    do {
        tp4 = Number(prompt('Ingrese nota de tp4'));
    } while (isNaN(tp4) || !tp4);

    let primerParcial;
    do {
        primerParcial = Number(prompt('Ingrese nota de primerParcial'));
    } while (isNaN(primerParcial) || !primerParcial);

    let segundoParcial;
    do {
        segundoParcial = Number(prompt('Ingrese nota de segundoParcial'));
    } while (isNaN(segundoParcial) || !segundoParcial);

    alumnoNotas.tp1 = tp1;
    alumnoNotas.tp2 = tp2;
    alumnoNotas.tp3 = tp3;
    alumnoNotas.tp4 = tp4;
    alumnoNotas.primerParcial = primerParcial;
    alumnoNotas.segundoParcial = segundoParcial;
    // alumnoNotas.promedio = (matematicas + lengua + sociales + naturales) / 4;

    // if (alumnoNotas.promedio >= 7) {
    //     alumnoNotas.estado = 'REGULAR';
    // } else {
    //     alumnoNotas.estado = 'LIBRE';
    // }

    listaAlumnos();
}

let botonReset = document.getElementById('botonReset');
botonReset.addEventListener('click', reset);

function reset() {
    contenedor.innerHTML = '';
}
