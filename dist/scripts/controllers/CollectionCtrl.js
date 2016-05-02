(function() {
    function CollectionCtrl($scope, Fixtures, UserInfo) {
        this.albums = Fixtures.getCollection(12);
        $scope.username = UserInfo.getUser();
    }
    
    angular
        .module('blocJams')
        .controller('CollectionCtrl', ['$scope', 'Fixtures', 'UserInfo', CollectionCtrl]);
})();