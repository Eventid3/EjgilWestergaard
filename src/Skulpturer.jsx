import ImageGallery from "./components/ImageGallery"
import Sitename from "./components/Sitename"

function Skulpturer(){
    return <main>
        <Sitename title={"SKULPTURER"}/>
        <section className="image-section">
            <ImageGallery/>
        </section>
    </main>
}

export default Skulpturer