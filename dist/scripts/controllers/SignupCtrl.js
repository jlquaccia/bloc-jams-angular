(function() {
    function SignupCtrl($scope, $firebaseAuth) {
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
                        }, function(error) {
                            // do things if failure
                            console.log(error);
                        });
                }
            }
        };
    }
    
    angular.module('blocJams')
        .controller('SignupCtrl', ['$scope', '$firebaseAuth', SignupCtrl]);
})();