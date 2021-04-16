
const cargarListado = () => {
    let tipoUsuario = "cliente";
    var datos = {
        tipo_usuario: tipoUsuario
    }

    fetch("http://localhost:5000/usuarios/buscar_tipo_usuario", {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(
            response => {
                return response.json();
            }
        )
        .then(
            json => {
                let listado;
                for (let i = 0; i < json.length; i += 2) {                         


                    if (json[i + 1] !== undefined) {

                        listado = `<div class="listado">
                    <div class="info-listado">
                        <div class="img-categoria">
                            <img src="${json[i].imagen_usuario}" />
                        </div> 
                        <div class="descripcion-info">
                            <h5 class="titulo-categoria">${json[i].nombre} ${json[i].apellido1} ${json[i].apellido2}</h5>
                        </div>
                        <div class="button-accion">
                            <a href="../perfilClienteAdmi/perfil_cliente_admi.html" data-correo = "${json[i].correo}" onclick="ver(this)"><i class="far fa-eye"></i></a>
                        </div>
                        <div class="button-accion">
                            <a href="#"><i class="fas fa-user-times"></i></i></a>
                        </div>
                    </div>

                    <div class="info-listado">
                        <div class="img-categoria">
                            <img src="${json[i+1].imagen_usuario}" />
                        </div>
                        <div class="descripcion-info">
                            <h5 class="titulo-categoria">${json[i + 1].nombre} ${json[i + 1].apellido1} ${json[i + 1].apellido2}</h5>
                        </div>
                        <div class="button-accion">
                            <a href="../perfilClienteAdmi/perfil_cliente_admi.html" data-correo = "${json[i+1].correo}" onclick="ver(this)"><i class="far fa-eye"></i></a>
                        </div>
                        <div class="button-accion">
                            <a href="#"><i class="fas fa-user-times"></i></i></a>
                        </div>
                    </div>
                </div>`;

                    } else {
                        listado = `<div class="listado">
                        <div class="info-listado">
                            <div class="img-categoria">
                                <img src="${json[i].imagen_usuario}" />
                            </div>
                            <div class="descripcion-info">
                                <h5 class="titulo-categoria">${json[i].nombre} ${json[i].apellido1} ${json[i].apellido2}</h5>
                            </div>
                            <div class="button-accion">
                                <a href="../perfilClienteAdmi/perfil_cliente_admi.html" correo = "${json[i].correo}" onclick="ver(this)"><i class="far fa-eye"></i></a>
                            </div>
                            <div class="button-accion">
                                <a href="#"><i class="fas fa-user-times"></i></i></a>
                            </div>
                        </div>
                    </div>`


                    }
                    

                    document.getElementById('listado').insertAdjacentHTML("beforeend", listado);

                }
            }
        )
}




const ver = (element) => {
    const correo = element.getAttribute('data-correo');
    console.log(correo);
    localStorage.setItem('data-correo', correo);

  
}