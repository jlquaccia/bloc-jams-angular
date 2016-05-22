(function() {
    function ProfileCtrl($rootScope, LocalStorage) {
        if (!$rootScope.userEmail) {
            $rootScope.userEmail = localStorage.getItem("userEmail");
        }
        
        if (!$rootScope.userEmail) {
            $location.path('/login');
        }
        
        $rootScope.currentPlaylist = LocalStorage.get();
    }
    
    angular
        .module('blocJams')
        .controller('ProfileCtrl', ['$rootScope', 'LocalStorage', ProfileCtrl]);
})();