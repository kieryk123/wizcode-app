export interface GetAlbumsResponse {
    feed: Partial<Feed>
}

interface Feed {
    author: Author
    entry: AlbumEntry[]
    updated: Updated
    rights: Rights2
    title: Title2
    icon: Icon
    link: Link2[]
    id: Id2
}

interface Author {
    name: Name
    uri: Uri
}

interface Name {
    label: string
}

interface Uri {
    label: string
}

export interface AlbumEntry {
    "im:name": ImName
    "im:image": ImImage[]
    "im:itemCount": ImItemCount
    "im:price": ImPrice
    "im:contentType": ImContentType
    rights: Rights
    title: Title
    link: Link
    id: Id
    "im:artist": ImArtist
    category: Category
    "im:releaseDate": ImReleaseDate
}

interface ImName {
    label: string
}

interface ImImage {
    label: string
    attributes: Attributes
}

interface Attributes {
    height: string
}

interface ImItemCount {
    label: string
}

interface ImPrice {
    label: string
    attributes: Attributes2
}

interface Attributes2 {
    amount: string
    currency: string
}

interface ImContentType {
    "im:contentType": ImContentType2
    attributes: Attributes4
}

interface ImContentType2 {
    attributes: Attributes3
}

interface Attributes3 {
    term: string
    label: string
}

interface Attributes4 {
    term: string
    label: string
}

interface Rights {
    label: string
}

interface Title {
    label: string
}

interface Link {
    attributes: Attributes5
}

interface Attributes5 {
    rel: string
    type: string
    href: string
}

interface Id {
    label: string
    attributes: Attributes6
}

interface Attributes6 {
    "im:id": string
}

interface ImArtist {
    label: string
    attributes?: Attributes7
}

interface Attributes7 {
    href: string
}

interface Category {
    attributes: Attributes8
}

interface Attributes8 {
    "im:id": string
    term: string
    scheme: string
    label: string
}

interface ImReleaseDate {
    label: string
    attributes: Attributes9
}

interface Attributes9 {
    label: string
}

interface Updated {
    label: string
}

interface Rights2 {
    label: string
}

interface Title2 {
    label: string
}

interface Icon {
    label: string
}

interface Link2 {
    attributes: Attributes10
}

interface Attributes10 {
    rel: string
    type?: string
    href: string
}

interface Id2 {
    label: string
}
