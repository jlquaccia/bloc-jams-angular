(function() {    
    function AlbumCtrl($rootScope, $scope, $location, Fixtures, SongPlayer, LocalStorage) {        
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
        
        $rootScope.currentPlaylist = LocalStorage.get();
        
        // add a song to the current playlist from album.html
        $scope.addSongToPlaylist = function(song) {
            $rootScope.currentPlaylist.push(song);
            LocalStorage.put($rootScope.currentPlaylist);
        };
        
        $rootScope.removeSongFromPlaylist = function() {
            
        };
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['$rootScope', '$scope', '$location', 'Fixtures', 'SongPlayer', 'LocalStorage', AlbumCtrl]);
})();