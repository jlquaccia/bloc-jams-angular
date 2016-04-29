(function() {
    function LoginCtrl($scope, $firebaseSimpleLogin) {
        $scope.SignIn = function(e) {
            e.preventDefault();
            var username = $scope.user.email;
            var password = $scope.user.password;
            
            loginObj.$login('password', {
                email: username,
                password: password
            })
            .then(function(user) {
                // Success callback
                console.log('Authentication Successful');
            }, function(error) {
                // Failure callback
                console.log('Authentication Failure');
            });
        };
        
        var firebaseObj = new Firebase("https://jq-bloc-jams.firebaseIO.com");
        var loginObj = $firebaseSimpleLogin(firebaseObj);
    }
    
    angular.module('blocJams')
        .controller('LoginCtrl', ['$scope', '$firebaseSimpleLogin', LoginCtrl]);
})();