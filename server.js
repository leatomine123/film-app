let express = require ('express');
let app = express ();

//set main route
app.get ('/', function (req, res){
    res.send('Restful API');
});

//users list
let users = [
    { id: 1, username: 'Lea Tomine Bøe', email: 'leatomine@gmail.com' },     
];

//Define API endpoint
app.get('/api/usersList', function (req, res, next){
    res.send(users);
})

//listen
app.listen(8080, function (){
    console.log("Server is listening on port 8080");
    });
