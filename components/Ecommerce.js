const Ecommerce = () => (
  <section className="ecommerce">
    <section className="eighty">
      <h2>Ecommerce</h2>
      <p>For artists or others who will sell a small range of products or services we can build custom bespoke services. This allows us to keep costs down for you the customer though require a little more upfront developement.</p>
      <p>For larger businesses with considerable itenaries we use Shopify, a tested and true service used by thousands of major eccomerce businessses.</p>
      <p>With Shopify we ask that you pay the Shopify platform cost of £79 per month and we work on your site within the service</p>
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