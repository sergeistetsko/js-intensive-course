const data = {
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

function App() {
    const container = document.createElement('div')
    container.classList.add('App')

    container.append(
        Header(),
        Main()
    )

    return container
}

// -----------------------------------------------------

function Header() {
    const header = document.createElement('header')

    const headerContainer = document.createElement('div')
    headerContainer.classList.add('header-container')

    const headerImage = document.createElement('img')
    headerImage.src = './img/logo/logo.svg'

    const headerLogo = document.createElement('div')
    headerLogo.innerText = 'InPlayer'
    headerLogo.classList.add('logo-name')

    headerContainer.append(
        headerImage,
        headerLogo
    )
    header.append(headerContainer)

    return header
}

// -----------------------------------------------------

function Main() {
    const container = document.createElement('main')

    container.append(
        AddPlaylistPanel(),
        Playlists()
    )

    return container
}

// -----------------------------------------------------

function AddPlaylistPanel() {
    const container = document.createElement('div')
    container.classList.add('add-playlist-panel')

    const appHeader = document.createElement('h1')
    appHeader.innerText = 'My playlists'
    appHeader.classList.add('title')

    const addButton = document.createElement('button')
    addButton.innerText = 'Add Playlist'
    addButton.classList.add('button')

    container.append(
        appHeader,
        addButton
    )

    return container
}

// -----------------------------------------------------

function Playlists() {
    const container = document.createElement('div')
    container.classList.add('playlists')

    for (let i = 0; i < data.playlists.length; i++) {
        container.append(Playlist(data.playlists[i]))
        
    }
    return container
}

// -----------------------------------------------------

function Playlist(playlist) {
    const container = document.createElement('article')
    container.classList.add('playlist')
    container.append(
        PlaylistInfo(playlist.playlistInfo),
        Tracklist(playlist.tracks)
    )
    return container
}

// -----------------------------------------------------

function PlaylistInfo(playlistInfo) {
    const container = document.createElement('div')
    container.classList.add('playlist-info')

    const img = document.createElement('img')
    img.classList.add('playlist-cover-image')
    img.src = playlistInfo.coverImageUrl

    const wrapper = document.createElement('div')

    const title = document.createElement('h2')
    title.classList.add('title')
    title.innerText = playlistInfo.title

    const tracksCount = document.createElement('div')
    tracksCount.classList.add('tracks-count')
    tracksCount.innerText = playlistInfo.tracksCount + ' tracks'

    wrapper.append(
        title,
        tracksCount
    )

    container.append(
        img,
        wrapper,
        ButtonsEditDelete()
    )

    return container
}

// -----------------------------------------------------

function Tracklist(tracks) {
    const container = document.createElement('div')
    container.classList.add('tracklist')

    container.append(
        AddTrackPanel(),
        List(tracks)
    )

    return container
}

// -----------------------------------------------------

function AddTrackPanel() {
    const container = document.createElement('div')
    container.classList.add('add-track-panel')

    const title = document.createElement('h3')
    title.innerText = 'Tracks'
    title.classList.add('tracklist-title')

    const addTrackButton = document.createElement('button')
    addTrackButton.classList.add('button-add-track')

    const addTrackButtonImg = document.createElement('img')
    addTrackButtonImg.src = './img/icons/add.svg'

    addTrackButton.append(
        addTrackButtonImg,
        'Add Track'
    )

    container.append(
        title,
        addTrackButton
    )

    return container
}

// -----------------------------------------------------

function List(tracks) {
    const container = document.createElement('ul')
    container.classList.add('list')

    for (let i = 0; i < tracks.length; i++) {
        container.append(Track(tracks[i]))
    }

    return container
}
 
// -----------------------------------------------------

function Track(track) {
    const container = document.createElement('li')
    container.classList.add('track-element')

    const trackCoverImg = document.createElement('img')
    trackCoverImg.classList.add('track-cover-image')
    trackCoverImg.src = track.trackCoverImgUrl

    container.append(
        trackCoverImg,
        TrackDetails(track)
    )

    return container
}

// -----------------------------------------------------

function TrackDetails(track) {
    const container = document.createElement('div')
    container.classList.add('track-details')

    const audio = document.createElement('audio')
    audio.src = track.trackFileUrl
    audio.controls = true

    container.append(
        TrackTopLine(track),
        audio
    )

    return container
}
// -----------------------------------------------------

function TrackTopLine(track) {
    const container = document.createElement('div')
    container.classList.add('track-top-line')

    if (track.isHot) {
        const trackHotImg = document.createElement('img')
        trackHotImg.classList.add('track-status')
        trackHotImg.src = './img/icons/hot.svg'
        
        container.append(trackHotImg)
    }

    const trackInfo = document.createElement('div')
    trackInfo.classList.add('track-info')

    const trackName = document.createElement('div')
    trackName.classList.add('track-name')
    trackName.innerText = track.artistName + ' - ' + track.trackTitle
    trackInfo.append(
        trackName,
        ButtonsEditDelete()
    )

    container.append(trackInfo)

    return container
}

// -----------------------------------------------------

function ButtonsEditDelete() {
    const buttonsContainer = document.createElement('div')
    buttonsContainer.classList.add('buttons-container')

    const editBtn = document.createElement('button')
    const editBtnImg = document.createElement('img')
    editBtnImg.src = './img/icons/edit.svg'
    editBtn.append(editBtnImg)

    const delBtn = document.createElement('button')
    const delBtnImg = document.createElement('img')
    delBtnImg.src = './img/icons/basket.svg'
    delBtn.append(editBtnImg)

    buttonsContainer.append(
        editBtn,
        delBtn
    )

    return buttonsContainer
}

// -----------------------------------------------------

const root = document.getElementById('root')
root.append(
    App() // => container
)