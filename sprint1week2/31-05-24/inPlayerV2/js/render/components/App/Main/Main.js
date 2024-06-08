import { AddPlaylistPanel } from './AddPlaylistPanel/AddPlaylistPanel.js'
import { Playlists } from './Playlists/Playlists.js'

export function Main(someData) {
    const container = document.createElement('main')

    container.append(
        AddPlaylistPanel(),
        Playlists(someData)
    )

    return container
}