export const data = {
    playlists: [
        {
            playlistInfo: {
                id: '1-0',
                title: 'Hip-Hop Hits',
                coverImageUrl: './img/cardImage/Image1.jpeg',
                tracksCount: 4,
            },
            tracks: [
                {
                    trackId: '1',
                    artistName: 'Eminem',
                    trackTitle: 'Rap God',
                    isHot: true,
                    trackFileUrl: './audio/Eminem - Rap God.mp3',
                    trackCoverImgUrl: './img/cardImage/trackList/track1.jpeg',
                },
                {
                    trackId: '2',
                    artistName: '50 cent',
                    trackTitle: 'In da Club',
                    isHot: false,
                    trackFileUrl: './audio/50 cent - In da Club.mp3',
                    trackCoverImgUrl: './img/cardImage/trackList/track2.jpeg',
                }
            ]
        },
        {
            playlistInfo: {
                id: '1-1',
                title: 'Rap Hits 1990s',
                coverImageUrl: './img/cardImage/Image2.jpeg',
                tracksCount: 4,
            },
            tracks: [
                {
                    trackId: '5',
                    artistName: 'Public Enemy',
                    trackTitle: 'Fight The Power',
                    isHot: true,
                    trackFileUrl: './audio/Public Enemy - Fight The Power.mp3',
                    trackCoverImgUrl: './img/cardImage/trackList/track5.jpeg',
                },
                {
                    trackId: '6',
                    artistName: 'Vanila Ice',
                    trackTitle: 'Ice Ice Baby',
                    isHot: false,
                    trackFileUrl: './audio/Vanila Ice - Ice Ice Baby.mp3',
                    trackCoverImgUrl: './img/cardImage/trackList/track6.jpeg',
                }
            ]
        }
    ]
}