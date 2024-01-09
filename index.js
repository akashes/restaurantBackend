const jsonServer = require('json-server')

const restServer=jsonServer.create()
const router = jsonServer.router('db.json')
const middleware= jsonServer.defaults()

const port =3001

restServer.use(middleware)
restServer.use(router)

restServer.listen(port,()=>{
    console.log(`server started and listening in port ${port}`);
})