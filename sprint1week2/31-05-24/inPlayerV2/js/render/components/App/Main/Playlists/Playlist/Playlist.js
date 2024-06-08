import { PlaylistInfo } from './PlaylistInfo/PlaylistInfo.js'
import { Tracklist } from './Tracklist/Tracklist.js'

export function Playlist(somePlaylist) {

    const { playlistInfo, tracks } = somePlaylist

    const container = document.createElement('article')
    container.classList.add('playlist')
    container.append(
        PlaylistInfo(playlistInfo),
        Tracklist(tracks)
    )
    return container
}