(function() {
    function LoginCtrl($scope, $location, UserInfo, $firebaseAuth) {
        $scope.SignIn = function(e) {
            e.preventDefault();
            var username = $scope.user.email;
            var password = $scope.user.password;
            
            loginObj.$authWithPassword({
                email: username,
                password: password
            })
            .then(function(user) {
                // Success callback
                console.log('Authentication Successful');
                $location.path('/collection');
                UserInfo.setUser(user.password.email);
            }, function(error) {
                // Failure callback
                console.log('Authentication Failure');
            });
        };
        
        var firebaseObj = new Firebase("https://jq-bloc-jams.firebaseIO.com");
        var loginObj = $firebaseAuth(firebaseObj);
    }
    
    angular.module('blocJams')
        .controller('LoginCtrl', ['$scope', '$location', 'UserInfo', '$firebaseAuth', LoginCtrl]);
})();