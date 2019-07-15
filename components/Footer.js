import Link from 'next/link';

const Footer = () => (
  <footer className="footer">
    
    <section className="icon-list">
      <a href="facebook.com">
        <img src="static/facebook48.png" alt="Facebook" />
      </a>
      <a href="twitter.com">
        <img src="static/twitter48.png" alt="Twitter" />
      </a>
      <a href="github.com">
        <img src="static/github48.png" alt="Github" />
      </a>
      <a href="instagram.com">
        <img src="static/instagram48.png" alt="Instagram" />
      </a>
    </section>
    <section className="contact-container">
      <h5 className="phone">Phone: 08771 746 863</h5>
      <h5 className="email">francis. whitehead@googlemail.com</h5>
    </section>
    <style jsx>{`
    .footer {
      width: 100%;
      background-color: #bfa3bf;
      display: flex;
      font-family: var(--main-font);
    }
    .contact-container {
      color: var(--main-text-colour);
      font-size: 1rem;
    }
    .contact-container, .icon-list {
      // border: solid red 2px;
      margin: auto;
    }
    .icon-list a {
      text-decoration: none;
      transition: background-color 0.25s;
      margin: var(--header-footer-margin);
      display: inline-block;
      }
    .icon-list a:hover {
      background: var(--link-hover-bck-main);
    }
    .icon-list a img {
      height: 30px;
    }
    `}</style>
  </footer>
);

export default Footer;