main_module.factory('personFactory', function (modifyFactory, $http) {
    
    var factory = {};
    
    /*factory.getPersons = function () {
        console.log('personFactory.js getPersons');
    };*/
    
    factory.addPerson = function () {
        console.log('personFactory.js addPerson clicked');
        window.location.href = "#/addPerson";
    };
    
    factory.addNewPerson = function (data) {
        console.log('personFactory.js addNewPerson data: ' + data.personname);
        /*$http.post('http://localhost:3000/persons', data)
        .success(function(persons){
            window.location.href = "#/persons";
        });
        */
        
        $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/persons',
            data: data,
            //datatype: 'json'
        }).done(function (data) {
             window.location.href = "#/persons";
        }); 
    };
    
    factory.logoutPerson = function () {
        console.log('personFactory.js logoutPerson');
        window.location.href = "#/";
    };
    
    factory.modifyPerson = function (data) {

        modifyFactory.set(data);
        window.location.href = "#/modifyPerson";
    };
    
    
    factory.updatePerson = function (data) {
        console.log('personFactory.js: update');
        
        $http.put('http://localhost:3000/persons' + localStorage.username)
        .success(function(persons){
            console.log("update response received");
            window.location.href = "#/persons";
        });
        
        /*$.ajax({
            method: 'PUT',
            url: 'http://localhost:3000/persons',
            data: data,
            //datatype: 'json'
        }).done(function (data) {
            console.log("update response received");
            window.location.href = "#/persons";
        }); */
    };
    
    factory.cancelPerson = function () {
        console.log('personFactory.js: cancel ');
        window.location.href = "#/persons";
    };
   
    //Factory must always return an object!!!!
    return factory;
});