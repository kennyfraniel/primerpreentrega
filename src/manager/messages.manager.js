class MessagesManager {
    constructor () {
        this.mesages = [{usuario: 'franco', mensaje: 'hola!'}]
    }

    agregar(msg) {
        this.mesages.push(msg)
    }

    obtenerTodos(){
        return this.mesages
    }
}

export const messagesManager = new MessagesManager()