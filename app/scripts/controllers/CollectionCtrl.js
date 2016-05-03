(function() {
    function CollectionCtrl($scope, Fixtures) {
        this.albums = Fixtures.getCollection(12);
    }
    
    angular
        .module('blocJams')
        .controller('CollectionCtrl', ['$scope', 'Fixtures', CollectionCtrl]);
})();