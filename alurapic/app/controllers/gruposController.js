GruposController = function() {};
GruposController.prototype.listar = function(request, response) {
    var grupos = [
            {_id: 1, nome: 'Esportes'},
            {_id: 2, nome: 'Animais'}
        ];
    response.json(grupos);
};

module.exports = new GruposController();