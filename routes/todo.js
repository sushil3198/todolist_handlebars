const route = require('express').Router()
let todos= [
    {task : "This is a task"},
    {task : "this is another task"}
]
route.get('/',(req,res)=>{
    res.render('todos',{todos})

})

route.post('/',(req,res)=>{
    todos.push({
        task : req.body.newtodo
    })
    res.redirect('todos')
})

module.exports = route