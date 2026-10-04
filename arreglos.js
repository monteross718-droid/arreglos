let edadesIzquierda = [];
let edadesDerecha = [];


function agregarEdad(){

    let edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    edadesIzquierda.push(edad);

    console.log(edadesIzquierda);

    pintarArregloIzquierda();
    
}

function pintarArregloIzquierda(){

    let tabla = document.getElementById("tablaIzquierda");

    let contenido = "";

    for(let i = 0; i < edadesIzquierda.length; i++){

        contenido = contenido + `
            <tr>
                <td>${edadesIzquierda[i]}</td>

                <td>
                    <button class="btn-eliminar" onclick="eliminarIzquierdo(${i})">Eliminar</button>
                </td>

                <td>
                    
                    <button class="btn-mover" onclick="moverHaciaDerecha(${i})">➜</button>
                
                </td>
            </tr>
        `;
                    
    }

    tabla.innerHTML = contenido;
}

function eliminarIzquierdo (indice){
    edadesIzquierda.splice(indice,1);
    pintarArregloIzquierda();
    
}

function pintarArregloDerecha(){

    let tabla = document.getElementById("tablaDerecha");
    let contenido = "";

    for(let i = 0; i < edadesDerecha.length; i++){

        contenido = contenido + `
            <tr>

                <td>
                    <button class="btn-mover" onclick="moverHaciaIzquierda(${i})">
                        ⬅
                    </button>
                </td>

                <td>${edadesDerecha[i]}</td>

                <td>
                    <button class="btn-eliminar" onclick="eliminarDerecha(${i})">
                        Eliminar
                    </button>
                </td>

            </tr>
        `;
    }

    tabla.innerHTML = contenido;
}

function eliminarDerecha(indice){
    edadesDerecha.splice(indice, 1);
    pintarArregloDerecha();
}

function moverHaciaDerecha(indice){

    let edad = edadesIzquierda[indice];

    edadesDerecha.push(edad);

    edadesIzquierda.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}
function moverHaciaIzquierda(indice){

    let edad = edadesDerecha[indice];

    edadesIzquierda.push(edad);

    edadesDerecha.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}