import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = props => {
  const { headerTrigger } = props;

  const [headerSolid, setHeaderSolid] = useState(false);

  const checkPosition = () => {
    const trigger = headerTrigger;
    if (window.scrollY > trigger) {
      if(headerSolid !== true) {
        setHeaderSolid(true);
      };
    } else if (window.scrollY < trigger) {
        setHeaderSolid(false);
    };
  };

  const handleScroll = debounce(checkPosition, 300, { maxWait: 600 });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    checkPosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=DM+Sans|DM+Serif+Text&display=swap" rel="stylesheet"></link>
      </Head>
      <Header headerSolid={headerSolid} />
      {props.children}
      <Footer />
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: #fbfbf9;
          margin: 0;
          font-size: 18px;
        }
        :root {
          --link-colour-main: #ececec;
          --link-hover-bck-main: #4487ae;
          --main-font: 'DM Serif Text', serif;
          --secondary-font: 'DM Sans', sans-serif;
          // Arial;
          --shadow-small: 0 5px 10px rgba(0,0,0,0.12);
          --shadow-medium: 0 8px 30px rgba(0,0,0,0.12);
          --shadow-large: 0 30px 60px rgba(0,0,0,0.12);
          --header-background-colour-clear: rgba(0, 0, 0, 0);
          --header-background-colour: rgba(255, 220, 20, 0);
          --footer-background-colour: #bfa3bf;
          --main-text-colour: #484848;
          --soft-radius: 5px;
          --very-soft-radius: 2.5px;
          --text-shadow: 1px 1px 3px #424344;
          --button-padding: 10px 20px;
          --header-margin: 5px;
          --footer-margin: 5px 20px;
          --double-section-padding: 160px 0;
          --section-padding: 120px 0;
          --half-section-padding: 60px 0;
          --alt-background-colour: #868383;
          --alt-text-colour: white;
          --positive-green: #26ff9b;
          --bd: solid red 2px;
          --text-highlight: #ef5f4e;
          --big-lineheight: 40px;
          --small-lineheight: 30px;
        }
        .basic-button {
          padding: var(--button-padding);
          background-color: white;
          color: var(--main-text-colour);
          border-radius: var(--soft-radius);
          border: none;
          box-shadow: var(--shadow-small);
          font-size: 1rem;
          font-family: var(--secondary-font);
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
};

export default Layout;