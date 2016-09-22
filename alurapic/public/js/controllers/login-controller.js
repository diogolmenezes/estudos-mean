angular.module('alurapic')
	.controller('LoginController', function($scope, $http, $location) {

        $scope.usuario  = {};	
        $scope.mensagem = '';	

        $scope.autenticar = function() {
            console.log('autenticar');
            $http.post('/v1/autenticar', { login: $scope.usuario.login, senha: $scope.usuario.senha })
                 .then(function() {
                     $location.path('/');
                 }, function(error) {
                     console.log(error)
                     $scope.mensagem = 'Login ou senha inválidos';
                 });
        };
	});