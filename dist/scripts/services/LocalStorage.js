(function() {
    function LocalStorage() {
        var STORAGE_ID = 'currentPlaylist',
            factory = {};
        
        factory.get = function() {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        };
        
        factory.put = function(currentPlaylist) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(currentPlaylist));
        };
        
        return factory;
    }
    
    angular
        .module('blocJams')
        .factory('LocalStorage', LocalStorage);
})();