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
                    { title: 'Plastic Soldiers', duration: '5:04', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/evil_friends/01+Plastic+Soldiers.m4a', songScore: 0, artist: 'Portugal. The Man' },
                    { title: 'Creep in a T-Shirt', duration: '3:53', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/evil_friends/02+Creep+In+a+T-Shirt.m4a', songScore: 0, artist: 'Portugal. The Man' },
                    { title: 'Evil Friends', duration: '3:35', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/evil_friends/03+Evil+Friends.m4a', songScore: 0, artist: 'Portugal. The Man' },
                    { title: 'Modern Jesus', duration: '3:14', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/evil_friends/04+Modern+Jesus.m4a', songScore: 0, artist: 'Portugal. The Man' },
                    { title: 'Hip Hop Kids', duration: '3:28', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/evil_friends/05+Hip+Hop+Kids.m4a', songScore: 0, artist: 'Portugal. The Man' },
                    { title: 'Atomic Man', duration: '3:47', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/evil_friends/06+Atomic+Man.m4a', songScore: 0, artist: 'Portugal. The Man' },
                    { title: 'Sea of Air', duration: '4:22', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/evil_friends/07+Sea+of+Air.m4a', songScore: 0, artist: 'Portugal. The Man' },
                    { title: 'Waves', duration: '4:51', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/evil_friends/08+Waves.m4a', songScore: 0, artist: 'Portugal. The Man' },
                    { title: 'Holy Roller (Hallelujah)', duration: '3:21', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/evil_friends/09+Holy+Roller+(Hallelujah).m4a', songScore: 0, artist: 'Portugal. The Man' },
                    { title: 'Someday Believers', duration: '3:53', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/evil_friends/10+Someday+Believers.m4a', songScore: 0, artist: 'Portugal. The Man' },
                    { title: 'Purple Yellow Red and Blue', duration: '4:10', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/evil_friends/11+Purple+Yellow+Red+and+Blue.m4a', songScore: 0, artist: 'Portugal. The Man' },
                    { title: 'Smile', duration: '4:51', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/evil_friends/12+Smile.m4a', songScore: 0, artist: 'Portugal. The Man' }
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
                    { title: 'Son Et Lumière', duration: '1:35', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/deloused_in_the_comatorium/01+Son+Et+Lumie%CC%80re.m4a', songScore: 0, artist: 'The Mars Volta' },
                    { title: 'Inertiatic ESP', duration: '4:24', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/deloused_in_the_comatorium/02+Inertiatic+ESP.m4a', songScore: 0, artist: 'The Mars Volta' },
                    { title: 'Roulette Dares (The Haunt Of)', duration: '7:31', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/deloused_in_the_comatorium/03+Roulette+Dares+(The+Haunt+Of).m4a', songScore: 0, artist: 'The Mars Volta' },
                    { title: 'Tira Me A Las Aranas', duration: '1:29', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/deloused_in_the_comatorium/04+Tira+Me+A+Las+Aranas.m4a', songScore: 0, artist: 'The Mars Volta' },
                    { title: 'Drunkship of Lanterns', duration: '7:06', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/deloused_in_the_comatorium/05+Drunkship+of+Lanterns.m4a', songScore: 0, artist: 'The Mars Volta' },
                    { title: 'Eriatarka', duration: '6:20', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/deloused_in_the_comatorium/06+Eriatarka.m4a', songScore: 0, artist: 'The Mars Volta' },
                    { title: 'Cicatriz ESP', duration: '12:29', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/deloused_in_the_comatorium/07+Cicatriz+ESP.m4a', songScore: 0, artist: 'The Mars Volta' },
                    { title: 'This Apparatus Must Be Unearthed', duration: '4:58', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/deloused_in_the_comatorium/08+This+Apparatus+Must+Be+Unearthed.m4a', songScore: 0, artist: 'The Mars Volta' },
                    { title: 'Televators', duration: '6:19', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/deloused_in_the_comatorium/09+Televators.m4a', songScore: 0, artist: 'The Mars Volta' },
                    { title: 'Take the Veil Cerpin Taxt', duration: '8:42', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/deloused_in_the_comatorium/10+Take+the+Veil+Cerpin+Taxt.m4a', songScore: 0, artist: 'The Mars Volta' }
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
                title: 'Purple Rain (Soundtrack from the Motion Picture)',
                artist: 'Prince & The Revolution',
                label: 'Warner Bros. Records',
                year: '1984',
                albumArtUrl: '/assets/images/artist_album_covers/Purple Rain (Soundtrack from the Motion Picture).jpg',
                artistScore: 0,
                albumScore: 0,
                songs: [
                    { title: 'Let\'s Go Crazy', duration: '4:40', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/purple_rain/01+Let%27s+Go+Crazy.m4a', songScore: 0, artist: 'Prince & The Revolution' },
                    { title: 'Take Me With U', duration: '3:54', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/purple_rain/02+Take+Me+With+U.m4a', songScore: 0, artist: 'Prince & The Revolution' },
                    { title: 'The Beautiful Ones', duration: '5:14', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/purple_rain/03+The+Beautiful+Ones.m4a', songScore: 0, artist: 'Prince & The Revolution' },
                    { title: 'Computer Blue', duration: '4:00', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/purple_rain/04+Computer+Blue.m4a', songScore: 0, artist: 'Prince & The Revolution' },
                    { title: 'Darling Nikki', duration: '4:14', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/purple_rain/05+Darling+Nikki.m4a', songScore: 0, artist: 'Prince & The Revolution' },
                    { title: 'When Doves Cry', duration: '5:53', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/purple_rain/06+When+Doves+Cry.m4a', songScore: 0, artist: 'Prince & The Revolution' },
                    { title: 'I Would Die 4 U', duration: '2:59', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/purple_rain/07+I+Would+Die+4+U.m4a', songScore: 0, artist: 'Prince & The Revolution' },
                    { title: 'Baby I\'m a Star', duration: '4:24', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/purple_rain/08+Baby+I%27m+a+Star.m4a', songScore: 0, artist: 'Prince & The Revolution' },
                    { title: 'Purple Rain', duration: '8:42', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/purple_rain/09+Purple+Rain.m4a', songScore: 0, artist: 'Prince & The Revolution' }
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
                    { title: 'The Chronic (Intro)', duration: '1:58', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/01+The+Chronic+(Intro).m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'Fuck wit Dre Day (And Everybody\'s Celebratin\')', duration: '4:52', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/02+Fuck+wit+Dre+Day+(And+Everybody%27s+Celebratin%27).m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'Let Me Ride', duration: '4:21', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/03+Let+Me+Ride.m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'The Day the Niggaz Took Over', duration: '4:33', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/04+The+Day+the+Niggaz+Took+Over.m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'Nuthin\' but a \"G\" Thang', duration: '3:58', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/05+Nuthin%27+but+a+_G_+Thang.m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'Deeez Nuuuts', duration: '5:06', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/06+Deeez+Nuuuts.m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'Lil\' Ghetto Boy', duration: '5:29', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/07+Lil%27+Ghetto+Boy.m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'A Nigga witta Gun', duration: '3:52', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/08+A+Nigga+witta+Gun.m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'Rat-Tat-Tat-Tat', duration: '3:49', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/09+Rat-Tat-Tat-Tat.m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'The $20 Sack Pyramid', duration: '2:53', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/10+The+%2420+Sack+Pyramid.m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'Lyrical Gangbang', duration: '4:04', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/11+Lyrical+Gangbang.m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'High Powered', duration: '2:44', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/12+High+Powered.m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'The Doctor\'s Office', duration: '1:04', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/13+The+Doctor%27s+Office.m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'Stranded on Death Row', duration: '4:47', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/14+Stranded+on+Death+Row.m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'The Roach (The Chronic Outro)', duration: '4:37', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/15+The+Roach+(The+Chronic+Outro).m4a', songScore: 0, artist: 'Dr. Dre'},
                    { title: 'Bitches Ain\'t Shit', duration: '4:49', audioUrl: 'https://s3-us-west-1.amazonaws.com/bloc-jams/the_chronic/16+Bitches+Ain%27t+Shit.m4a', songScore: 0, artist: 'Dr. Dre'}
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