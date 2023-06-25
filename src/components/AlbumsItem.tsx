import { useFavAlbums } from "../hooks/use-fav-albums"

interface AlbumsItemProps {
    id: string
    title: string
    author: string
    coverUrl: string
}

export const AlbumsItem = ({ title, author, coverUrl, id }: AlbumsItemProps) => {
    const { toggleFavAlbum, checkIsAlbumFav } = useFavAlbums()

    return (
        <li className="flex justify-between gap-x-6 py-5 max-w-full">
            <div className="flex gap-x-4 overflow-hidden">
                <img
                    className="h-55 w-55 flex-none rounded-full bg-gray-50"
                    alt=""
                    src={coverUrl}
                    loading="lazy"
                    height="55"
                    width="55"
                />
                <div className="flex flex-col flex-auto justify-center min-w-0 ">
                    <p className="text-sm font-semibold leading-6 text-gray-900 truncate overflow-hidden">{title}</p>
                    <p className="truncate text-xs leading-5 text-gray-500">{author}</p>
                </div>
            </div>
            <div className="sm:flex sm:flex-col sm:items-end self-center">
                <button onClick={() => toggleFavAlbum(id)}>
                    <svg
                        width="40px"
                        height="40px"
                        viewBox="0 0 24 24"
                        fill={checkIsAlbumFav(id) ? "yellow" : "none"}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M14.65 8.93274L12.4852 4.30901C12.2923 3.89699 11.7077 3.897 11.5148 4.30902L9.35002 8.93274L4.45559 9.68243C4.02435 9.74848 3.84827 10.2758 4.15292 10.5888L7.71225 14.2461L6.87774 19.3749C6.80571 19.8176 7.27445 20.1487 7.66601 19.9317L12 17.5299L16.334 19.9317C16.7256 20.1487 17.1943 19.8176 17.1223 19.3749L16.2878 14.2461L19.8471 10.5888C20.1517 10.2758 19.9756 9.74848 19.5444 9.68243L14.65 8.93274Z"
                                stroke="#464455"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </g>
                    </svg>
                </button>
            </div>
        </li>
    )
}
