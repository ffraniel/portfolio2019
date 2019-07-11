const ProductsHeadline = () => {
  return (
    <section className="products-headline">
      <h1>headline here</h1>
      <p>The packaging mimics a promo kit from 1969: photo contact sheets and headshots of Bowie and Hutch, a few stapled pages of “typewritten” liner notes. But as with the other Bowie demo sets, it can’t shake looking like a cynical bid for the fan wallet.</p>
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
