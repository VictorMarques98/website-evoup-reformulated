import "./styles.css";

const Clients = () => {
  return (
    <section className="clients-section">
      <div className="clients-container row">
        <div className="clients-text-container">
          <h2>Algumas empresas que confiaram na evo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam
            quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec
          </p>
        </div>
        <ul className="clients-list">
          <li className="clients-list-item">
            <p>We have the technology and industry expertise to develop solutions that can connect people and businesses across a variety of mobile devices.</p>
            <h5>Client 1</h5>
          </li>
          <li className="clients-list-item">
            <p>We have the technology and industry expertise to develop solutions that can connect people and businesses across a variety of mobile devices.</p>
            <h5>Client 1</h5>
          </li>
          <li className="clients-list-item">
            <p>We have the technology and industry expertise to develop solutions that can connect people and businesses across a variety of mobile devices.</p>
            <h5>Client 1</h5>
          </li>
        </ul>
      </div>
    </section>
  )
};

export default Clients;