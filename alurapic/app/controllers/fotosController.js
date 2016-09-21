FotosController = function() {};

FotosController.fotos = [ 
        {_id: 1, titulo: 'titulo1', url: 'http://i0.wp.com/spacenews.com.br/wp-content/uploads/2015/11/maxresdefault.jpg', descricao: 'descricao'},
        {_id: 2, titulo: 'titulo2', url: 'http://i0.wp.com/spacenews.com.br/wp-content/uploads/2015/11/maxresdefault.jpg', descricao: 'descricao'}
    ];

FotosController.prototype.listar = function(request, response) {
    response.json(FotosController.fotos);
};

FotosController.prototype.carregar = function(request, response) {
    var foto = FotosController.fotos.find(function(foto) {
        return foto._id == request.params.id;
    });

    response.json(foto);
};

FotosController.prototype.excluir = function(request, response) {
    FotosController.fotos = FotosController.fotos.filter(function(foto) {
        return foto._id != request.params.id;
    });

    response.sendStatus(204);
};

FotosController.prototype.incluir = function(request, response) {
    foto     = request.body;
    foto._id = FotosController.fotos[FotosController.fotos.length-1]._id + 1;
    FotosController.fotos.push(foto); 
    response.json(foto);
};

FotosController.prototype.atualizar = function(request, response) {
    foto       = request.body;
    var indice = FotosController.fotos.findIndex(function(foto) {
        return foto._id == request.params.id;
    });

    FotosController.fotos[indice] = foto; 

    response.sendStatus(200);
};

module.exports = new FotosController();