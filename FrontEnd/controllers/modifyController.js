main_module.controller('controllerModify',function($scope, modifyFactory, personFactory){
    
    
    $scope.modifyPerson = modifyFactory.get();
    
    console.log('modifyPerson: ' + $scope.modifyPerson.personname);
    
    $scope.cancelClicked = function () {
        
        console.log('cancel Clicked');
        personFactory.cancelPerson();
    };
 
});