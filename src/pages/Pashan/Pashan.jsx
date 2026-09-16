import PashanNavbar from './PashanNavbar'
import PashanHero from './PashanHero'
import PashanAbout from './PashanAbout'
import PashanRooms from './PashanRooms'
import PashanAmenities from './PashanAmenities'
import PashanGallery from './PashanGallery'
import PashanContact from './PashanContact'
import PashanFooter from './PashanFooter'
import PashanLocation from './PashanLocation'

function Pashan() {
  return (
    <div>

      {/* PROPERTY NAVBAR */}
      <PashanNavbar />

      {/* HERO */}
      <section id="home">
        <PashanHero />
      </section>

      {/* ABOUT THIS PROPERTY */}
      <section id="about">
        <PashanAbout />
      </section>

      {/* AVAILABLE ROOM TYPES */}
      <section id="rooms">
        <PashanRooms />
      </section>

      {/* PROPERTY AMENITIES */}
      <section id="amenities">
        <PashanAmenities />
      </section>

      {/* PROPERTY GALLERY */}
      <section id="gallery">
        // <PashanGallery />
      </section>

      {/* LOCATION */}
      <section id="location">
        <PashanLocation />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <PashanContact />
      </section>

      <PashanFooter />

    </div>
  )
}

export default Pashan