import "./styles.css";

import Link from "../../components/Link";

const Introduction = () => {
  return (
    <section className="intro-section">
      <div className="intro-container row">
        <p className="intro-subtitle">We are Give you the Best</p>
        <h1 className="intro-title">IT Product</h1>
        <p className="intro-subtitle">in the Shortest Time</p>
        <div className="intro-actions">
          <Link link="/" text="About us" variant="secondary" />
          <Link link="/" text="Fale Conosco" />
        </div>
      </div>
      <iframe
        className="intro-section-video"
        title="evo-intro"
        src="https://www.youtube.com/embed/iB02s-PCo68?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=iB02s-PCo68&showinfo=0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="intro-section-overlay" />
    </section>
  )
}

export default Introduction;