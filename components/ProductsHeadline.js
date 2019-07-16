const ProductsHeadline = () => {
  return (
    <section className="products-headline">
      <h1>Products and Services</h1>
      <p>We offer three primary products, Simple, Regular and Mighty. They all have their own baseline lists of features. However, we are entirely flexible and treat each project as unique. Think of these lists as a jumping-off point to helpus get closer to creating a web presence that suits your business.</p>
      <style jsx>{`
        .products-headline {
          text-align: center;
          color: var(--main-text-colour);
          font-family: var(--main-font);
          padding: var(--half-section-padding);
        }
        .products-headline h1 {
          transform: translate(-150px, 0);
          text-align: center;
        }
        .products-headline p {
          transform: translate(450px, 0);
          width: 40%;
        }
      `}</style>
    </section>
  );
}

export default ProductsHeadline;
