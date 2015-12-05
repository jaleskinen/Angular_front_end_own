main_module.controller('controllerPerson', function ($scope, $http, personFactory, modifyFactory) {

	$http.get('http://localhost:3000/friends/username=' + localStorage.username)
        .success(function (persons) {
            $scope.persons = persons;
        });
    
     //This is called when searchClicked
    $scope.searchClicked = function () {
        console.log('Search Clicked');
        $http.get('http://localhost:3000/persons/name=' + $scope.search + '/username=' + localStorage.username)
            .success(function (persons) {
                $scope.persons = persons;
            });
    };
    
    $scope.showAllClicked = function () {
        console.log('Show All Clicked');
        window.location.reload();
    };
    
    //This is called when addPersonClicked
    $scope.addPersonClicked = function () {
        console.log('addperson Clicked');
        window.location.href = "#/addPerson";
    };
    
    //This is called when logoutClicked
    $scope.logoutClicked = function () {
        console.log('logout Clicked');
        window.location.href = "#/";
        /*personFactory.logoutPerson();*/
    };
     
    //This is called when modifyClicked
    $scope.modifyClicked = function (index) {
        console.log('modify Clicked: ');
    
        var temp = {
            personid: $scope.persons[index]._id,
            personname: $scope.persons[index].name,
            personaddress: $scope.persons[index].address,
            personage: $scope.persons[index].age
        };
        
        console.log('temp: ' + temp.personid + temp.personname + temp.personaddress + temp.personage);
        modifyFactory.set(temp);  //Save data for modifyController
        window.location.href = "#/modifyPerson";
    };
    
    //This is called when addPerson/addClicked
    $scope.addClicked = function () {
        console.log('add Clicked');
        
        var data = {
            user: localStorage.username,
            name: $scope.name,
            address: $scope.address,
            age: $scope.age
        };

        personFactory.addNewPerson(data);
    };
    
    //This is called when addPerson/cancelClicked
    $scope.cancelClicked = function () {
        console.log('cancel Clicked');
        window.location.href = "#/persons";
    };
    
});