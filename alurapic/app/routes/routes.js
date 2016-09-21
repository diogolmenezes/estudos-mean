module.exports = function(app) {
    app.route('/v1/fotos')
        .get(app.controllers.fotosController.listar)
        .post(app.controllers.fotosController.incluir);
        
    app.route('/v1/fotos/:id')
       .get(app.controllers.fotosController.carregar)
       .delete(app.controllers.fotosController.excluir)
       .put(app.controllers.fotosController.atualizar);
    
    app.get('/v1/grupos', app.controllers.gruposController.listar);
};