import { useRecoilState } from "recoil"
import { AlbumsList } from "../components"
import { useAlbums } from "../hooks/use-albums"
import { albumsQueryState } from "../state/albums"

export const AlbumsView = () => {
    const { albums, error, isLoading } = useAlbums()
    const [albumsQuery, setAlbumsQuery] = useRecoilState(albumsQueryState)

    return (
        <section className="max-w-xl w-full">
            <header>
                <h1 className="text-3xl font-bold text-center">Top 100 music albums</h1>
                <input
                    name="search"
                    type="search"
                    placeholder="Type something..."
                    value={albumsQuery}
                    onChange={e => setAlbumsQuery(e.currentTarget.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-3 my-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </header>
            <AlbumsList albums={albums} error={error} isLoading={isLoading} />
        </section>
    )
}
