(function() {
    function selectDropdown() {
        return {
            templateUrl: '/templates/directives/select_dropdown.html',
            restrict: 'E',
            link: function(scope, elem, attrs) {
            },
            controller: ["$scope", function($scope){
                
                $scope.queryByDisplay = "All";
                
                $scope.setQuery = function(value){
                    $scope.queryBy = value;
                    
                    switch(value){
                        case "$":
                            $scope.queryByDisplay = "All";
                        break;
                        case "songs":
                            $scope.queryByDisplay = "Song";
                        break;
                        case "artist":
                            $scope.queryByDisplay = "Artist";
                        break;
                        case "title":
                            $scope.queryByDisplay = "Album";
                        break;
                    }
                    
                }
            }]
        };
    }
    
    angular
        .module('blocJams')
        .directive('selectDropdown', selectDropdown);
})();