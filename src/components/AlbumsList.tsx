import { AlbumEntry } from "../models/api/albums"
import { AlbumsItem } from "./AlbumsItem"

interface AlbumsListProps {
    albums: AlbumEntry[] | undefined
    error: string | null
    isLoading: boolean
}

export const AlbumsList = ({ albums, error, isLoading }: AlbumsListProps) => {
    if (isLoading) {
        return <p>Loading albums...</p>
    }
    if (error) {
        return <p>{error}</p>
    }
    return (
        <ul>
            {albums?.map(album => (
                <AlbumsItem
                    key={album.id.attributes["im:id"]}
                    id={album.id.attributes["im:id"]}
                    title={album["im:name"].label}
                    author={album["im:artist"].label}
                    coverUrl={album["im:image"].map(image => image.label)[0]}
                />
            ))}
        </ul>
    )
}
