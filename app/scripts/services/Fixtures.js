(function() {
    function Fixtures() {
        var Fixtures = {};
        
        var music = [
            {
                title: 'The Colors',
                artist: 'Pablo Picasso',
                label: 'Cubism',
                year: '1881',
                albumArtUrl: '/assets/images/album_covers/01.png',
                songs: [
                    { title: 'Blue', duration: '4:30', audioUrl: '/assets/music/Fuel' },
                    { title: 'Green', duration: '8:36', audioUrl: '/assets/music/Master Of Puppets' },
                    { title: 'Red', duration: '6:37', audioUrl: '/assets/music/Ride The Lightning' },
                    { title: 'Pink', duration: '6:27', audioUrl: '/assets/music/The Unforgiven' },
                    { title: 'Magenta', duration: '4:59', audioUrl: '/assets/music/witj' }
                ]
            },
            
            {
                title: 'The Telephone',
                artist: 'Guglielmo Marconi',
                label: 'EM',
                year: '1909',
                albumArtUrl: '/assets/images/album_covers/20.png',
                songs: [
                    { title: 'Hello, Operator?', duration: '1:01' },
                    { title: 'Ring, Ring, Ring', duration: '5:01' },
                    { title: 'Fits in Your Pocket', duration: '3:21' },
                    { title: 'Can You Hear Me Now?', duration: '3:14' },
                    { title: 'Wrong Phone Number', duration: '2:15' }
                ]
            }
        ];
        
        Fixtures.getAlbum = function() {
            return music;
        };
        
        Fixtures.getCollection = function() {
            this.albums = [];
            for (var i = 0; i < music.length; i++) {
                this.albums.push(music[i]);
            }
            
            return this.albums;
        };
        
        return Fixtures;
    }
    
    angular
        .module('blocJams')
        .factory('Fixtures', Fixtures);
})();