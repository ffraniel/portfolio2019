import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <section>
    <Header />
    {props.children}
    <Footer />
    <style jsx global>{`
      html {
        scroll-behavior: smooth;
      }
      body {
        background-color: #ffe9f9;
        margin: 0;
        font-size: 18px;
      }
      :root {
        --header-background-colour: yellow;
        --link-colour-main: #ececec;
        --link-hover-bck-main: purple;
        --main-font: Arial;
        --shadow-small: 0 5px 10px rgba(0,0,0,0.12);
        --shadow-medium: 0 8px 30px rgba(0,0,0,0.12);
        --shadow-large: 0 30px 60px rgba(0,0,0,0.12);
        --header-background-colour: #bfa3bf;
        --footer-background-colour: #bfa3bf;
        --main-text-colour: #484848;
        --soft-radius: 5px;
        --very-soft-radius: 2.5px;
        --text-shadow: 1px 1px 3px #424344;
        --button-padding: 10px 20px;
        --header-footer-margin: 5px;
        --section-padding: 120px 0;
        --half-section-padding: 60px 0;
        --alt-background-colour: #868383;
        --alt-text-colour: white;
        --bd: solid red 2px;
      }
      .basic-button {
        padding: var(--button-padding);
        background-color: white;
        color: var(--main-text-colour);
        border-radius: var(--soft-radius);
        border: none;
        box-shadow: var(--shadow-small);
        font-size: 1rem;
      }
      .eighty {
        width: 80%;
        margin: 0 auto;
      }
      .link-button {
        text-decoration: none;
      }
      .product-jumbo {
        padding: var(--section-padding);
        text-align: center;
      }
      .product-overview-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        padding: var(--half-section-padding);
      }
      .product-text p {
        text-align: left;
      }
      .product-overview-container section {
        padding: 0 20px;
      }
      .product-overview-container section {
        text-align: center;
      }
      .display-overlap-A {
        transform: translate(125px, 0) scale(1.75);
      }
      .display-overlap-B {
        transform: translate(-125px, 0) scale(1.1);
      }
      .product-overview-image img {
        border-radius: var(--very-soft-radius);
      }
      .product-overview-image img {
        width: 350px;
      }

    `}</style>
  </section>
);

export default Layout;