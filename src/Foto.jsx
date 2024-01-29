import Sitename from "./components/Sitename"
import FotoGallery from "./components/FotoGallery"

function Foto() {
    return <main>
    <Sitename title={"FOTO"}/>
    <section className="image-section">
        <FotoGallery/>
    </section>
</main>
}

export default Foto