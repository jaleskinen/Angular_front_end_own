main_module.controller('controllerAddPerson', function ($scope, addPersonFactory) {
    
    //This is called when addPClicked
    $scope.addClicked = function () {
        
        console.log('add Clicked');
        
        var temp = {
            name:$scope.name,
            address:$scope.address,
            age:$scope.age
        }
        
        addPersonFactory.addPerson(temp);
        
    };
     
});