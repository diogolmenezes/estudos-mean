FotosController = function() {    
    this.mongoose = require('mongoose');
    this.model    = this.mongoose.model('Foto');
};

FotosController.prototype.listar = function(request, response) {   
    this.model.find({})
        .then(function(results) {
            response.json(results)
        }, function(error) {
            console.log(error);
            response.status(500).json(error);
        });
};

FotosController.prototype.carregar = function(request, response) {    
    this.model.findById(request.params.id)
        .then(function(result) {
            if(result) 
                response.json(result)
            else
                response.status(404);
        }, function(error) {
            console.log(error);
            response.status(500).json(error);
        });
};

FotosController.prototype.excluir = function(request, response) {    
    this.model.remove({ _id: request.params.id })
        .then(function() {
            response.sendStatus(204);
        }, function(error) {
            console.log(error);
            response.status(500).json(error);
        });
};

FotosController.prototype.incluir = function(request, response) {  
    this.model.create(request.body)
        .then(function(result) {
            response.json(result);
        }, function(error) {
            console.log(error); 
            response.status(500).json(error);
        });
};

FotosController.prototype.atualizar = function(request, response) {    
    this.model.findByIdAndUpdate(request.params.id, request.body)
        .then(function(result) {
            response.json(result);
        }, function(error) {
            console.log(error); 
            response.status(500).json(error);
        });
};

module.exports = new FotosController();