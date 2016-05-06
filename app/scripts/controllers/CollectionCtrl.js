(function() {
    function CollectionCtrl($scope, $rootScope, $location, $firebaseAuth, Fixtures) {
        this.albums = Fixtures.getCollection();
        
        var firebaseObj = new Firebase("https://jq-bloc-jams.firebaseIO.com");
        var loginObj = $firebaseAuth(firebaseObj);
        
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
        
        $scope.query = '';
        $scope.queryBy = '$';
    }
    
    angular
        .module('blocJams')
        .controller('CollectionCtrl', ['$scope', '$rootScope', '$location', '$firebaseAuth', 'Fixtures', CollectionCtrl]);
})();