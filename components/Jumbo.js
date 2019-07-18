import Link from 'next/link';

const Jumbo = () => (
  <section className="jumbo">
    <h1>You Need a Great Website</h1>
    <h3 className="brand-name">Fran The Web Dev</h3>
    <h5 className="about">Websites, Web Apps and Online</h5>
    <Link href={"/products"} as={"/products"} >
      <button className="basic-button">Start Choosing Now!</button>
    </Link>
    <style jsx>{`
      .jumbo {
        font-family: var(--main-font);
        text-align: center;
        color: var(-main-text-colour);
        color: #ebf5ec;
        padding: var(--double-section-padding);
        background-color: #3ff59a;
        background: url('static/testgreen.jpg');
      }
      h1 {
        font-size: 2rem;
        display: inline-block;
        border-bottom: solid #f5f0f0 3px;
        padding: 10px 0px;
        border-radius: var(--soft-radius);
        margin: 10px;
      }
      .brand-name {
        font-size: 3rem;
        margin: 20px;
      }
      .about {
        font-family: var(--secondary-font);
      }
    `}</style>
  </section>
);

export default Jumbo;