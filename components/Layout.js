import Header from './Header';
import Footer from './Footer';

const layoutStyle = {
  
};

const Layout = props => (
  <section style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
    <style jsx global>{`
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
        --text-shadow: 1px 1px 3px #424344;
        --button-padding: 10px 20px;
        --header-footer-margin: 5px;
        --section-padding: 120px 0;
        --bd: solid red 2px;
      }

    `}</style>
  </section>
);

export default Layout;