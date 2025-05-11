const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000
const users = [
    {id: 1, name: 'Shamim', email: 'shamim@gmail.com'},
    {id: 2, name: 'Sonia', email: 'sonia@gmail.com'},
    {id: 3, name: 'Meherima', email: 'meherima@gmail.com'},
]


app.use(cors())
app.use(express.json()) //It is for json file Post method using in frontEnd


app.get('/', (req, res)=>{
    res.send('This is Users Management System')
})

app.get('/users', (req, res)=>{
    res.send(users)
})
app.post('/users', (req, res) =>{
    const newUsers = req.body;
    newUsers.id = users.length + 1;
    users.push(newUsers)
    res.send(newUsers)
})

app.delete('/users/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const index = users.findIndex(u=> u.id === id)
    if(index !== -1){
        users.splice(index, 1)
        res.send(users)
    }
})
app.listen(port, ()=>{
    console.log(`Users Management System Port is : ${port}`)
})