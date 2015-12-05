main_module.factory('modifyFactory', function () {
    
    var savedData = {};
    
    function set(data) {
        console.log('modifyFactory: ' + data.personname);
        savedData = data;
    }
 
    function get() {
        return savedData;
    }

    return {
        set: set,
        get: get
    };

});