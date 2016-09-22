module.exports = function(app) {

    app.post('/v1/autenticar', app.controllers.autenticacaoController.autenticar.bind(app.controllers.autenticacaoController));
    
    // app.use engloba qualquer verbo HTTP
    app.use('/*', app.controllers.autenticacaoController.verificarToken.bind(app.controllers.autenticacaoController));

    app.route('/v1/fotos')
        .get(app.controllers.fotosController.listar.bind(app.controllers.fotosController))
        .post(app.controllers.fotosController.incluir.bind(app.controllers.fotosController));
        
    app.route('/v1/fotos/:id')
       .get(app.controllers.fotosController.carregar.bind(app.controllers.fotosController))
       .delete(app.controllers.fotosController.excluir.bind(app.controllers.fotosController))
       .put(app.controllers.fotosController.atualizar.bind(app.controllers.fotosController));
    
    app.get('/v1/grupos', app.controllers.gruposController.listar);    
};