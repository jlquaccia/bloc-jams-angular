(function() {
    function ProfileCtrl($rootScope) {
        if (!$rootScope.userEmail) {
            $rootScope.userEmail = localStorage.getItem("userEmail");
        }
        
        if (!$rootScope.userEmail) {
            $location.path('/login');
        }
    }
    
    angular
        .module('blocJams')
        .controller('ProfileCtrl', ['$rootScope', ProfileCtrl]);
})();