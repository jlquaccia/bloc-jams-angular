(function() {
    function UserInfo() {
        var user = '';
        
        return {
            getUser: function() {
                return user;
            },
            setUser: function(value) {
                user = value;
            }
        };
    }
    
    angular
        .module('blocJams')
        .service('UserInfo', UserInfo)
})();