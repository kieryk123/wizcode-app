interface AlbumsItemProps {
    title: string
    author: string
    coverUrl: string
}

export const AlbumsItem = ({ title, author, coverUrl }: AlbumsItemProps) => {
    return (
        <li className="flex justify-between gap-x-6 py-5 max-w-full">
            <div className="flex gap-x-4 max-w-full">
                <img
                    className="h-55 w-55 flex-none rounded-full bg-gray-50"
                    alt=""
                    src={coverUrl}
                    loading="lazy"
                    height="55"
                    width="55"
                />
                <div className="min-w-0 flex flex-col flex-auto justify-center">
                    <p className="text-sm font-semibold leading-6 text-gray-900 truncate overflow-hidden">{title}</p>
                    <p className="truncate text-xs leading-5 text-gray-500">{author}</p>
                </div>
            </div>
            {/* TODO: add favourite feature */}
            {/* <div className="sm:flex sm:flex-col sm:items-end">
                <button>add to fav</button>
            </div> */}
        </li>
    )
}
