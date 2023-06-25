import { render, screen } from "@testing-library/react"
import { AlbumsList } from "../components"
import { RecoilRoot } from "recoil"

describe("<AlbumsList />", () => {
    it("displays properly", () => {
        render(
            <RecoilRoot>
                <AlbumsList albums={[]} error={null} isLoading={false} />
            </RecoilRoot>
        )
        expect(screen.getByRole("list")).toBeInTheDocument()
    })

    it("shows error properly", () => {
        render(
            <RecoilRoot>
                <AlbumsList albums={[]} error={"mocked error msg"} isLoading={false} />
            </RecoilRoot>
        )
        expect(screen.getByText("mocked error msg")).toBeInTheDocument()
    })

    it("shows loader properly", () => {
        render(
            <RecoilRoot>
                <AlbumsList albums={[]} error={null} isLoading={true} />
            </RecoilRoot>
        )
        expect(screen.getByText("Loading albums...")).toBeInTheDocument()
    })
})
