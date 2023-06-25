import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { AlbumsView } from "../views"

describe("<AlbumsItem />", () => {
    beforeEach(() => {
        render(
            <RecoilRoot>
                <AlbumsView />
            </RecoilRoot>
        )
    })
    it("displays properly", () => {
        expect(screen.getByText("Top 100 music albums")).toBeInTheDocument()
    })
})
