(function() {
    function SongPlayer($rootScope, Fixtures) {
        var SongPlayer = {};
        
        /**
         * @desc Stores an object containing the current album
         * @type {Object}
         */
        var currentAlbum;
        
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
                stopSong(song);
            }
            
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            
            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });
            
            currentBuzzObject.bind('ended', function() {
                SongPlayer.next();
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
            SongPlayer.currentSong.isMute = false;
        };
        
        /**
         * @function stopSong
         * @desc Stops the song that was clicked and sets the currently playing song to null
         * @param {Object} song
         */
        var stopSong = function(song) {
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
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
         * @function setAlbum
         * @desc Sets the current album
         * @param {Object} album
         */
        SongPlayer.setAlbum = function(album){
            currentAlbum = album;
            localStorage.setItem("currentAlbum", JSON.stringify(currentAlbum));
        }
        
        /**
         * @function currentAlbum
         * @desc Returns the current album
         * @param none
         */
        SongPlayer.currentAlbum = function(){
            return currentAlbum;
        }
        
        /**
         * @desc Song object that is currently in use
         * @type {Object}
         */
        SongPlayer.currentSong = null;
        
        /**
         * @desc Current playback time (in seconds) of currently playing song
         * @type {Number}
         */
        SongPlayer.currentTime = null;
        
        /**
         * @desc Current volume level
         * @type {Number}
         */
        SongPlayer.volume = null;
        
        /**
         * @function getSongDuration
         * @desc Retrieves the duration of the currently playing song
         * @param none
         */
        SongPlayer.getSongDuration = function() {
            if (currentBuzzObject === null) {
                return '';
            } else {
                return currentBuzzObject.getDuration();
            }
        };
        
        /**
         * @function play
         * @desc Decides whether to play a new song or pause the current one
         * @param {Object} song
         */
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong || currentAlbum.songs[0];
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
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };
        
        /**
         * @function previous
         * @desc Decrements the index of the current song by 1 in order to reach the previous song (if on first song will jump to last song)
         * @param none
         */
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0) {
                var song = currentAlbum.songs[currentAlbum.songs.length - 1];
                setSong(song);
                playSong(song);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        /**
         * @function next
         * @desc Increments the index of the current song by 1 in order to reach the next song (if on last song will jump to first song)
         * @param none
         */
        SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            
            if (currentSongIndex > currentAlbum.songs.length - 1) {
                var song = currentAlbum.songs[0];
                setSong(song);
                playSong(song);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        /**
         * @function setCurrentTime
         * @desc Set current time (in seconds) of currently playing song
         * @param {Number} time
         */
        SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
                currentBuzzObject.setTime(time);
            }
        };
        
        /**
         * @function setVolume
         * @desc Set current volume of the currently playing song
         * @param {Number} volume
         */
        SongPlayer.setVolume = function(volume) {
            if (currentBuzzObject) {
                currentBuzzObject.setVolume(volume);
            }
        };
        
        /**
         * @function muteSong
         * @desc If a song is currently playing, the audio will be muted
         * @param none
         */
        SongPlayer.muteSong = function() {
            if(currentBuzzObject) {
                currentBuzzObject.mute();
                SongPlayer.currentSong.isMute = true;
            }
        };
        
        /**
         * @function unmuteSong
         * @desc If a song is currently playing and is muted, the audio will be unmuted
         * @param none
         */
        SongPlayer.unmuteSong = function() {
            if(currentBuzzObject) {
                currentBuzzObject.unmute();
                SongPlayer.currentSong.isMute = false;
            }
        };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();