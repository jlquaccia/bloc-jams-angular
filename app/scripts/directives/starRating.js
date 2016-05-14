(function() {
    function starRating() {
        return {
            templateUrl: '/templates/directives/star_rating.html',
            restrict: 'AE',
            scope: {
                score: '=score',
                max: '=max'
            },
            link: function(scope, elem, attrs) {
                scope.updateStars = function() {
                    var idx = 0;
                    
                    scope.stars = [];
                    
                    for (idx = 0; idx < scope.max; idx++) {
                        scope.stars.push({
                            full: scope.score > idx
                        });
                    }
                };
                
                scope.starClass = function(star, idx) {
                    var starClass = 'fa-star-o';
                    
                    if (star.full || idx <= scope.hoverIdx) {
                        starClass = 'fa-star';
                    }
                    
                    return starClass;
                };
                
                scope.$watch('score', function(newValue, oldValue) {
                    if (newValue !== null && newValue !== undefined) {
                        scope.updateStars();
                    }
                });
                
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
            }
        };
    }
    
    angular
        .module('blocJams')
        .directive('starRating', starRating);
})();