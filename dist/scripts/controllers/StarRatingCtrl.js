(function() {
    function StarRatingCtrl($scope, $firebaseObject){        
        var ratingRef = new Firebase("https://jq-bloc-jams.firebaseIO.com/ratings" + "/" + $scope.type);
        
        $firebaseObject(ratingRef).$loaded(function(data){
            $scope.starRatings = data
            $scope.score = $scope.starRatings[$scope.name];
        });
        
        $scope.updateStars = function() {
            var idx = 0;

            $scope.stars = [];

            for (idx = 0; idx < $scope.max; idx++) {
                $scope.stars.push({
                    full: $scope.score > idx
                });
            }
        };

        $scope.$watch('score', function(newValue, oldValue) {
            if (newValue !== null && newValue !== undefined) {
                key = $scope.name
                value = newValue
                $scope.updateStars();
                
                if($scope.starRatings){
                    $scope.starRatings[key] = value;
                    $scope.starRatings.$save()
                }
            }
        });
    }
    
    angular
        .module('blocJams')
        .controller('StarRatingCtrl', ['$scope', '$firebaseObject', StarRatingCtrl]);
})();