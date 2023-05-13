import "./styles.css";

import Link from "../../components/Link";

const Partnership = () => {
  return (
    <section className="partnership-section">
      <div className="partnership-container row">
        <div className="partnership-text">
          <h2 className="partnership-title">We are google partner</h2>
          <p className="partnership-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam
            quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec
            nisi turpis, iaculis et arcu a, aliquet ultrices nisl. Nam in
            pharetra odio, ac blandit metus. Suspendisse potenti. Praesent
            elementum diam non orci cursus rutrum. Pellentesque condimentum
          </p>
          <Link link="/" text="Fale Conosco" variant="secondary" />
        </div>
        <img
          className="partnership-image"
          src="https://i0.wp.com/mydelsu.com/wp-content/uploads/2023/03/Google-Partner.jpg?fit=900%2C900&ssl=1"
          alt="Google partner"
        />
      </div>
    </section>
  )
};

export default Partnership;