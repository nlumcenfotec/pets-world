
document.querySelector('#revisarCliente').addEventListener('click', e => {
  let revisar = document.getElementById("revisarCliente");
  let error = revisarForm();
  let correo = document.getElementById("correo");
  let validar = validarEmail(correo.value);
  let cedula = document.getElementById('identificacion').value;
  let tipo = document.getElementById('tipoCedula').value;
  let validacionCedula = getCedula(cedula, tipo);

  if (!error) {
      let fechaNacimiento = calcularEdad();
      if(fechaNacimiento >= 18) {
          if(validar) {
              if(validacionCedula) {
                  revisar.setAttribute("href", "../perfilCliente/perfil_cliente.html")
  
              } else {
                  Swal.fire({
                      title: 'Error!',
                      text: 'Cédula incorrecta',
                      icon: 'error',
                      confirmButtonText: 'Aceptar'
                  })
  
  
              }
              
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
              text: 'No es mayor de edad',
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



