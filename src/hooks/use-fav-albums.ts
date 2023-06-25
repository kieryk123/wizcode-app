import { useRecoilState } from "recoil"
import { favAlbumsIdState } from "../state/albums"

export const useFavAlbums = () => {
    const [favAlbumsId, setFavAlbumsId] = useRecoilState(favAlbumsIdState)

    const add = (id: string) => {
        const newFavAlbumsId = [...favAlbumsId, id]
        setFavAlbumsId(newFavAlbumsId)
    }

    const remove = (id: string) => {
        const newFavAlbumsId = [...favAlbumsId.filter(albumId => albumId !== id)]
        setFavAlbumsId(newFavAlbumsId)
    }

    const toggleFavAlbum = (id: string) => {
        if (favAlbumsId.includes(id)) {
            remove(id)
        } else {
            add(id)
        }
    }

    const checkIsAlbumFav = (id: string) => {
        return favAlbumsId.includes(id)
    }

    return { toggleFavAlbum, favAlbumsId, checkIsAlbumFav }
}
