main_module.factory('addPersonFactory', function () {
    
    var factory = {};
    
    factory.addPerson = function (data) {
        console.log('addPersonFactory.js: ');
        var requestData = {
        
            //username: $("#username").val(),
            //password: $("#password").val()
            user: localStorage.username,
            name: data.name,
            address: data.address,
            age: data.age
        };
        console.log('user: ' + localStorage.username );
        console.log('name: ' + data.name );
        console.log('address: ' + data.address );
        console.log('age: ' + data.age );
        
        $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/persons',
            data: data,
            //datatype: 'json'
        }).done(function (data) {
             window.location.href = "#/persons";
        });
        
        
    };
   
    //Factory must always return an object!!!!
    return factory;
});