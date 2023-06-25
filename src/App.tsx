import React from "react"
import { RecoilRoot } from "recoil"
import { AlbumsView } from "./views"

function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <RecoilRoot>
                <main className="flex flex-col items-center p-5">
                    <AlbumsView />
                </main>
            </RecoilRoot>
        </React.Suspense>
    )
}

export default App
