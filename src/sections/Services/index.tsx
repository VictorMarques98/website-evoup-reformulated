import "./styles.css";

const Services = () => {
  return (
    <>
    <section className="services-section">
      <div className="row">
        <h2>Nossos serviços</h2>
        <ul className="services-container">
          <li className="service-container">
            <div className="service-icon">
              <span>01</span>
            </div>
            <div className="service-content">
              <h4>Product Engineering</h4>
              <span>Whether bringing new amazing products and services to market, or discovering new ways to make mature products.</span>
            </div>
          </li>
          <li className="service-container">
            <div className="service-icon">
              <span>01</span>
            </div>
            <div className="service-content">
              <h4>Product Engineering</h4>
              <span>Whether bringing new amazing products and services to market, or discovering new ways to make mature products.</span>
            </div>
          </li>
          <li className="service-container">
            <div className="service-icon">
              <span>01</span>
            </div>
            <div className="service-content">
              <h4>Product Engineering</h4>
              <span>Whether bringing new amazing products and services to market, or discovering new ways to make mature products.</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </>
  );
};

export default Services;