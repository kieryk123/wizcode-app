import { GetAlbumsResponse } from "../models/api/albums"
import { ApiEndpoints } from "../models/endpoints"
import apiClient from "./api-client.service"

export function getTopAlbums() {
    return apiClient.get<GetAlbumsResponse>(ApiEndpoints.TopAlbums).then(
        res => res.data,
        () => {
            throw new Error("An error ocurred while fetching the data.")
        }
    )
}
