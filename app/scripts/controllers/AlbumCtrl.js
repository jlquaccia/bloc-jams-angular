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
        
        $scope.addSongFlashMessage = function(index) {
            $('#' + (index + 1)).removeClass('fadeOutDown')
                .addClass('fadeOutDown')
                .fadeIn()
                .fadeOut();
        };
        
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
        
        $scope.albumPlaylistMode = function() {
            SongPlayer.mode = "album";
        };
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['$rootScope', '$scope', '$location', 'Fixtures', 'SongPlayer', 'LocalStorage', AlbumCtrl]);
})();