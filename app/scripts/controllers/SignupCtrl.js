(function() {
    function SignupCtrl($scope, $location, $firebaseAuth, $rootScope) {
        var firebaseObj = new Firebase("https://jq-bloc-jams.firebaseIO.com");
        var auth = $firebaseAuth(firebaseObj);
        
        $scope.signUp = function() {
            if (!$scope.regForm.$invalid) {
                var email = $scope.user.email;
                var password = $scope.user.password;
                
                if (email && password) {
                    auth.$createUser(email, password)
                        .then(function() {
                            // do things if success
                            console.log('User creation success');
                            $rootScope.userEmail = email;
                            $location.path('/collection');
                            localStorage.setItem("userEmail", $rootScope.userEmail);
                        }, function(error) {
                            // do things if failure
                            console.log(error);
                            $scope.regError = true;
                            $scope.regErrorMessage = error.message;
                        });
                }
            }
        };
    }
    
    angular.module('blocJams')
        .controller('SignupCtrl', ['$scope', '$location', '$firebaseAuth', '$rootScope', SignupCtrl]);
})();