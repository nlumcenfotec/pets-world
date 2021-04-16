document.querySelector('#revisarDenuncia').addEventListener('click', e => {
    let revisar = document.getElementById("revisarDenuncia");
    let error = revisarForm();
    let correo = document.getElementById("correo");
    let validar = validarEmail(correo.value);
    if (!error) {
        if(validar) {
            Swal.fire({
                title: 'Éxito!',
                text: 'Denuncia enviada',
                icon: 'Success',
                confirmButtonText: 'Aceptar'

            })
            revisar.setAttribute("href", "../landingPageProveedor/landing_page_proveedor.html")
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


