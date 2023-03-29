
class Sockets {
    constructor(io){
        this.io = io
        this.socketEvent()
    }

    socketEvent() {
        
        this.io.on("connection", ( socket ) => {
            // Consumer
            socket.on("mensaje-to-server", (data) => {
                //socket.emit("mensaje-from-server", data)
                console.log("data ==> ", data)
                this.io.emit("mensaje-from-server", data)
            })

        });
    }
}

module.exports = Sockets