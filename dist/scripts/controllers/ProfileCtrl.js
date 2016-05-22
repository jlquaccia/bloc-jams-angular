(function() {
    function ProfileCtrl($rootScope, LocalStorage) {
        if (!$rootScope.userEmail) {
            $rootScope.userEmail = localStorage.getItem("userEmail");
        }
        
        if (!$rootScope.userEmail) {
            $location.path('/login');
        }
        
        $rootScope.currentPlaylist = LocalStorage.get();
        
        $rootScope.removeSongFromPlaylist = function(index) {
            // remove from currentPlaylist
            $rootScope.currentPlaylist.splice(index, 1);
            
            // remove from localStorage
            var json = JSON.parse(localStorage["currentPlaylist"]);
            
            json.splice(index, 1);
            localStorage["currentPlaylist"] = JSON.stringify(json);
        };
        
        $rootScope.clearAllFromPlaylist = function() {
            var confirmation = confirm("This will clear all songs from your playlist.  Are you sure?");
            
            if (confirmation) {
                $rootScope.currentPlaylist = [];
                localStorage.removeItem("currentPlaylist");
            } else {
                return;
            }
        };
    }
    
    angular
        .module('blocJams')
        .controller('ProfileCtrl', ['$rootScope', 'LocalStorage', ProfileCtrl]);
})();