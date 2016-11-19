(function(){
    
var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function ($scope) {
   /* var images = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "6.gif", "7.gif", "8.gif"]; */
    
    $scope.photo = function () {
        $scope.image = 'pictures/' + Math.floor((Math.random() * 12) + 1).toString() + ".gif";
    };
    $scope.unphoto = function () {
        $scope.image = " ";
    };
}]);
    

app.controller('LastGamesController' , function($http){
    var aux = this;
    $http.get('/jsons/Last-characters.json').success(function(response){
        aux.characters = response;
    });
    
});

    
app.controller('AnswerController',['$http', "$scope",function($http, $scope){
    
 
   function send(valor){
        $http.post('/ans', valor).success(function(data){
        console.log(data);
     });
   }
    
    $scope.setYes = function(){
       send({"answer": "yes"});
    };
    
    $scope.setNo = function(){
       send({"answer": "no"});
    };
    

}]);
    
    
app.controller('QuestionsController',['$http','$scope',function($http,$scope){
 
    
$http.get('/Question').success(function(data){
        $scope.interrogante = data;
    });
    
    
}]);

    
   
    
})();