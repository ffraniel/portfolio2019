import Link from 'next/link';

const Table = () => (
  <section>
    <section className="mobile-table">
      <h1 className="table-mob-title">Choose Your Plan</h1>
      <section className="mobile-product-box">
        <h3 className="mob-title">Simple</h3>
        <h6 className="mob-price">Starting from £400</h6>
        <section className="mob-details-box">
          <h6>1 - 5 Pages</h6>
          <h6>Template-based Designs</h6>
          <h6>Full SEO coverage</h6>
          <h6>Managed Hosting - £30 per Month</h6>
          <h6>Social Media Integration - £50 per integration</h6>
          <h6>Traffic Monitoring £40 per Month</h6>
          <h6>Bug Fixes</h6>
          <h6>4 Hours Free Revisions PostLaunch</h6>
          <h6>Retainers Available</h6>
          <section className="link-button-container mobile-link-container">
            <Link href="/simple" as="/simple">
              <button className="basic-button button-spacer">Choose Simple</button>
            </Link>
          </section>
        </section>
      </section>
      <section className="mobile-product-box">
        <h3 className="mob-title">Regular</h3>
        <h6 className="mob-price">Starting from £700</h6>
        <section className="mob-details-box">
          <h6>6 - 10 Pages</h6>
          <h6>Bespoke Designs</h6>
          <h6>Full SEO coverage</h6>
          <h6>Managed Hosting - £60 per Month</h6>
          <h6>Social Media Integration - £50 per integration</h6>
          <h6>Traffic Monitoring £40 per Month</h6>
          <h6>Bug Fixes</h6>
          <h6>4 Hours Free Revisions Post Launch</h6>
          <h6>Retainers Available</h6>
          <section className="link-button-container mobile-link-container">
            <Link href="/regular" as="/regular">
              <button className="basic-button button-spacer">Choose Regular</button>
            </Link>
          </section>
        </section>
      </section>
      <section className="mobile-product-box">
        <h3 className="mob-title">Simple</h3>
        <h6 className="mob-price">Starting from £1000</h6>
        <section className="mob-details-box">
          <h6>11+</h6>
          <h6>Bespoke Designs</h6>
          <h6>Full SEO coverage</h6>
          <h6>Managed Hosting - £60 per Month</h6>
          <h6>Social Media Integration - £50 per integration</h6>
          <h6>Traffic Monitoring £40 per Month</h6>
          <h6>Bug Fixes</h6>
          <h6>4 Hours Free Revisions Post Launch</h6>
          <h6>Retainers Available</h6>
          <section className="link-button-container mobile-link-container">
            <Link href="/mighty" as="/mighty">
              <button className="basic-button button-spacer">Choose Mighty</button>
            </Link>
          </section>
        </section>
      </section>
    </section>
    <section className="table">
      <section className="headings">
        <section className="product-column">
          <h5></h5>
        </section>
        <section>
          <h5>Pages</h5>
        </section>
        <section>
          <h5>Designs</h5>
        </section>
        <section>
          <h5>SEO</h5>
        </section>
        <section>
          <h5>Managed Hosting</h5>
        </section>
        <section>
          <h5>Hosting Maintenance</h5>
        </section>
        <section>
          <h5>Social Media Integration (Twitter, Instagram etc.)</h5>
        </section>
        <section>
          <h5>Monitoring</h5>
        </section>
        <section>
          <h5>Bug Fixes</h5>
        </section>
        <section>
          <h5>Revisions post launch</h5>
        </section>
        <section>
          <h5>Retainer</h5>
        </section>
      </section>
      <section className="columns site-option-column">
        <section className="product-column">
          <h5>Simple</h5>
        </section>
        <section>
          <h6>1-5</h6>
        </section>
        <section>
          <h6>-</h6>
        </section>
        <section>
          <h6><img src="static/tick.png" alt="tick" /></h6>
        </section>
        <section>
          <h6><img src="static/tick.png" alt="tick" /></h6>
        </section>
        <section>
          <h6>£30 p/month</h6>
        </section>
        <section>
          <h6>£50</h6>
        </section>
        <section>
          <h6>x</h6>
        </section>
        <section>
          <h6><img src="static/tick.png" alt="tick" /></h6>
        </section>
        <section>
          <h6>4 hours of revisions free</h6>
        </section>
        <section>
          <h6>Available</h6>
        </section>
        <Link href="/simple" as="/simple">
            <button className="basic-button button-spacer">Choose Simple</button>
          </Link>
      </section>
      <section className="columns site-option-column">
        <section className="product-column">
          <h5>Regular</h5>
        </section>
        <section>
          <h6>6-10</h6>
        </section>
        <section>
          <h6>Bespoke Design</h6>
        </section>
        <section>
          <h6><img src="static/tick.png" alt="tick" /></h6>
        </section>
        <section>
          <h6><img src="static/tick.png" alt="tick" /></h6>
        </section>
        <section>
          <h6>£60 p/month</h6>
        </section>
        <section>
          <h6>£50</h6>
        </section>
        <section>
          <h6>£40 p/month</h6>
        </section>
        <section>
          <h6><img src="static/tick.png" alt="tick" /></h6>
        </section>
        <section>
          <h6>Four hours of revisions free</h6>
        </section>
        <section>
          <h6>Available</h6>
        </section>
        <section className="link-button-container">
          <Link href="/regular" as="/regular">
            <button className="basic-button button-spacer">Choose Regular</button>
          </Link>
        </section>
      </section>
      <section className="columns site-option-column">
        <section className="product-column">
          <h5>Mighty</h5>
        </section>
        <section>
          <h6>11+</h6>
        </section>
        <section>
          <h6>Bespoke Design</h6>
        </section>
        <section>
          <h6><img src="static/tick.png" alt="tick" /></h6>
        </section>
        <section>
          <h6><img src="static/tick.png" alt="tick" /></h6>
        </section>
        <section>
          <h6>£60 p/month</h6>
        </section>
        <section>
          <h6>£50</h6>
        </section>
        <section>
          <h6>£40 p/month</h6>
        </section>
        <section>
          <h6><img src="static/tick.png" alt="tick" /></h6>
        </section>
        <section>
          <h6>4 hours of revisions free</h6>
        </section>
        <section>
          <h6>Available</h6>
        </section>
        <section className="link-button-container">
          <Link href="/mighty" as="/mighty">
            <button className="basic-button button-spacer">Choose Mighty</button>
          </Link>
        </section>
      </section>
      <section className="columns details-column">
        <section className="product-column">
          <h5></h5>
        </section>
        <section className="hide-on-mid-size">
          <p></p>
        </section>
        <section>
          <span className="details-heading">Design</span>
          <p>Design is about more than what looks cool, it's the user experience (UX) and whether your users finds your site intuitive to use. You can leave this entirely to us or be involved.</p>
        </section>
        <section>
          <span className="details-heading">SEO</span>
          <p>Search Engine Optimisation - so your site appears high in Google search results. We would never release your site into the wild without implementing SEO best practices throughout.</p>
        </section>
        <section className="hide-on-mid-size">
          <p></p>
        </section>
        <section className="hide-on-mid-size">
          <p></p>
        </section>
        <section>
          <span className="details-heading">Social Media Integration</span>
          <p>Per Integration</p>
        </section>
        <section>
          <span className="details-heading">Monitoring</span>
          <p>Keep up to date with how much traffic you are recieving</p>
        </section>
        <section>
          <span className="details-heading">Bug Fixes</span>
          <p>Always: in web development there will always be bugs. We use a system of services to watch for any errors the human eye may miss in order to maintain quality throughout.</p>
        </section>
        <section>
          <span className="details-heading">Revisions Post-Launch</span>
          <p>For updates to content, design changes or to help you achieve your SEO goals</p>
        </section>
        <section>
          <span className="details-heading">Retainers Available</span>
          <p>Ultimately you need to be happy with the website you receive. If you need further work after these hours are used we have a retainer service available.</p>
        </section>
      </section>
    </section>
    <style jsx>{`
    .mobile-table {
      display: none;
    }
    .table {
      padding: var(--half-section-padding);
      display: grid;
      grid-template-columns: minmax(100px, 200px) repeat(3, 150px) minmax(200px, auto);
      grid-gap: 10px;
      max-width: 80%;
      margin: 0 auto;
      color: var(--main-text-colour);
      font-family: var(--main-font);
    }
    .details-heading {
      display: none;
    }
    .headings section {
      text-align: center;
    }
    .columns {
      text-align: center;
    }
    .headings section, .columns section {
      min-height: 80px;
      border-bottom: 0.5px #847f8126 solid;
      border-top: 0.25px #ffffff00 solid;
    }
    .details-column p {
      font-size: 12px;
      padding: 2px 20px;
    }
    .product-column {
    }
    .button-spacer {
      padding: 7.5px 15px;
      margin: 15px 0;
      font-size: 0.85rem;
    }
    .site-option-column {
      box-shadow: var(--shadow-medium);
    }
    .link-button-container {
      border: none;
    }
    img {
      height: 20px;
    }
    @media screen and (max-width: 1400px) {
      .table {
        grid-template-columns: repeat(4, minmax(100px, 150px));
      }
      .details-column {
        grid-column-start: 1;
        grid-column-end: 6;
      }
      .details-heading {
        display: inline;
        padding: 200px 0;
      }
      .hide-on-mid-size {
        display: none;
      }

    }

    @media screen and (max-width: 880px) {
      .table {
        display: none;
      }
      .mobile-link-container {
        text-align: center;
      }
      .mobile-table {
        display: block;
        color: var(--main-text-colour);
        font-family: var(--main-font);
      }
      .table-mob-title {
        text-align: center;
        font-size: 2rem;
      }
      .mobile-product-box {
        border: solid #bfa1a1c9 1px;
        border-radius: var(--soft-radius);
        width: 320px;
        margin: 40px auto;
        padding: 5px 20px;
      }
      .mob-title {
        text-align: center;
        font-size: 1.75rem;
      }
      .mob-price {
        text-align: center;
        font-size: 1rem;
      }
      .mob-details-box {
        text-align: center;
        font-size: 1.25rem;
      }
    }
    @media screen and (max-width: 480px) {
      .mobile-product-box {
        width: 85%;
        padding: 2.5px 5px;
      }
    `}</style>
  </section>
);

export default Table;