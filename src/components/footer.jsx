import React from 'react';

const Footer = () => {
  const getRandomEmail = () => {
    const domains = ['example.com', 'test.com', 'foo.com'];
    const randomIndex = Math.floor(Math.random() * domains.length);
    return `info@${domains[randomIndex]}`;
  };

  return (
   <footer>
      <div class="footer-container">
        <div class="logo">
          <img src="./Logo.jpeg" alt="Fantasy Hotel Logo"></img>
        </div>
        <div class="dev-info">
          <h2>Desarrolladores</h2>
          <ul>
            <li>Josttin Pérez</li>
            <li>Sebastián Rodriguez</li>
            <li>Andrea Domínguez</li>
            <li>Natalia Romerin</li>
            <li>Sebastián de la Rosa</li>
          </ul>
        </div>
        <div class="contact-info">
          <h2>Contactanos</h2>
          <ul>
            <li><i class="fab fa-whatsapp"></i> +1 (555) 555-5555</li>
            <li><i class="fab fa-facebook"></i> <a href="#">Fantasy Hotel</a></li>
            <li><i class="far fa-envelope"></i> <a href="mailto:info@fantasyhotel.com">info@fantasyhotel.com</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
