import { messagesManager } from "../manager/messages.manager.js";

export function configureMessagesSocket (io, socket) {
    socket.on('nuevoMensaje', msg => {
        messagesManager.agregar(msg)
        io.sockets.emit('mensajes', messagesManager.obtenerTodos())
    })
}