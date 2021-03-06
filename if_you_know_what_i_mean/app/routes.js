 // app/routes.js
// grab the nerd model we just created
var Nerd = require('./models/nerd');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route

        app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, nerds) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON format
            });
        });

        app.get('/', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file

        });

        app.post('/', function(req,res){
            var nome= req.body.nome;
            var senha= req.body.senha;
            var email= req.body.email;

        console.log(nome,senha,email);

        var usuario = new Nerd({
            nome: nome, 
            email: email,
            senha: senha
        });

        usuario.save();

        res.send('Comando Save executado');

        });

    };

