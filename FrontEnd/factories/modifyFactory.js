main_module.factory('modifyFactory', function () {
    
    var savedData = {}
    
    function set(data) {
        console.log('modifyFactory: ' + data.length);
        console.log('modifyFactory: ' + data.personname);
        console.log('modifyFactory: ' + data.personaddress);
        console.log('modifyFactory: ' + data.personage);
        savedData = data;
    }
 
    function get() {
        return savedData;
    }

    return {
        set: set,
        get: get
    }

});