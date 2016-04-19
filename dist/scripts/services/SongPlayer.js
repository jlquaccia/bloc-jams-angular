(function() {
    function SongPlayer(Fixtures) {
        var SongPlayer = {};
        
        /**
         * @desc Grabbing the current album being played by use of the getAlbum method from the Fixtures object
         * @type {Object}
         */
        var currentAlbum = Fixtures.getAlbum();
        
        /**
         * @desc Buzz object audio file
         * @type {Object}
         */
        var currentBuzzObject = null;
        
        /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
        var setSong = function(song) {
            if(currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }
            
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            
            SongPlayer.currentSong = song;
        };
        
        /**
         * @function playSong
         * @desc Plays the song that was clicked and sets the playing property to true
         * @param {Object} song
         */
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        };
        
        /**
         * @function getSongIndex
         * @desc A private function that will return the index of the current song
         * @param {Object} song
         */
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };
        
        /**
         * @desc Song object that is currently in use
         * @type {Object}
         */
        SongPlayer.currentSong = null;
        
        /**
         * @function play
         * @desc Decides whether to play a new song or pause the current one
         * @param {Object} song
         */
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }
        };
        
        /**
         * @function pause
         * @desc Pauses the song that was clicked and sets the playing property to false
         * @param {Object} song
         */
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong
            currentBuzzObject.pause();
            song.playing = false;
        };
        
        /**
         * @function previous
         * @desc Decrements the index of the current song by 1 in order to reach the previous song
         * @param none
         */
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();