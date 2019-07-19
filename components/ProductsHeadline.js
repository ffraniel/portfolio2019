const ProductsHeadline = () => {
  return (
    <section className="products-headline">
      <h1>Products and Services</h1>
      <p>We offer three primary products, <span>Simple</span>, <span>Regular</span> and <span>Mighty</span>. They all have their own baseline lists of features. However, we are entirely flexible and treat each project as unique. Think of these lists as a jumping-off point to help us get closer to creating a web presence that suits your business.</p>
      <style jsx>{`
        .products-headline {
          text-align: center;
          color: var(--main-text-colour);
          font-family: var(--main-font);
          padding: var(--section-padding);
          padding-bottom: 40px;
        }
        .products-headline h1 {
          text-align: center;
        }
        .products-headline p {
          width: 460px;
          margin: auto;
          line-height: var(--big-lineheight);
        }
        .products-headline p span {
          color: var(--text-highlight);
        }
        @media screen and (max-width: 480px) {
          .products-headline p {
            width: 80%;
            line-height: var(--small-lineheight);
          }
        }
        
       
        `}</style>
    </section>
  );
}

export default ProductsHeadline;
