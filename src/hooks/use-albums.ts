import { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { getTopAlbums } from "../services/albums.service"
import { albumsState, filteredAlbumsState } from "../state/albums"
import { getErrorMessage } from "../common/utils"

export const useAlbums = () => {
    const [, setAlbums] = useRecoilState(albumsState)
    const albums = useRecoilValue(filteredAlbumsState)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getTopAlbums()
                setAlbums(response.feed?.entry || [])
            } catch (error) {
                setError(getErrorMessage(error))
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [setAlbums])

    return { albums, error, isLoading }
}
