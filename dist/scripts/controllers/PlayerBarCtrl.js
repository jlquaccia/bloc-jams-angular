(function() {
    function PlayerBarCtrl(Fixtures, SongPlayer) {
        this.albumData = SongPlayer.currentAlbum();
        this.songPlayer = SongPlayer;
    }
    
    angular
        .module('blocJams')
        .controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
})();