const socket = io('http://localhost:5000', {'forceNew':true});
        socket.on('mensaje',function(data){
             alert(data);
        }) 

        socket.on('mensajesCliente', function(data){
            document.getElementById("mensajes").innerHTML="";
            data.forEach(element => {
                document.getElementById("mensajes").innerHTML+=`<strong>${element.usuario}</strong><br/><p>${element.mensaje}</p><br/>`;

            });
        });
       
        window.onload=function(){
            const boton = document.getElementById("enviarMensaje").addEventListener('click', function(){
                const mensaje = {
                    usuario:document.getElementById('usuario').value,
                    mensaje:document.getElementById('mensaje').value
                }

                socket.emit('nuevoMensaje',mensaje);
            })
        }