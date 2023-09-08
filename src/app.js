const express = require("express")
const handlebars = require("express-handlebars")
const viewsRouter = require("./routes/views.router")
const app = express()
const PORT = 8080

app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + '/views')
app.set("view engine", "handlebars")
app.use(express.static(__dirname + '/public'))

/* const users = [
    { name: "usuario A", lastName: "Apellido usuario A", age: 20, email: "usuarioA@mail.com", phone: 1584657486 },
    { name: "usuario B", lastName: "Apellido usuario B", age: 25, email: "usuarioB@mail.com", phone: 1584657486 },
    { name: "usuario C", lastName: "Apellido usuario C", age: 30, email: "usuarioC@mail.com", phone: 1584657486 },
    { name: "usuario D", lastName: "Apellido usuario D", age: 35, email: "usuarioD@mail.com", phone: 1584657486 },
    { name: "usuario E", lastName: "Apellido usuario E", age: 40, email: "usuarioE@mail.com", phone: 1584657486 }
] */

// app.get("/", (req, res) => {
/*  let testUser = {
     name: "Daniel",
     last_name: "Diaz"
 }
 res.render('index', testUser) */
/*    const randomIndex = Math.floor(Math.random() * users.length)
   const randomUser = users[randomIndex]
   res.render("index", randomUser) */
// })

app.use("/", viewsRouter)

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`))
