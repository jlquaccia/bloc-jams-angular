(function() {
    function CollectionCtrl($scope, $rootScope, $location, $firebaseAuth, Fixtures, SongPlayer, LocalStorage) {
        this.albums = Fixtures.getCollection();
        
        var firebaseObj = new Firebase("https://jq-bloc-jams.firebaseIO.com");
        var loginObj = $firebaseAuth(firebaseObj);
        
        this.songPlayer = SongPlayer;
        
        $rootScope.logout = function() {
            loginObj.$unauth();
            console.log('logged out');
            $location.path('/');
            $rootScope.userEmail = false;
            localStorage.removeItem('userEmail');
        };
        
        if (!$rootScope.userEmail) {
            $rootScope.userEmail = localStorage.getItem("userEmail");
        }
        
        if (!$rootScope.userEmail) {
            $location.path('/login');
        }
        
        $rootScope.currentPlaylist = LocalStorage.get();
        
        $scope.query = '';
        $scope.queryBy = '$';
        
        function matchSongTitles(album){
            for(i = 0; i < album.songs.length -1; i++){
                if (album.songs[i].title.toLowerCase().indexOf($scope.query.toLowerCase()) > -1) {
                    return true;
                }
            }

            return false;
        }
        
        $scope.gauchoQuery = function(){
            if($scope.queryBy == "songs"){
                return function(album){
                    return matchSongTitles(album);
                }
            } else if ($scope.queryBy == "artist") {
                return function(album){
                    var re = new RegExp($scope.query, 'i');
                    return !$scope.query || re.test(album.artist);
                }
            } else if ($scope.queryBy == "title") {
                return function(album) {
                    var re = new RegExp($scope.query, 'i');
                    return !$scope.query || re.test(album.title);
                }
            } else {
                return function(album) {
                    var re = new RegExp($scope.query, 'i');
                    return !$scope.query || re.test(album.artist) || re.test(album.title) || matchSongTitles(album);
                }
            }
        };
    }
    
    angular
        .module('blocJams')
        .controller('CollectionCtrl', ['$scope', '$rootScope', '$location', '$firebaseAuth', 'Fixtures', 'SongPlayer', 'LocalStorage', CollectionCtrl]);
})();