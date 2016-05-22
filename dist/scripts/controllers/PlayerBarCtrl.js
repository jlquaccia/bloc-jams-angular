(function() {
    function PlayerBarCtrl(Fixtures, SongPlayer) {
        this.albumData = SongPlayer.currentAlbum();
        this.songPlayer = SongPlayer;
        
        if (!this.albumData) {
            this.albumData = JSON.parse(localStorage.getItem("currentAlbum"));
        }
    }
    
    angular
        .module('blocJams')
        .controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
})();