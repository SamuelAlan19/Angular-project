angular.module("ListaTelefonica").directive("uiTelefone", function() {
    return{
        require: "ngModel",
        link: function(scope, element, attrs, ctrl) {
            var _formatTelefone = function (telefone) {
                telefone = telefone.replace(/[^0-9]+/g,"");
                if(telefone.length > 4 ) {
                    telefone = telefone.substring(0,4) + "-" + telefone.substring(4);
                }
                if(telefone.length > 5){
                    telefone = telefone.substring(0,9);
                }
                return telefone;
            }
            element.bind("keyup", function (){
                ctrl.$setViewValue(_formatTelefone(ctrl.$viewValue));
                ctrl.$render();

            });
        }
    };



}); 