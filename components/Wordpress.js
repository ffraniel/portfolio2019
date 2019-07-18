const Wordpress = () => (
  <section className="wordpress eighty">
    <section className="wordpress-image-container">
      <img src="static/ecommerce-image.jpg" alt="ecommerce site on a laptop screen" />
    </section>
    <section className="eighty">
      <h2>Do You Use Wordpress?</h2>
      <p>We can, have and will. However, and this is crucial, we will only use Wordpress where it is the best tool for the job. Are you regularly updating the site? Do you need your team to be able to use Wordpress's interface to update your site? Then sure.</p> 
      <p>However, for a static site or a web application WP introduces a lot of overhead that has the potential to be a risk to your business, not to mention the perfomance issues. The faster your site the less custom you lose.</p>
    </section>

    <style jsx>{`
      .wordpress {
        color: var(--main-text-colour);
        font-family: var(--main-font);
        padding: var(--half-section-padding);
        background-color: var(--alt-background-colour);
        color: var(--alt-text-colour);
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .wordpress p {}
      .wordpress-image-container {
        text-align: center;
  
      }
      .wordpress-image-container img {
        width: 400px;
        padding: 50px;
      }
    `}</style>
  </section>
);

export default Wordpress;