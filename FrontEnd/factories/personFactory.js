main_module.factory('personFactory', function (modifyFactory, $http) {
    
    var factory = {};
    
    /*factory.getPersons = function () {
        console.log('personFactory.js getPersons');
    };*/
    
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
            data: data
            //datatype: 'json'
        }).done(function (data) {
            window.location.href = "#/persons";
        });
    };
   
    //Factory must always return an object!!!!
    return factory;
});