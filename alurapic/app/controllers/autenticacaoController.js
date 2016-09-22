AutenticacaoController = function(express) {    
    this.mongoose = require('mongoose');
    this.model    = this.mongoose.model('Usuario');
    this.jwt      = require('jsonwebtoken');
    this.express  = express;
};

AutenticacaoController.prototype.autenticar = function(request, response) {  
    var base = this;

    this.model.findOne({ login: request.body.login, senha: request.body.senha })
        .then(function(result) {
            if(!result)
            {
                console.log('Login e senha inválidos');
                response.sendStatus(401);
            }
            else 
            {
                var token = base.jwt.sign({login: result.login}, base.express.get('secret'), {
                     expiresIn: 86400 // valor em segundo, aqui temos um total de 24 horas
                 });

                console.log('Token criado');
                response.set('x-access-token', token);
                response.end();
            }
        }, function(error) {
            console.log('Login e senha inválidos');
            response.sendStatus(401);
        });
};

AutenticacaoController.prototype.verificarToken = function(request, response, next) {
    var token = request.headers['x-access-token'];

    if(token)
    {
        this.jwt.verify(token, this.express.get('secret'), function(error, decoded) {
            if(error)
            {
                console.log('Token inválido');
                response.sendStatus(401);
            }
            else
            {
                request.usuario = decoded;
                next();
            }
        });
    }
    else
    {
        console.log('Token não foi enviado');
        response.sendStatus(401);
    }
};



module.exports = function(app) { return new AutenticacaoController(app) };