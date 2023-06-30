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
            <input type="text" class="input" id="nombreNuevoAlumno" placeholder="Ingrese nombre del alumno">
            <input type="text" class="input" id="apellidoNuevoAlumno" placeholder="Ingrese apellido del alumno">
            <input type="number" class="input" id="dniNuevoAlumno" placeholder="Ingrese DNI del alumno">
            <button class="botonCargar" id="botonCargarNuevoAlumno">CARGAR</button>
        </div>
    `;
    let botonCargarNuevoAlumno = document.getElementById('botonCargarNuevoAlumno');
    botonCargarNuevoAlumno.addEventListener('click', nuevoAlumno);

    function nuevoAlumno() {
        nombre = document.getElementById('nombreNuevoAlumno').value;
        apellido = document.getElementById('apellidoNuevoAlumno').value;
        dni = document.getElementById('dniNuevoAlumno').value;
        let legajo = ++legajoNuevo;
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
            <select class="input" id="inputLista" name="transporte"></select>
            <input class="input" id="inputTP1" placeholder="Nota TP1 o Ausente">
            <input class="input" id="inputTP2" placeholder="Nota TP2 o Ausente">
            <input class="input" id="inputTP3" placeholder="Nota TP3 o Ausente">
            <input class="input" id="inputTP4" placeholder="Nota TP4 o Ausente">
            <input class="input" id="inputPrimerParcial" placeholder="Nota Primer Parcial o Ausente">
            <input class="input" id="inputSegundoParcial" placeholder="Nota Segundo Parcial o Ausente">
            <button class="botonCargar" id="cargarNota">CARGAR</button>
        </div>
    `;
    // contenedorInfo.innerHTML = `
    //     <div class="datosNuevoAlumno">
    //         <input class="input" id="inputLegajo" placeholder="Nro Legajo Alumno">
    //         <input class="input" id="inputTP1" placeholder="Nota TP1 o Ausente">
    //         <input class="input" id="inputTP2" placeholder="Nota TP2 o Ausente">
    //         <input class="input" id="inputTP3" placeholder="Nota TP3 o Ausente">
    //         <input class="input" id="inputTP4" placeholder="Nota TP4 o Ausente">
    //         <input class="input" id="inputPrimerParcial" placeholder="Nota Primer Parcial o Ausente">
    //         <input class="input" id="inputSegundoParcial" placeholder="Nota Segundo Parcial o Ausente">
    //         <button class="botonCargar" id="cargarNota">CARGAR</button>
    //     </div>
    // `;
    alumnos.forEach(({ legajo, nombre, apellido }) => {
        let opcionesLegajo = document.createElement('option');
        opcionesLegajo.classList.add('inputLegajo');
        opcionesLegajo.innerHTML = `
            <p id="datoControl">${legajo}</p> <p>- ${nombre} ${apellido}</p>
        `;
        // opcionesLegajo.innerText = `
        //     ${legajo} - ${nombre} ${apellido}
        // `;
        inputLista.appendChild(opcionesLegajo);
    });

    let datoControl = document.getElementById('datoControl');
    let inputLegajo = document.getElementsByClassName('inputLegajo');
    let inputTP1 = document.getElementById('inputTP1');
    let inputTP2 = document.getElementById('inputTP2');
    let inputTP3 = document.getElementById('inputTP3');
    let inputTP4 = document.getElementById('inputTP4');
    let inputPrimerParcial = document.getElementById('inputPrimerParcial');
    let inputSegundoParcial = document.getElementById('inputSegundoParcial');

    let botonCargarNotas = document.getElementById('cargarNota');
    botonCargarNotas.addEventListener('click', nuevaNota);

    function nuevaNota() {
        let legajoElegido = datoControl;
        console.log(datoControl);
        console.log(legajoElegido.value);
        const alumnoNotas = alumnos.find(({ legajo }) => legajo == legajoElegido);

        let tp1;
        let dato1 = inputTP1.value;
        if (!dato1) {
            tp3 = 'Sin datos';
        } else if (dato1 == 'ausente') {
            tp1 = 1;
        } else {
            tp1 = dato1;
        }

        let tp2;
        let dato2 = inputTP2.value;
        if (!dato2) {
            tp3 = 'Sin datos';
        } else if (dato2 == 'ausente') {
            tp2 = 1;
        } else {
            tp2 = dato2;
        }

        let tp3;
        let dato3 = inputTP3.value;
        if (!dato3) {
            tp3 = 'Sin datos';
        } else if (dato3 == 'ausente') {
            tp3 = 1;
        } else {
            tp3 = dato3;
        }

        let tp4;
        let dato4 = inputTP4.value;
        if (!dato4) {
            tp4 = 'Sin datos';
        } else if (dato4 == 'ausente') {
            tp4 = 1;
        } else {
            tp4 = dato4;
        }

        let primerParcial;
        let dato5 = inputPrimerParcial.value;
        if (!dato5) {
            primerParcial = 'Sin datos';
        } else if (dato5 == 'ausente') {
            primerParcial = 1;
        } else {
            primerParcial = dato5;
        }

        let segundoParcial;
        let dato6 = inputSegundoParcial.value;
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
        localStorage.setItem('alumnosLocal', JSON.stringify(alumnos));
        listaAlumnos(alumnos);
    }
    // let inputLegajo = document.getElementsByClassName('inputLegajo');
    // let inputTP1 = document.getElementById('inputTP1');
    // let inputTP2 = document.getElementById('inputTP2');
    // let inputTP3 = document.getElementById('inputTP3');
    // let inputTP4 = document.getElementById('inputTP4');
    // let inputPrimerParcial = document.getElementById('inputPrimerParcial');
    // let inputSegundoParcial = document.getElementById('inputSegundoParcial');

    // let botonCargarNotas = document.getElementById('cargarNota');
    // botonCargarNotas.addEventListener('click', nuevaNota);

    // function nuevaNota() {
    //     let legajoElegido = inputLegajo.value;
    //     const alumnoNotas = alumnos.find(({ legajo }) => legajo == legajoElegido);

    //     let tp1;
    //     let dato1 = inputTP1.value;
    //     if (!dato1) {
    //         tp3 = 'Sin datos';
    //     } else if (dato1 == 'ausente') {
    //         tp1 = 1;
    //     } else {
    //         tp1 = dato1;
    //     }

    //     let tp2;
    //     let dato2 = inputTP2.value;
    //     if (!dato2) {
    //         tp3 = 'Sin datos';
    //     } else if (dato2 == 'ausente') {
    //         tp2 = 1;
    //     } else {
    //         tp2 = dato2;
    //     }

    //     let tp3;
    //     let dato3 = inputTP3.value;
    //     if (!dato3) {
    //         tp3 = 'Sin datos';
    //     } else if (dato3 == 'ausente') {
    //         tp3 = 1;
    //     } else {
    //         tp3 = dato3;
    //     }

    //     let tp4;
    //     let dato4 = inputTP4.value;
    //     if (!dato4) {
    //         tp4 = 'Sin datos';
    //     } else if (dato4 == 'ausente') {
    //         tp4 = 1;
    //     } else {
    //         tp4 = dato4;
    //     }

    //     let primerParcial;
    //     let dato5 = inputPrimerParcial.value;
    //     if (!dato5) {
    //         primerParcial = 'Sin datos';
    //     } else if (dato5 == 'ausente') {
    //         primerParcial = 1;
    //     } else {
    //         primerParcial = dato5;
    //     }

    //     let segundoParcial;
    //     let dato6 = inputSegundoParcial.value;
    //     if (!dato6) {
    //         segundoParcial = 'Sin datos';
    //     } else if (dato6 == 'ausente') {
    //         segundoParcial = 1;
    //     } else {
    //         segundoParcial = dato6;
    //     }

    //     alumnoNotas.tp1 = tp1;
    //     alumnoNotas.tp2 = tp2;
    //     alumnoNotas.tp3 = tp3;
    //     alumnoNotas.tp4 = tp4;
    //     alumnoNotas.primerParcial = primerParcial;
    //     alumnoNotas.segundoParcial = segundoParcial;

    //     let condicion1;
    //     if (tp1 >= 7) {
    //         condicion1 = 1;
    //     } else {
    //         condicion1 = 0;
    //     }

    //     let condicion2;
    //     if (tp2 >= 7) {
    //         condicion2 = 1;
    //     } else {
    //         condicion2 = 0;
    //     }

    //     let condicion3;
    //     if (tp3 >= 7) {
    //         condicion3 = 1;
    //     } else {
    //         condicion3 = 0;
    //     }

    //     let condicion4;
    //     if (tp4 >= 7) {
    //         condicion4 = 1;
    //     } else {
    //         condicion4 = 0;
    //     }

    //     let sumaTP = condicion1 + condicion2 + condicion3 + condicion4;
    //     let condicionTP;

    //     console.log(condicion1);
    //     console.log(condicion2);
    //     console.log(condicion3);
    //     console.log(condicion4);

    //     if (sumaTP == 4) {
    //         condicionTP = 2;
    //     } else if (sumaTP == 3) {
    //         condicionTP = 1;
    //     } else {
    //         condicionTP = 0;
    //     }

    //     if (alumnoNotas.primerParcial >= 7 && alumnoNotas.segundoParcial >= 7) {
    //         alumnoNotas.estado = 'APROBADO';
    //     } else if (condicionTP == 2 && alumnoNotas.primerParcial >= 5 && alumnoNotas.segundoParcial >= 5) {
    //         alumnoNotas.estado = 'APROBADO';
    //     } else if (alumnoNotas.primerParcial < 5 || alumnoNotas.segundoParcial < 5) {
    //         alumnoNotas.estado = 'LIBRE';
    //     } else {
    //         alumnoNotas.estado = 'REGULAR';
    //     }
    //     localStorage.setItem('alumnosLocal', JSON.stringify(alumnos));
    //     listaAlumnos(alumnos);
    // }
}

botonCargarNotas.addEventListener('click', ocultarBuscador);

function ocultarBuscador() {
    let contenedorFiltros = document.getElementById('barraFiltros');
    contenedorFiltros.classList.add('oculto');
}
