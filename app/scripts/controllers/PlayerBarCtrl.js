(function() {
    function PlayerBarCtrl($rootScope, Fixtures, SongPlayer) {
        this.albumData = SongPlayer.currentAlbum();
        this.songPlayer = SongPlayer;
        
        if (!this.albumData) {
            this.albumData = JSON.parse(localStorage.getItem("currentAlbum"));
        }
        
        $rootScope.customPlaylistMode = function() {
            SongPlayer.mode = "custom";
            console.log(SongPlayer.mode);
        };
        
        console.log(SongPlayer.mode);
    }
    
    angular
        .module('blocJams')
        .controller('PlayerBarCtrl', ['$rootScope', 'Fixtures', 'SongPlayer', PlayerBarCtrl]);
})();