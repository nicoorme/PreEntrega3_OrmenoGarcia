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
        tp1: 'Sin datos',
        tp2: 'Sin datos',
        tp3: 'Sin datos',
        tp4: 'Sin datos',
        primerParcial: 'Sin datos',
        segundoParcial: 'Sin datos',
        estado: 'Sin datos',
    },
    {
        legajo: 1002,
        nombre: 'Manuel',
        apellido: 'Ordoñez',
        dni: 42330393,
        tp1: 'Sin datos',
        tp2: 'Sin datos',
        tp3: 'Sin datos',
        tp4: 'Sin datos',
        primerParcial: 'Sin datos',
        segundoParcial: 'Sin datos',
        estado: 'Sin datos',
    },
    {
        legajo: 1003,
        nombre: 'Alejandro',
        apellido: 'Moran',
        dni: 43982710,
        tp1: 'Sin datos',
        tp2: 'Sin datos',
        tp3: 'Sin datos',
        tp4: 'Sin datos',
        primerParcial: 'Sin datos',
        segundoParcial: 'Sin datos',
        estado: 'Sin datos',
    },
    {
        legajo: 1004,
        nombre: 'Eugenio',
        apellido: 'Islas',
        dni: 44992692,
        tp1: 'Sin datos',
        tp2: 'Sin datos',
        tp3: 'Sin datos',
        tp4: 'Sin datos',
        primerParcial: 'Sin datos',
        segundoParcial: 'Sin datos',
        estado: 'Sin datos',
    },
    {
        legajo: 1005,
        nombre: 'Carla',
        apellido: 'Gomez',
        dni: 45927433,
        tp1: 'Sin datos',
        tp2: 'Sin datos',
        tp3: 'Sin datos',
        tp4: 'Sin datos',
        primerParcial: 'Sin datos',
        segundoParcial: 'Sin datos',
        estado: 'Sin datos',
    },
    {
        legajo: 1006,
        nombre: 'Natalia',
        apellido: 'Acosta',
        dni: 44229018,
        tp1: 'Sin datos',
        tp2: 'Sin datos',
        tp3: 'Sin datos',
        tp4: 'Sin datos',
        primerParcial: 'Sin datos',
        segundoParcial: 'Sin datos',
        estado: 'Sin datos',
    },
    {
        legajo: 1007,
        nombre: 'Federico',
        apellido: 'Rivas',
        dni: 43847993,
        tp1: 'Sin datos',
        tp2: 'Sin datos',
        tp3: 'Sin datos',
        tp4: 'Sin datos',
        primerParcial: 'Sin datos',
        segundoParcial: 'Sin datos',
        estado: 'Sin datos',
    },
    {
        legajo: 1008,
        nombre: 'Laura',
        apellido: 'Giordano',
        dni: 45929111,
        tp1: 'Sin datos',
        tp2: 'Sin datos',
        tp3: 'Sin datos',
        tp4: 'Sin datos',
        primerParcial: 'Sin datos',
        segundoParcial: 'Sin datos',
        estado: 'Sin datos',
    },
    {
        legajo: 1009,
        nombre: 'Micaela',
        apellido: 'Martinez',
        dni: 46301112,
        primerParcial: 'Sin datos',
        segundoParcial: 'Sin datos',
        tp1: 'Sin datos',
        tp2: 'Sin datos',
        tp3: 'Sin datos',
        tp4: 'Sin datos',
        estado: 'Sin datos',
    },
    {
        legajo: 1010,
        nombre: 'Joaquin',
        apellido: 'Garcia',
        dni: 46321234,
        tp1: 'Sin datos',
        tp2: 'Sin datos',
        tp3: 'Sin datos',
        tp4: 'Sin datos',
        primerParcial: 'Sin datos',
        segundoParcial: 'Sin datos',
        estado: 'Sin datos',
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

//-------------------------------------------------------------------------
//* INICIO CONTENEDOR

let contenedorInfo = document.getElementById('contenedorInfo');
inicio();

function inicio() {
    usuarios.forEach((usuario) => {
        if (usuario.usuario.toLowerCase() === usuarioIngresado.toLowerCase()) {
            if (usuario.sexo == 'Femenino') {
                contenedorInfo.innerHTML = `
                <h1 class="inicio">Bienvenida ${usuario.nombre}</h1>
                `;
            } else {
                contenedorInfo.innerHTML = `
                <h1 class="inicio">Bienvenido ${usuario.nombre}</h1>
                `;
            }
        }
    });
}

let botonInicio = document.getElementById('botonInicio');
botonInicio.addEventListener('click', inicio);

//-------------------------------------------------------------------------
//* LISTA ALUMNOS

let botonLista = document.getElementById('botonLista');
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

botonLista.addEventListener('click', mostrarOcultar);

function mostrarOcultar() {
    let contenedorFiltros = document.getElementById('barraFiltros');
    contenedorFiltros.classList.toggle('mostrar');
    contenedorFiltros.classList.toggle('oculto');
}

let buscador = document.getElementById('buscador');
buscador.addEventListener('input', () => filtrarYRenderizar(alumnos, buscador.value));

function filtrarYRenderizar(arrayIngresado, input) {
    let alumnosFiltrados = arrayIngresado.filter(
        (elemento) =>
            elemento.nombre.toLowerCase().includes(input.toLowerCase()) ||
            elemento.apellido.toLowerCase().includes(input.toLowerCase()) ||
            elemento.estado.toLowerCase().includes(input.toLowerCase())
    );
    listaAlumnos(alumnosFiltrados);
}
//------------------------------------------------------------------------------------
//* CARGAR ALUMNO NUEVO

let botonNuevoAlumno = document.getElementById('botonNuevoAlumno');
let legajoNuevo = 1010;
let nombre;
let apellido;
let dni;

botonNuevoAlumno.addEventListener('click', contenedorNuevosAlumnos);

function contenedorNuevosAlumnos() {
    contenedorInfo.innerHTML = `
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
        let tp1 = 'Sin datos';
        let tp2 = 'Sin datos';
        let tp3 = 'Sin datos';
        let tp4 = 'Sin datos';
        let primerParcial = 'Sin datos';
        let segundoParcial = 'Sin datos';
        let estado = 'Sin datos';
        legajoNuevo = legajo;

        alumnos.push({ legajo, nombre, apellido, dni, tp1, tp2, tp3, tp4, primerParcial, segundoParcial, estado });
        listaAlumnos(alumnos);
    }
}

//----------------------------------------------------------------------
//* CARGAR NOTAS

let botonCargarNotas = document.getElementById('botonCargarNotas');

botonCargarNotas.addEventListener('click', cargarNota);

function cargarNota() {
    let legajoElegido = prompt('Elegi nro de legajo:');
    const alumnoNotas = alumnos.find((alumno) => alumno.legajo == legajoElegido);

    let tp1;
    let dato1;
    dato1 = prompt('Ingrese nota de tp1 o Ausente');
    if (!dato1) {
        tp3 = 'Sin datos';
    } else if (dato1 == 'ausente') {
        tp1 = 1;
    } else {
        tp1 = dato1;
    }

    let tp2;
    let dato2;
    dato2 = prompt('Ingrese nota de tp2 o Ausente');
    if (!dato2) {
        tp3 = 'Sin datos';
    } else if (dato2 == 'ausente') {
        tp2 = 1;
    } else {
        tp2 = dato2;
    }

    let tp3;
    let dato3;
    dato3 = prompt('Ingrese nota de tp3 o Ausente');
    if (!dato3) {
        tp3 = 'Sin datos';
    } else if (dato3 == 'ausente') {
        tp3 = 1;
    } else {
        tp3 = dato3;
    }

    let tp4;
    let dato4;
    dato4 = prompt('Ingrese nota de tp4 o Ausente');
    if (!dato4) {
        tp4 = 'Sin datos';
    } else if (dato4 == 'ausente') {
        tp4 = 1;
    } else {
        tp4 = dato4;
    }

    let primerParcial;
    let dato5;
    dato5 = prompt('Ingrese nota de primer parcial o Ausente');
    if (!dato5) {
        primerParcial = 'Sin datos';
    } else if (dato5 == 'ausente') {
        primerParcial = 1;
    } else {
        primerParcial = dato5;
    }

    let segundoParcial;
    let dato6;
    dato6 = prompt('Ingrese nota del segundo parcial o Ausente');
    if (!dato6) {
        segundoParcial = 'Sin datos';
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

    console.log(condicion1);
    console.log(condicion2);
    console.log(condicion3);
    console.log(condicion4);

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

    listaAlumnos(alumnos);
}
