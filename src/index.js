import express from "express";
import ProductRouter from "./router/product.routes.js";
import CartRouter from "./router/carts.routes.js";
import { engine } from "express-handlebars";
import * as path from "path";
import __dirname from "./utils.js";
import ProductManager from "./controllers/ProductManager.js";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { MONGO_URI } from "./config/mongodb.js";



const app = express ();
app.use(express.static(__dirname+'/public'))
app.engine("handlebars", engine())
app.set("views", path.resolve(__dirname + "/views"))
app.set("view engine", "handlebars")
app.use("/api/products", ProductRouter)
app.use("/api/cart", CartRouter)

const product = new ProductManager()
const httpServer = app.listen(5000, () => { console.log('escuchando!') })
const io = new Server(httpServer)


mongoose.connect(MONGO_URI)
.then(() => {
    console.log("Mongo funciona")
})
.catch ((err) =>{
    console.log("No funciona:"+err)
})

app.use(express.json())
app.use(express.urlencoded({extended: true}));




console.log(__dirname+'/public')
//app.use(express.static(path.join(__dirname, "js")));

app.get("/chat", async (req, res) => {
    res.render("chat",{
        title: "Chat handlebars",
        
    })
})
app.get("/", async (req, res) => {
    let allProducts = await product.getProducts()
    res.render("products",{
        title: "Productos",
        allProducts
    })
})
const messages = [];

io.on('connection', function(socket){
    socket.emit('mensaje', 'saludos como están')

    socket.on('nuevoMensaje', data => {
        messages.push(data)
        io.emit('mensajes', messages);
    });
})




