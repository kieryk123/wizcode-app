import { useState, useEffect } from "react"
import { AlbumsItem } from "../components"
import { AlbumEntry } from "../models/api/albums"
import { getTopAlbums } from "../services/albums.service"

export const AlbumsView = () => {
    // TODO: change this after mock coding
    const [albums, setAlbums] = useState<AlbumEntry[] | undefined>([])
    useEffect(() => {
        async function fetchData() {
            const response = await getTopAlbums()
            setAlbums(response.feed.entry)
        }
        fetchData()
    }, [])

    return (
        <section className="max-w-xl">
            <header>
                <h1 className="text-3xl font-bold text-center">Top 100 music albums</h1>
                <input
                    name="search"
                    type="search"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-3 my-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </header>
            <ul>
                {albums?.map(album => (
                    <AlbumsItem
                        key={album.id.label}
                        title={album.title.label}
                        author={album["im:artist"].label}
                        coverUrl={album["im:image"].map(image => image.label)[0]}
                    />
                ))}
            </ul>
        </section>
    )
}
