import "./styles.css";

const Summary = () => {
  return (
    <section className="sum-intro">
      <div className="row">
        <ul className="sum-container">
          <li className="sum-service-container">
            <div className="sum-services-icon">
              <span>01</span>
              <span />
            </div>
            <div className="sum-services-content">
              <h4>Product Engineering</h4>
              <span>Whether bringing new amazing products and services to market, or discovering new ways to make mature products.</span>
            </div>
          </li>
          <li className="sum-service-container">
            <div className="sum-services-icon">
              <span>02</span>
              <span />
            </div>
            <div className="sum-services-content">
              <h4>Product Engineering</h4>
              <span>Whether bringing new amazing products and services to market, or discovering new ways to make mature products.</span>
            </div>
          </li>
          <li className="sum-service-container">
            <div className="sum-services-icon">
              <span>03</span>
              <span />
            </div>
            <div className="sum-services-content">
              <h4>Product Engineering</h4>
              <span>Whether bringing new amazing products and services to market, or discovering new ways to make mature products.</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
};

export default Summary;