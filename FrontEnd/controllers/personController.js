main_module.controller('controllerPerson',function($scope, personFactory){
    
    //This is called when
    $scope.persons = personFactory.getPersons();
    
    //This is called when addPersonClicked
    $scope.addPersonClicked = function () {
        
        console.log('addperson Clicked');
        personFactory.addPerson();
        
    };
    
    //This is called when logoutClicked
    $scope.logoutClicked = function () {
        
        console.log('logout Clicked');
        personFactory.logoutPerson();
        
    };
    
});