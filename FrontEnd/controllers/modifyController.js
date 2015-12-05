main_module.controller('controllerModify',function($scope, $http, modifyFactory, personFactory){
    
    
    $scope.modifyPerson = modifyFactory.get();
    
    $scope.cancelClicked = function () {
        
        console.log('cancel Clicked');
       /* personFactory.cancelPerson();*/
        window.location.href = "#/persons";
    };
    
    //This is called when updateClicked
    $scope.updateClicked = function () {
        console.log('Updates Clicked');
       /* $scope.modifyPerson = modifyFactory.get();*/
        console.log('updatePerson id: ' + $scope.modifyPerson.personid);
        console.log('updatePerson name: ' + $scope.modifyPerson.personname);
        var temp = {
            id: $scope.modifyPerson.personid,
            name: $scope.modifyPerson.personname,
            address: $scope.modifyPerson.personaddress,
            age: $scope.modifyPerson.personage
        };
        
        $.ajax({
            method: "PUT",
            url: 'http://localhost:3000/persons',
            dataType: 'json',
            data: temp
        }).done(function (data) {
            console.log("update response received");
            window.location.href = "#/persons";
        });
        
         /*$http.put('http://localhost:3000/persons', temp)
            .success(function(persons){
                console.log("update response received");
                window.location.href = "#/persons";
            });*/
        
    };
    
    //This is called when updateClicked
    $scope.deleteClicked = function () {
        console.log('Delete Clicked');
        console.log('deletePerson id: ' + $scope.modifyPerson.personid);
        
        $http.delete('http://localhost:3000/persons/id=' + $scope.modifyPerson.personid + '/username=' + localStorage.username)
        .success(function (data) {
            console.log("delete response received");
            window.location.href = "#/persons";
        });
    };
});