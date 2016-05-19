(function() {    
    function AlbumCtrl($rootScope, $scope, $location, Fixtures, SongPlayer) {        
        this.albumData = SongPlayer.currentAlbum();
        this.songPlayer = SongPlayer;
        
        if (!$rootScope.userEmail) {
            $rootScope.userEmail = localStorage.getItem("userEmail");
        }
        
        if (!$rootScope.userEmail) {
            $location.path('/login');
        }
        
        // make sure current album data isn't lost on page refresh
        if (!this.albumData) {
            this.albumData = JSON.parse(localStorage.getItem("currentAlbum"));
        }
        
        $scope.addSongToPlaylist = function() {
            console.log(typeof albumData);
        };
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['$rootScope', '$scope', '$location', 'Fixtures', 'SongPlayer', AlbumCtrl]);
})();