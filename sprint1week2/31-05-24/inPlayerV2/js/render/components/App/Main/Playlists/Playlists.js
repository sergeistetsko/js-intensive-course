import { Playlist } from './Playlist/Playlist.js'

export function Playlists(someData) {
    const container = document.createElement('div')
    container.classList.add('playlists')

    for (let i = 0; i < someData.playlists.length; i++) {
        container.append(Playlist(someData.playlists[i]))
        
    }
    return container
}