let usuarios = [
    {
        legajo: 1,
        nombre: 'Cecilia',
        apellido: 'Lorusso',
        usuario: 'lorusso',
        contrasena: 'prueba',
        dni: 45234442,
        rutaImagen: 'profesora.jpg',
        sexo: 'Femenino',
    },
    {
        legajo: 2,
        nombre: 'Maria',
        apellido: 'Farisello',
        usuario: 'farisello',
        contrasena: 'prueba',
        dni: 42330393,
        rutaImagen: 'profesora.jpg',
        sexo: 'Femenino',
    },
    {
        legajo: 3,
        nombre: 'Guillermo',
        apellido: 'Laito',
        usuario: 'laito',
        contrasena: 'prueba',
        dni: 43982710,
        rutaImagen: 'profesor.jpg',
        sexo: 'Masculino',
    },
    {
        legajo: 4,
        nombre: 'Cristina',
        apellido: 'Perez',
        usuario: 'perez',
        contrasena: 'prueba',
        dni: 44992692,
        rutaImagen: 'profesora.jpg',
        sexo: 'Femenino',
    },
    {
        legajo: 5,
        nombre: 'Juan Carlos',
        apellido: 'Torres',
        usuario: 'torres',
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

// let botonLogin = document.getElementById('botonLogin');
// botonLogin.addEventListener('click', storage);
// let datoLogin;

// function storage() {
//     let input = document.getElementById('inputLogin').value;
//     datoLogin = localStorage.setItem('usuarioGuardado', input);
// }

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
inicio();

function inicio() {
    usuarios.forEach((usuario) => {
        if (usuario.usuario.toLowerCase() === usuarioIngresado.toLowerCase()) {
            if (usuario.sexo == 'Femenino') {
                contenedor.innerHTML = `
                <h1 class="inicio">Bienvenida ${usuario.nombre}</h1>
                `;
            } else {
                contenedor.innerHTML = `
                <h1 class="inicio">Bienvenido ${usuario.nombre}</h1>
                `;
            }
        }
    });
}

let botonLista = document.getElementById('botonLista');
botonLista.addEventListener('click', () => listaAlumnos(alumnos));

function listaAlumnos(array) {
    contenedor.innerHTML = `
        <div class="contenedorLista">
            <div class="filtros">
                <input type="text" id="buscador">
                <label><input id="filtroPromocion" type="checkbox">Promocion</label>
                <label><input id="filtroRegular" type="checkbox">Regular</label>
                <label><input id="filtroLibre" type="checkbox">Libre</label>
            </div>
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

    array.forEach((elemento) => {
        let tarjetaAlumno = document.createElement('div');

        tarjetaAlumno.classList.add('tarjetaAlumno');
        tarjetaAlumno.innerHTML = `
            <p class = 'p1'>${elemento.legajo}</p>
            <p class = 'p2'>${elemento.nombre}</p>
            <p class = 'p3'>${elemento.apellido}</p>
            <p class = 'p4'>${elemento.tp1}</p>
            <p class = 'p5'>${elemento.tp2}</p>
            <p class = 'p6'>${elemento.tp3}</p>
            <p class = 'p7'>${elemento.tp4}</p>
            <p class = 'p8'>${elemento.primerParcial}</p>
            <p class = 'p9'>${elemento.segundoParcial}</p>
            <p class = 'p10'>${elemento.estado}</p>
        `;
        lista.appendChild(tarjetaAlumno);
    });
}

let buscador = document.getElementById('buscador');
buscador.addEventListener('input', () => filtrarYRenderizar(alumnos, buscador.value));
function filtrarYRenderizar(arrayIngresado, input) {
    let alumnosFiltrados = arrayIngresado.filter((elemento) => elemento.nombre.toLowerCase().includes(input.toLowerCase()));
    listaAlumnos(alumnosFiltrados);
}

let botonNuevoAlumno = document.getElementById('botonNuevoAlumno');
let legajoNuevo = 1010;
let nombre;
let apellido;
let dni;

botonNuevoAlumno.addEventListener('click', contenedorNuevosAlumnos);

function contenedorNuevosAlumnos() {
    contenedor.innerHTML = `
    <div class="datosNuevoAlumno">
        <input type="text" class="datoNuevoAlumno" id="nombreNuevoAlumno" placeholder="Ingrese nombre del alumno">
        <input type="text" class="datoNuevoAlumno" id="apellidoNuevoAlumno" placeholder="Ingrese apellido del alumno">
        <input type="number" class="datoNuevoAlumno" id="dniNuevoAlumno" placeholder="Ingrese DNI del alumno">
        <button class="botonMenu" id="botonCargarNuevoAlumno">CARGAR</button>
    </div>
    `;
    let botonCargarNuevoAlumno = document.getElementById('botonCargarNuevoAlumno');
    botonCargarNuevoAlumno.addEventListener('click', nuevoAlumno);

    function nuevoAlumno() {
        nombre = document.getElementById('nombreNuevoAlumno').value;
        apellido = document.getElementById('apellidoNuevoAlumno').value;
        dni = document.getElementById('dniNuevoAlumno').value;
        let legajo = legajoNuevo + 1;
        let tp1 = null;
        let tp2 = null;
        let tp3 = null;
        let tp4 = null;
        let primerParcial = null;
        let segundoParcial = null;
        let estado = null;
        legajoNuevo = legajo;

        alumnos.push({ legajo, nombre, apellido, dni, tp1, tp2, tp3, tp4, primerParcial, segundoParcial, estado });
        listaAlumnos();
    }
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

let botonInicio = document.getElementById('botonInicio');
botonInicio.addEventListener('click', inicio);
