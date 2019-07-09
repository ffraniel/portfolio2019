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
        --link-colour-main: red;
        --link-hover-bck-main: purple;
        --main-font: Arial;
      }

    `}</style>
  </section>
);

export default Layout;