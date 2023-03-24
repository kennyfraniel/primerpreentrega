const socket = io('http://localhost:5000', {'forceNew':true});
        socket.on('mensaje',function(data){
             alert(data);
        }) 

             document.getElementById("enviarMensaje").addEventListener('click', function(){
                const msg = {
                    usuario:document.getElementById('usuario').value,
                    mensaje:document.getElementById('mensaje').value
                }

                socket.emit('nuevoMensaje', msg);
                document.getElementById('mensaje').value= ''
            })
     

        socket.on('mensajes', function(data){
            document.getElementById("mensajes").innerHTML="";
            data.forEach(element => {
                document.getElementById("mensajes").innerHTML+=`<strong>${element.usuario}</strong><br/><p>${element.mensaje}</p><br/>`;

            });
        });