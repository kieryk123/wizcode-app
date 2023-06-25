import { render, screen } from "@testing-library/react"
import { AlbumsItem } from "../components"
import { RecoilRoot } from "recoil"

describe("<AlbumsItem />", () => {
    beforeEach(() => {
        render(
            <RecoilRoot>
                <AlbumsItem
                    key={"mock key"}
                    id={"mock id"}
                    title={"mock title"}
                    author={"mock author"}
                    coverUrl={"mock cover url"}
                />
            </RecoilRoot>
        )
    })
    it("displays properly", () => {
        expect(screen.getByText("mock title")).toBeInTheDocument()
        expect(screen.getByText("mock author")).toBeInTheDocument()
    })
})
