angular.module("ListaTelefonica").directive("uiAlert", function(){
    return{
        templateUrl: "js/view/alert.html",
        replace: true, 
        restrict: "AE",
        scope: {
            topic: "=title",
            error: "=message"
        }
    };
});