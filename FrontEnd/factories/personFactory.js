main_module.factory('personFactory', function () {
    
    var factory = {};
    
    factory.getPersons = function () {
    console.log('personFactory.js getPersons');
    };
    
    factory.addPerson = function () {
    console.log('personFactory.js addPerson');
    window.location.href = "#/addPerson";
    };
    
    factory.logoutPerson = function () {
    console.log('personFactory.js logoutPerson');
    window.location.href = "#/";
    };
   
    //Factory must always return an object!!!!
    return factory;
});