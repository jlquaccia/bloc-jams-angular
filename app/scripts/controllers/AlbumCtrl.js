(function() {    
    function AlbumCtrl($rootScope, $location, Fixtures, SongPlayer) {        
        this.albumData = SongPlayer.currentAlbum();
        
        this.songPlayer = SongPlayer;
        
        if (!$rootScope.userEmail) {
            $rootScope.userEmail = localStorage.getItem("userEmail");
        }
        
        if (!$rootScope.userEmail) {
            $location.path('/login');
        }
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['$rootScope', '$location', 'Fixtures', 'SongPlayer', AlbumCtrl]);
})();