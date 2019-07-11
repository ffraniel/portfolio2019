const Wordpress = () => (
  <section className="wordpress">
    <section className="wordpress-image-container eighty">
      <img src="static/ecommerce-image.jpg" alt="ecommerce site on a laptop screen" />
    </section>
    <section className="eighty">
      <h2>section about wordpress</h2>
      <p>Other songs fall in a few categories. There are two covers, with prominent Hutchinson vocals: “Life Is a Circus,” written by Roger Bunn, and Lesley Duncan’s “Love Song,” which paid far more dividends for Duncan (a Bowie intimate and fellow UFO enthusiast) when Elton John covered it on Tumbleweed Connection. “She’s very underrated,” Bowie notes before the take.</p>
    </section>

    <style jsx>{`
      .wordpress {
        color: var(--main-text-colour);
        font-family: var(--main-font);
        padding: var(--half-section-padding);
        background-color: var(--alt-background-colour);
        color: var(--alt-text-colour);
      }
      .wordpress p {}
      .wordpress-image-container {
        text-align: center;
  
      }
      .wordpress-image-container img {
        width: 400px;
      }
    `}</style>
  </section>
);

export default Wordpress;