main_module.controller('controllerPerson',function($scope, $http, personFactory, modifyFactory){

	$http.get('http://localhost:3000/friends/username=' + localStorage.username)
	.success(function(persons){
		$scope.persons = persons;
	});
    
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
    
    /*$scope.testi2 = {
            name : "Stranger"
        };
    
    $scope.username = 'World';
    
    $scope.sayHello = function() {
       $scope.greeting = 'Hello ' + $scope.testi2.name + '!';
      };*/
     
    //This is called when logoutClicked
    $scope.modifyClicked = function(index) {

        console.log('modify Clicked: ');
        
        var temp = {
            personname:$scope.persons[index].name,
            personaddress:$scope.persons[index].address,
            personage:$scope.persons[index].age
        }
        
        console.log('temp: ' + temp.personname + temp.personaddress + temp.personage);
        /*personFactory.modifyPerson(temp);*/
        modifyFactory.set(temp);
        window.location.href = "#/modifyPerson";
        
    };
    
    //This is called when addClicked
    $scope.addClicked = function () {
        
        console.log('add Clicked');
        
        var data = {
            user: localStorage.username,
            name:$scope.name,
            address:$scope.address,
            age:$scope.age
        }

        personFactory.addNewPerson(data);
        
    };
    
    //This is called when searchClicked
    $scope.searchClicked = function () {
        
        console.log('search Clicked');
        
        var temp = {
            searchText:$scope.search,
        }

        personFactory.searchPerson(temp);
        
    };
    
    //This is called when updateClicked
    $scope.updateClicked = function () {
        console.log('add Clicked');
        var data = {
            id: person_data._id,
            name: $scope.name,
            address: $scope.address,
            age: $scope.age
        };
        
        personFactory.updatePerson(data);
    };
    
    $scope.cancelClicked = function () {
        
        console.log('cancel Clicked');
        
        personFactory.cancelPerson();
        
    };
    
});