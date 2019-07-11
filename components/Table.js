const Table = () => (
  <section className="table">
    <section className="headings">
      <section className="product-row">
        <h5></h5>
      </section>
      <section>
        <h5>Pages</h5>
      </section>
      <section>
        <h5>Designs</h5>
      </section>
      <section>
        <h5>Login System</h5>
      </section>
      <section>
        <h5>Editable By Owner</h5>
      </section>
      <section>
        <h5>SEO</h5>
      </section>
      <section>
        <h5>Managed Hosting</h5>
      </section>
      <section>
        <h5>Hosting Price - maintenance and support</h5>
      </section>
      <section>
        <h5>Monitoring</h5>
      </section>
      <section>
        <h5>Bug Fixes</h5>
      </section>
      <section>
        <h5>Retainer</h5>
      </section>
      <section>
        <h5>Revisions post launch</h5>
      </section>
      <section>
        <h5>Email Campaigns Systems</h5>
      </section>
      <section>
        <h5>Google Adwords Integration</h5>
      </section>
      <section>
        <h5>Materials/Content Cost</h5>
      </section>
    </section>
    <section className="columns">
    <section className="product-row">
        <h5>small site</h5>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
    </section>
    <section className="columns">
    <section className="product-row">
        <h5>medium site</h5>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
    </section>
    <section className="columns">
    <section className="product-row">
        <h5>large site</h5>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
      <section>
        <h6>x</h6>
      </section>
    </section>
    <section className="columns details-column">
    <section className="product-row">
        <h5></h5>
      </section>
      <section>
        <p></p>
      </section>
      <section>
        <p>Design is about more than what looks cool, it's the user experience (UX) and whether your users finds your site intuitive to use. You can leave this entirely to us or be involved.</p>
      </section>
      <section>
        <p></p>
      </section>
      <section>
        <p></p>
      </section>
      <section>
        <p>Search Engine Optimisation - so your site appears high in Google search results. We would never release your site into the wild without implementing SEO best practices throughout.</p>
      </section>
      <section>
        <p>Always: in web development there will always be bugs. Thankfully they are usually small and resolveable. We use a system of services to watch for any errors the human eye may miss in order to maintain quality throughout.</p>
      </section>
      <section>
        <p>For updates to content, design changes or to help you achieve your SEO goals</p>
      </section>
      <section>
        <p>Keep up to date with how much traffic you are recieving</p>
      </section>
      <section>
        <p>Ultimately you need to be happy with the website you receive.</p>
      </section>
      <section>
        <p></p>
      </section>
      <section>
        <p></p>
      </section>
      <section>
        <p>If we need to purchase some stock photography this will be agreed as and when required unless we are providing the content</p>
      </section>
      <section>
        <p></p>
      </section>
      <section>
        <p>x</p>
      </section>
    </section>
    <style jsx>{`
    .table {
      padding: var(--half-section-padding);
      display: grid;
      grid-template-columns: minmax(auto, 300px) repeat(3, 150px) minmax(300px, auto);
      max-width: 80%;
      margin: 0 auto;
      color: var(--main-text-colour);
      font-family: var(--main-font);
    }
    .headings {
      border: solid red 1px;
    }
    .headings section {
      text-align: center;
    }
    .columns {
      border: solid green 1px;
      text-align: center;
    }
    .headings section, .columns section {
      height: 100px;
      border: 0.25px black solid;
    }
    .details-column p {
      font-size: 14px;
      padding: 2px 30px;
    }
    .product-row {
    }


    `}</style>
  </section>
);

export default Table;