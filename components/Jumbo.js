import Link from 'next/link';

const Jumbo = () => (
  <section className="jumbo">
    <h2>JUMBOTRON</h2>
    <Link href={"/products"} as={"/products"} >
      <button className="basic-button">Get Your Website Now!</button>
    </Link>
    <style jsx>{`
      .jumbo {
        font-family: var(--main-font);
        text-align: center;
        color: var(-main-text-colour);
        padding: var(--section-padding);
        background-color: #9bada4;
        text-shadow: var(--text-shadow);
      }
    `}</style>
  </section>
);

export default Jumbo;