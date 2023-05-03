console.log('hola');
const socket = io('http://localhost:5000', {'forceNew':true});
        socket.on('mensaje',function(data){
             alert(data);
        }) 

        
        // window.onload=function(){
            document.getElementById("enviarMensaje").addEventListener('click', function(){
                const mensaje = {
                    usuario:document.getElementById('usuario').value,
                    mensaje:document.getElementById('mensaje').value
                }
                console.log(mensaje);
                socket.emit('nuevoMensaje',mensaje);
                new 
                
                document.getElementById('mensaje').value = ''
            })
            // }

            socket.on('mensajes', function(data){
                console.log('data', data);
                document.getElementById("mensajes").innerHTML="";
                data.forEach(element => {
                    document.getElementById("mensajes").innerHTML+=`<strong>${element.usuario}</strong><br/><p>${element.mensaje}</p><br/>`;
    
                });
            });