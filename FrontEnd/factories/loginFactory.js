main_module.factory('loginFactory',function(){
    
    var factory = {};
    
    //This function can be called from ANY controller using this factory
    //implementation
    factory.startLogin = function(data){
        
        console.log('loginFactory.js: ' + data);
        var requestData = {
        
            //username: $("#username").val(),
            //password: $("#password").val()
            username: data.username,
            password: data.password
        };

        //localStorage.username = $("#username").val();
        //sessionStorage.user = $("#username").val();
        localStorage.username = data.username;
        sessionStorage.user = data.password;
        console.log('localStorage.username: ' + data.username );
        console.log('localStorage.password: ' + data.password );

        //Send login request to server
        $.ajax({

            method: 'POST',
            url: 'http://localhost:3000/friends/login',
            data: requestData,
            dataType: 'json'

        }).done(loginResponseHandler);
    }
    
    function loginResponseHandler(data) {
    
        //If login status was ok
        if (data.status === "Ok") {
             console.log('Login status was ok');
     //Ask browser to load persons.html from node server
             window.location.href = "#/persons";
            //window.location.href = 'http://localhost:3000/partial_persons.html';

        } else {
            console.log('Login status was NOT ok');
            $("#status").text(data.status);
        }
    }
    
    //Factory must always return an object!!!!
    return factory;
    
});