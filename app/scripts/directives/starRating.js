(function() {
    function starRating() {
        return {
            templateUrl: '/templates/directives/star_rating.html',
            restrict: 'AE',
            scope: {
                score: '=score',
                max: '=max',
                type: '=type',
                name: '=name'
            },
            link: function(scope, elem, attrs) {
                
                scope.starClass = function(star, idx) {
                    var starClass = 'fa-star-o';
                    
                    if (star.full || idx <= scope.hoverIdx) {
                        starClass = 'fa-star';
                    }
                    
                    return starClass;
                };
     
                scope.setRating = function(idx) {
                    scope.score = idx + 1;
                };
                
                scope.hover = function(idx) {
                    scope.hoverIdx = idx;
                };
                
                scope.stopHover = function() {
                    scope.hoverIdx = -1;
                };
                
                scope.starColor = function(idx) {
                    var starClass = 'rating-normal';
                    
                    if (idx <= scope.hoverIdx) {
                        starClass = 'rating-highlight';
                    }
                    
                    return starClass;
                };
            },
            controller: 'StarRatingCtrl'
                
        };
    }
    
    angular
        .module('blocJams')
        .directive('starRating', [starRating]);
})();