import Link from 'next/link';

const Jumbo = () => (
  <section className="jumbo">
    <h2>You Need a Great Website</h2>
    <h3 className="brand-name">Sinclairs and Sons</h3>
    <h5>Websites, Web Apps and Online</h5>
    <Link href={"/products"} as={"/products"} >
      <button className="basic-button">Start Choosing Now!</button>
    </Link>
    <style jsx>{`
      .jumbo {
        font-family: var(--main-font);
        text-align: center;
        color: var(-main-text-colour);
        color: #ebf5ec;
        padding: var(--section-padding);
        background-color: #3ff59a;
      }
      h2 {
        font-size: 2rem;
      }
      .brand-name {
        
      }
    `}</style>
  </section>
);

export default Jumbo;