const Ecommerce = () => (
  <section className="ecommerce">
    <section className="eighty">
      <h2>Eccomerce Section about</h2>
      <p>Songs fall in a few categories. There are two covers, with prominent Hutchinson vocals: “Life Is a Circus,” written by Roger Bunn, and Lesley Duncan’s “Love Song,” which paid far more dividends for Duncan (a Bowie intimate and fellow UFO enthusiast) when Elton John covered it on Tumbleweed Connection. “She’s very underrated,” Bowie notes before the take.</p>
    </section>
    <section className="ecommerce-image-container">
      <img src="static/ecommerce-image.jpg" alt="ecommerce site on a laptop screen" />
    </section>

    <style jsx>{`
      .ecommerce {
        color: var(--main-text-colour);
        font-family: var(--main-font);
        padding: var(--half-section-padding);
        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .ecommerce h2 {
        grid-column: 1/-1;
      }
      .ecommerce p {}
      .ecommerce-image-container {
        text-align: center;
      }
      .ecommerce-image-container img {
        width: 400px;
      }
    `}</style>
  </section>
);

export default Ecommerce;