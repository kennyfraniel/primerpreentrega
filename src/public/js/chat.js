<<<<<<< HEAD
console.log('hola');
=======
>>>>>>> 59f87f4ab98e09a73b516a07ab74488a37493abb
const socket = io('http://localhost:5000', {'forceNew':true});
        socket.on('mensaje',function(data){
             alert(data);
        }) 

<<<<<<< HEAD
        
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
=======
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
>>>>>>> 59f87f4ab98e09a73b516a07ab74488a37493abb
