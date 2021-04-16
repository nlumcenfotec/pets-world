document.querySelector('#revisarContacto').addEventListener('click', e => {
    let revisar = document.getElementById("revisarContacto");
    let error = revisarForm();
    let correo = document.getElementById("correo");
    let validar = validarEmail(correo.value);
    if (!error) {
        if(validar) {
            Swal.fire({
                title: 'Éxito!',
                text: 'Mensaje enviado',
                icon: 'Success',
                confirmButtonText: 'Aceptar'

            })
            revisar.setAttribute("href", "../../index.html")
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Correo incorrecto',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })

        }    

    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Campos vacíos',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })

    }


})
