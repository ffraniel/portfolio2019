import Link from 'next/link';

const Jumbo = () => (
  <section className="jumbo">
    <h2>JUMBOTRON</h2>
    <Link href={"/products"} as={"/products"} >
      <button>Get Your Website Now!</button>
    </Link>
    <style jsx>{`
      .jumbo {
        text-align: center;
        color: var(-main-text-colour);
        padding: 120px 0;
        background-color: #9bada4;
        text-shadow: var(--text-shadow);
      }
      button {
        border: none;
        border-radius: var(--soft-radius);
        padding: var(--button-padding);
        box-shadow: var(--shadow-small);
        background-color: white;
      }
    `}</style>
  </section>
);

export default Jumbo;