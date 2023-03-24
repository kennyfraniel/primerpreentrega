import express from "express";
import ProductRouter from "./router/product.routes.js";
import CartRouter from "./router/carts.routes.js";
import { engine } from "express-handlebars";
import * as path from "path";
import __dirname from "./utils.js";
import ProductManager from "./controllers/ProductManager.js";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { MONGODB_CNX_STR } from "./config/mongo.js";
import { configureMessagesSocket } from "./sockets/messages.socket.js";



const app = express ();
const product = new ProductManager()
const httpServer = app.listen(5000, () => { console.log('escuchando!') })
const io = new Server(httpServer)


await mongoose.connect(MONGODB_CNX_STR)

io.on('connection', function(socket){
    configureMessagesSocket(io, socket)
})


app.use(express.json())
app.use(express.urlencoded({extended: true}));

//Handlebars//
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname + "/views"))

//Static//
app.use("/", express.static(__dirname + "/public"))

app.get("/", async (req, res) => {
    let allProducts = await product.getProducts()
    res.render("home",{
        title: "Express Avanzado | Handlebars",
        allProducts
    })
})

app.use("/api/products", ProductRouter)
app.use("/api/cart", CartRouter)



