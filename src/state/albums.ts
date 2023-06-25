import { atom, selector } from "recoil"
import { AlbumEntry } from "../models/api/albums"

const localStorageEffect =
    (key: string) =>
    ({ setSelf, onSet }: any) => {
        const savedValue = localStorage.getItem(key)
        if (savedValue != null) {
            setSelf(JSON.parse(savedValue))
        }

        onSet((newValue: any, _: any, isReset: any) => {
            isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue))
        })
    }

export const albumsState = atom<AlbumEntry[]>({
    key: "albumsState",
    default: [],
})

export const albumsQueryState = atom({
    key: "albumsQueryState",
    default: "",
})

export const favAlbumsIdState = atom<string[]>({
    key: "favAlbumsIdState",
    default: [],
    effects: [localStorageEffect("favAlbumsIdState")],
})

export const filteredAlbumsState = selector({
    key: "filteredAlbumsState",
    get: ({ get }) => {
        const albums = get(albumsState)
        const query = get(albumsQueryState)

        return albums.filter(album => album.title.label.toLowerCase().includes(query))
    },
})
