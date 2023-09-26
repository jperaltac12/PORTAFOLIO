//evento de carga LOAD
window.addEventListener('load', inicial, false);

function inicial() {

    //creacion de tabla de registros
    var tabla = document.createElement('table');
    document.body.appendChild(tabla);

    //declaracion de variables 
    var proveedoresSlt = document.getElementById('proveedoresSlt');
    var cantFresasTxt = document.getElementById('cantHorasTxt');
    var registrarBtn = document.getElementById('registrarBtn');
    var pagoBtn = document.getElementById('pagoBtn');
    var totalFresasBtn = document.getElementById('totalFresasBtn');
    var mayorProductorBtn = document.getElementById('mayorProductorBtn');
    var restablecerBtn = document.getElementById('restablecerBtn');
    var resultadoPr = document.getElementById('resultadoPr');



    //arreglo bidimensional
    //Para obtener un elemento de un arreglo, debe indicarse los índices de su fila i y su columna 
    var datos = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    //carga de funcion con los datos quemados
    registrarProveedores(1, 'Carlos Andres', 'Barrantes', 'Musico', 0, 0, 'juanBolaños24@gmail.com', 60234566);
    registrarProveedores(2, 'Andres', 'Solorzano', 'Escritor', 0, 0, 'pedro94ureña@gmail.com', 75678746);
    registrarProveedores(3, 'Diego', 'Jimenez', 'Musico', 0, 0, 'diegoIna@hotmail.com', 60138932);
    registrarProveedores(4, 'Michael', 'Rodriguez', 'Cantante', 0, 0, 'matiR@gmail.com', 60784256);
    registrarProveedores(5, 'Steven', 'Ureña', 'Arreglista', 0, 0, 'andem@hotmail.com', 83471578);
    registrarProveedores(6, 'Carlos', 'Martinez', 'Guitarrista', 0, 0, 'sjydive@gmail.com', 83768146);
    registrarProveedores(7, 'Marco', 'Alfaro', 'Cantante', 0, 0, 'marcotrainer@gmail.com', 83251831);
    registrarProveedores(8, 'Jairo', 'Trejos', 'Baterista', 0, 0, 'lovedeath@hotmail.com', 71788942);
    registrarProveedores(9, 'Mario', 'Carrillo', 'Compositor', 0, 0, 'mariobros@gmail.com', 70161368);
    registrarProveedores(10, 'Patricia', 'Ordoñez', 'Interprete', 0, 0, 'marcemar@gmail.com', 60947923);

    //carga de la funcion tablaProveedores();
    tablaProveedores();


    //funcion que permite registrar los registros al arreglo
    function registrarProveedores(id, nombre, apellido, tipo, cantidad, total, email, telefono) {
        datos[0].push(id);
        datos[1].push(nombre);
        datos[2].push(apellido);
        datos[3].push(tipo);
        datos[4].push(cantidad);
        datos[5].push(total);
        datos[6].push(email);
        datos[7].push(telefono)
    }



    //funcion que permite ingresar la cantidad del producto a la tabla = datos[4][id] 
    function ingresarFresas() {
        var fresasSumar = Number(cantHorasTxt.value);
        id = Number(proveedoresSlt.value - 1); //proveedoresSlt es el ID del SELECT
        var cantFresas = Number(datos[4][id]); //verifica a cual persona le asigna la cantidad 
        cantFresas = cantFresas + Number(fresasSumar); //formula sumatoria
        datos[4][id] = cantFresas;
    }




    //funcion que permite crear los datos de la tabla
    function tablaProveedores() {

        //Eliminar los registros de la tabla
        tabla.innerHTML = '';

        //Encabezado de la tabla
        var tr = document.createElement('tr');
        tabla.appendChild(tr);

        //Celdas dentro del encabezado
        var th = document.createElement('th');
        th.innerHTML = 'ID';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Nombre';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Apellido';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Tipo';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Total';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Correo';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Teléfono';
        tr.appendChild(th);
        //etiqueta Borrar (invisible)
        th = document.createElement('th');
        th.innerHTML = 'Opciones';
        tr.appendChild(th);
        th = document.createElement('th');
        th.innerHTML = 'Adicionales';
        tr.appendChild(th);


        //ciclo que permtite recorrer los registros de la tabla
        for (var y = 0; y < datos[0].length; y++) {

            var tr = document.createElement('tr');
            tabla.appendChild(tr);

            td = document.createElement('td');
            td.innerHTML = datos[0][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[1][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[2][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[3][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[4][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[6][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[7][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = "<button class='deleteBtn btn btn-outline-info' id='eliminarBtn'>Borrar</button>";
            tr.appendChild(td);
            td = document.createElement('td');
            td.innerHTML = "<button class='editBtn btn btn-outline-info' id='editarBtn'>Editar</button>";
            tr.appendChild(td);

        }
    }


    //Permite generar el total general
    function totalFresasRecolectados() {
        var total = 0;
        resultadoPr.innerHTML = '';
        //classList.add permite acceder a la lista de clases de un elemento como una cadena de texto 
        resultadoPr.classList.add('resultadoPr');
        //ciclo que permite efecturar la sumatoria del total de fresas recolectadas
        for (var y = 0; y < datos[4].length; y++) {
            total = total + Number(datos[4][y]);
        }
        resultadoPr.innerHTML = 'La cantidad total de horas de producción es de: ' + total;
    }


    //Permite buscar el mayor productor
    function mayorProveedor() {
        /*permite buscar el mayor provedoor mediante el arreglo(matriz) y lo busca mediante la propiedad indexOf 
        la variable maxProveedor  que tiene el nombre de la matriz y la posicion [4][0] que es la que posee el total de fresas*/
        var maxProveedor = datos[4][0];
        var posicionMayor = 0;
        resultadoPr.innerHTML = '';
        //ciclo que recorre la matriz para buscar el dato
        for (var y = 0; y < datos[4].length; y++) {

            if (maxProveedor < datos[4][y]) {
                maxProveedor = datos[4][y];
            }
        }
        //apunta el dato encontrado
        posicionMayor = datos[4].indexOf(maxProveedor);
        //muestra el resultado final
        resultadoPr.innerHTML = 'El cliente con mas horas de producción es: ' + datos[1][posicionMayor] + "    " + datos[2][posicionMayor];
    }


    //Permite pagar de acuerdo a un criterio logico
    function pagoProveedores() {
        var precioFresa = 1000;
        var extraVip = 5;
        resultadoPr.innerHTML = ' ';
        id = Number(proveedoresSlt.value - 1); //proveedoresSlt es el ID del SELECT
        var total = 0;
        var pagoNeto;
        pagoNeto = precioFresa * Number(datos[4][id]);
        //condicional que define el tipo de vendedor (regular-VIP) datos[3][id] equivale al campo TIPO de la tabla
        if (datos[3][id] === 'VIP') {
            total = pagoNeto + (pagoNeto / 100) * extraVip;
        } else {
            total = pagoNeto;
        }
        //equivale al campo total del arreglo
        datos[5][id] = total;
        //muestra el resultado final
        resultadoPr.innerHTML = 'El monto a pagar a ' + datos[1][id] + ' ' + datos[2][id] + ' ' + 'es de  ' + total;
    }



    //Permite validar cuando NO existe ningun numero en el campo cantidad de fresas 
    //se usa la libreria sweet alert para brindar mensaje al usuario.
    registrarBtn.onclick = function registrarBtnOnClick() {
        //cargar las 2 funciones de ingresar y crear tabla de registros al mismo tiempo
        ingresarFresas();
        tablaProveedores();
        if (cantFresasTxt.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Atención Usuario',
                text: 'El campo esta vacío. Debe llenarlo con un número',
            })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Atención Usuario',
                text: 'Horas registradas exitosamente',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }


    //Permite borrar el registro deseado de la tabla
    function borrarfila(e) {
        //deleteBtn es un ID del botón borrar
        //condicional que define cuando NO existe boton Borrar en la fila, retorna.
        if (!e.target.classList.contains("deleteBtn")) {
            return;
        }
        //constante que apunta al destino del evento
        const btn = e.target;
        //borra la fila o el registro elegido usando JQUERY
        btn.closest("tr").remove();
    }

    function editarfila(e) {
        //editBtn es un ID del botón editar
        //condicional que define cuando NO existe boton Borrar en la fila, retorna.
        if (!e.target.classList.contains("editBtn")) {
            return;
        }
        //constante que apunta al destino del evento
        for (var y = 0; y < datos[0].length; y++) {
            Swal.fire({
                icon: 'info',
                title: 'Guardar los cambios antes de cerrar la ventana',
                html: `<p>Nombre</p><input "placeholder="${datos[1][y.innerHTML]}"><br><br>
            <p>Apellido</p><input placeholder="${datos[2][y.innerHTML]}"><br><br>
            <p>Tipo</p><input "placeholder="${datos[3][y.innerHTML]}"><br><br>
            <p>Total</p><input "placeholder="${datos[5][y.innerHTML]}"><br><br>
            <p>Correo</p><input "placeholder="${datos[6][y.innerHTML]}"><br><br>
            <p>Teléfono</p><input "placeholder="${datos[7][y.innerHTML]}"><br><br>`,
                showCancelButton: true,
                confirmButtonText: 'Guardar',
            })
        }
    }

    //Permite restablecer los registros de la tabla
    function restablecer() {
        var id = Number(proveedoresSlt.value - 1); //proveedoresSlt es el ID del SELECT
        var cantHorasTxt = 0;
        //agrega al arreglo la cantidad de fresas en 0
        datos[4][id] = cantHorasTxt
    }




    //Permiten la carga de funciones principales		
    pagoBtn.onclick = function pagoBtn() {
        pagoProveedores();
    }
    mayorProductorBtn.onclick = function mayorProductorBtnOnclick() {
        mayorProveedor();
    }
    totalFresasBtn.onclick = function totalFresasBtnOnclick() {
        totalFresasRecolectados();
    }
    restablecerBtn.onclick = function restablecerBtnOnClick() {
        restablecer();
        tablaProveedores();
    }

    //el id tabla ejecuta el evento click para ejecutar la funcion borrarfila
    tabla.addEventListener("click", borrarfila);
    tabla.addEventListener("click", editarfila);





    //cierre de la función inicial
}