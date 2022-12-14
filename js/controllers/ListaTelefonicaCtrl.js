angular.module("ListaTelefonica", []);
angular.module("ListaTelefonica").controller("ListaTelefonicaCtrl", function ($scope, $http, contatosAPI, operadorasAPI, serialGenerator) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];

    var carregarContatos = function () {
        //$http.get("http://localhost/Angular/contatos.php").then(function (response) {
        contatosAPI.getContatos().then(function (response) {
            response.data.forEach(function (item) {
                item.serial = serialGenerator.generate();
            })
            $scope.contatos = response.data;
            // console.log(response.data);
        }).catch(function (response) {
            $scope.error = "Não foi possivel carregar os dados!";
            $scope.msg = "Error 404";
        });
    }

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
            //console.log(response.data);
        });
    };

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.date = new Date();
        //console.log(contato); 
        contatosAPI.saveContato(contato).then(function (response) {
            delete $scope.contato;
            carregarContatos();
        });
    };
    $scope.apagarContatos = function (contatos) {
        

        var contato = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
        
        $http.post("http://localhost:3412/del_contatos", contato).then(function (response) {
        $scope.contatos = response.data; 
        });
       
    };
    $scope.isContatoSelecionado = function (contatos) 
    {
         return [...contatos].some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.classe = "selecionado";
    carregarContatos();
    carregarOperadoras();

}); 