const Retainers = () => (
  <section className="retainer">
    <h2>Retainers</h2>
    <p>If you need to someone to manage your website we offer a retainer system. Maybe you want to purchase hours so we can manage updating the site to coincide with new product launches, for instance.</p>
    <h4>4 Hours £120 per month</h4>
    <h4>8 Hours £200 per month</h4>
    <h4>12 Hours £240 per month</h4>
    <p>All available in blocks of three months</p>  

    <style jsx>{`
      .retainer {
        color: var(--main-text-colour);
        font-family: var(--main-font);
        padding: var(--half-section-padding);
        text-align: center;
        max-width: 50%;
        margin: 0 auto;
      }
      .retainer h2 {}
      .retainer p {}
    `}</style>
  </section>
);

export default Retainers;