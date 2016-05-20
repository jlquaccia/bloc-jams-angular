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
                title: 'The Chronic',
                artist: 'Dr. Dre',
                label: 'Death Row Studios',
                year: '1992',
                albumArtUrl: '/assets/images/artist_album_covers/the_chronic.jpg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'The Chronic (Intro)', duration: '1:58', audioUrl: '/assets/music/albums/the_chronic/01 The Chronic (Intro)', songScore: 0 },
                    { title: 'Fuck wit Dre Day (And Everybody\'s Celebratin\')', duration: '4:52', audioUrl: '/assets/music/albums/the_chronic/02 Fuck wit Dre Day (And Everybody\'s Celebratin\')', songScore: 0 },
                    { title: 'Let Me Ride', duration: '4:21', audioUrl: '/assets/music/albums/the_chronic/03 Let Me Ride', songScore: 0 },
                    { title: 'The Day the Niggaz Took Over', duration: '4:33', audioUrl: '/assets/music/albums/the_chronic/04 The Day the Niggaz Took Over', songScore: 0 },
                    { title: 'Nuthin\' but a \"G\" Thang', duration: '3:58', audioUrl: '/assets/music/albums/the_chronic/05 Nuthin\' but a _G_ Thang', songScore: 0 },
                    { title: 'Deeez Nuuuts', duration: '5:06', audioUrl: '/assets/music/albums/the_chronic/06 Deeez Nuuuts', songScore: 0 },
                    { title: 'Lil\' Ghetto Boy', duration: '5:29', audioUrl: '/assets/music/albums/the_chronic/07 Lil\' Ghetto Boy', songScore: 0 },
                    { title: 'A Nigga witta Gun', duration: '3:52', audioUrl: '/assets/music/albums/the_chronic/08 A Nigga witta Gun', songScore: 0 },
                    { title: 'Rat-Tat-Tat-Tat', duration: '3:49', audioUrl: '/assets/music/albums/the_chronic/09 Rat-Tat-Tat-Tat', songScore: 0 },
                    { title: 'The $20 Sack Pyramid', duration: '2:53', audioUrl: '/assets/music/albums/the_chronic/10 The $20 Sack Pyramid', songScore: 0 }
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
                title: 'Genesis Series',
                artist: 'ZHU',
                label: 'Columbia Records, a Division of Sony Music Entertainment',
                year: '2015',
                albumArtUrl: '/assets/images/artist_album_covers/genesis_series.jpeg',
                artistScore: 0,
                albumScore: 0,
                songs: [
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