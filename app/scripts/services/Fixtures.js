(function() {
    function Fixtures() {
        var Fixtures = {};
        
        var music = [
            {
                title: 'Evil Friends',
                artist: 'Portugal. The Man',
                label: 'Atlantic Recording Corporation for the United States and WEA International Inc. for the world outside of the United States',
                year: '2013',
                albumArtUrl: '/assets/images/artist_album_covers/evil_friends.jpeg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'Blue', duration: '4:30', audioUrl: '/assets/music/Fuel', songScore: 0 },
                    { title: 'Green', duration: '8:36', audioUrl: '/assets/music/Master Of Puppets', songScore: 0 },
                    { title: 'Red', duration: '6:37', audioUrl: '/assets/music/Ride The Lightning', songScore: 0 },
                    { title: 'Pink', duration: '6:27', audioUrl: '/assets/music/The Unforgiven', songScore: 0 },
                    { title: 'Magenta', duration: '4:59', audioUrl: '/assets/music/witj', songScore: 0 },
                    { title: 'Blue', duration: '4:30', audioUrl: '/assets/music/Fuel', songScore: 0 },
                    { title: 'Green', duration: '8:36', audioUrl: '/assets/music/Master Of Puppets', songScore: 0 },
                    { title: 'Red', duration: '6:37', audioUrl: '/assets/music/Ride The Lightning', songScore: 0 },
                    { title: 'Pink', duration: '6:27', audioUrl: '/assets/music/The Unforgiven', songScore: 0 },
                    { title: 'Magenta', duration: '4:59', audioUrl: '/assets/music/witj', songScore: 0 },
                    { title: 'Pink', duration: '6:27', audioUrl: '/assets/music/The Unforgiven', songScore: 0 },
                    { title: 'Magenta', duration: '4:59', audioUrl: '/assets/music/witj', songScore: 0 }
                ]
            },
            
            {
                title: 'Deloused in the Comatorium',
                artist: 'The Mars Volta',
                label: 'The Mars Volta Licensed Exclusively to Universal Records, a Division of UMG Recordings, Inc.',
                year: '2003',
                albumArtUrl: '/assets/images/artist_album_covers/deloused_in_the_comatorium.jpeg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'Pink', duration: '6:27', audioUrl: '/assets/music/The Unforgiven', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 }
                ]
            },
            
            {
                title: 'Ride the Lightning',
                artist: 'Metallica',
                label: 'Blackened Recordings',
                year: '1984',
                albumArtUrl: '/assets/images/artist_album_covers/ride_the_lightning.jpeg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 }
                ]
            },
            
            {
                title: 'Junip',
                artist: 'Junip',
                label: 'Teme Shet under exclusive license to Mute for North America',
                year: '2013',
                albumArtUrl: '/assets/images/artist_album_covers/junip.jpeg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 }
                ]
            },
            
            {
                title: 'Relativity 3',
                artist: 'Lemaitre',
                label: 'Substellar Records',
                year: '2013',
                albumArtUrl: '/assets/images/artist_album_covers/relativity_3.jpeg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 }
                ]
            },
            
            {
                title: 'SBTRKT',
                artist: 'SBTRKT',
                label: 'Young Turks',
                year: '2011',
                albumArtUrl: '/assets/images/artist_album_covers/sbtrkt.jpeg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 }
                ]
            },
            
            {
                title: 'The Best of Talking Heads',
                artist: 'Talking Heads',
                label: 'Warner Bros. Manufactured by Warner Strategic Marketing',
                year: '2004',
                albumArtUrl: '/assets/images/artist_album_covers/the_best_of_talking_heads.jpeg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 }
                ]
            },
            
            {
                title: 'Nocturne',
                artist: 'Wild Nothing',
                label: 'Captured Tracks',
                year: '2012',
                albumArtUrl: '/assets/images/artist_album_covers/nocturne.jpeg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 }
                ]
            },
            
            {
                title: 'good kid, m.A.A.d city',
                artist: 'Kendrick Lamar',
                label: 'Aftermath/Interscope Records',
                year: '2013',
                albumArtUrl: '/assets/images/artist_album_covers/good kid, m.A.A.d city.jpeg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 }
                ]
            },
            
            {
                title: 'Discovery',
                artist: 'Daft Punk',
                label: 'Daft Life under exclusive license to Parlophone Records Ltd./Parlophone Music, a division of Parlophone Music France',
                year: '2001',
                albumArtUrl: '/assets/images/artist_album_covers/discovery.jpeg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 }
                ]
            },
            
            {
                title: 'Peace Love Death Metal',
                artist: 'Eagles of Death Metal',
                label: 'Ant Acid Audio',
                year: '2004',
                albumArtUrl: '/assets/images/artist_album_covers/peace_love_death_metal.jpeg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 }
                ]
            },
            
            {
                title: 'The Seshen',
                artist: 'The Seshen',
                label: 'The Seshen',
                year: '2012',
                albumArtUrl: '/assets/images/artist_album_covers/the_seshen.jpeg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Hello, Operator?', duration: '1:01', songScore: 0 },
                    { title: 'Ring, Ring, Ring', duration: '5:01', songScore: 0 },
                    { title: 'Fits in Your Pocket', duration: '3:21', songScore: 0 },
                    { title: 'Can You Hear Me Now?', duration: '3:14', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 },
                    { title: 'Wrong Phone Number', duration: '2:15', songScore: 0 }
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